#!/usr/bin/env python3

# To use this script from anywhere, run:
"""
sudo cp stockutil.py /usr/local/bin/stockutil
"""
# And use `stockutil` within the directory you'd like videos processed

import os
import subprocess
import argparse
import json
import time
from pathlib import Path
import requests #type: ignore

WATERMARK_IMAGE_URL = "https://raw.githubusercontent.com/OperationFman/portfolio/refs/heads/main/utils/scripts/watermark.png"
THUMBNAIL_TIMESTAMP = "00:00:02"
THUMBNAILS_FOLDER_NAME = "thumbnails"
NORMAL_THUMBNAIL_SUBFOLDER = "normal"
SQUARED_THUMBNAIL_SUBFOLDER = "squared"
WATERMARKED_FOLDER_NAME = "watermarks"
FFMPEG_CRF = 16
FFMPEG_PRESET = "slower"
WATERMARK_POSITION = "W-w-20:H-h-20"
OUTPUT_VIDEO_FPS = 30
OUTPUT_PIX_FMT = "yuv420p"

ALLOWED_EXTENSIONS = ('.mp4', '.mov', '.avi', '.mkv', '.webm')

def create_output_dirs(input_dir: Path):
    normal_thumbnails_dir = input_dir / THUMBNAILS_FOLDER_NAME / NORMAL_THUMBNAIL_SUBFOLDER
    squared_thumbnails_dir = input_dir / THUMBNAILS_FOLDER_NAME / SQUARED_THUMBNAIL_SUBFOLDER
    watermarked_dir = input_dir / WATERMARKED_FOLDER_NAME

    normal_thumbnails_dir.mkdir(parents=True, exist_ok=True)
    squared_thumbnails_dir.mkdir(parents=True, exist_ok=True)
    watermarked_dir.mkdir(parents=True, exist_ok=True)
    return normal_thumbnails_dir, squared_thumbnails_dir, watermarked_dir

def process_video(video_path: Path, normal_thumbnails_output_dir: Path, squared_thumbnails_output_dir: Path, watermarked_output_dir: Path, root_folder_name_lower: str):
    base_name = video_path.stem
    print(f"Processing: {video_path.name}")

    thumbnail_output_path = normal_thumbnails_output_dir / f"{base_name}.jpg"
    thumbnail_command = [
        "ffmpeg",
        "-i", str(video_path),
        "-ss", THUMBNAIL_TIMESTAMP,
        "-vframes", "1",
        "-q:v", "2",
        str(thumbnail_output_path)
    ]
    try:
        subprocess.run(thumbnail_command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    except subprocess.CalledProcessError as e:
        print(f"ERROR extracting thumbnail for {video_path.name}: {e}")
        return None

    square_thumbnail_output_path = squared_thumbnails_output_dir / f"{base_name}_square.jpg"
    square_thumbnail_command = [
        "ffmpeg",
        "-i", str(video_path),
        "-ss", THUMBNAIL_TIMESTAMP,
        "-vframes", "1",
        "-q:v", "2",
        "-vf", "crop=in_h:in_h:(in_w-in_h)/2",
        str(square_thumbnail_output_path)
    ]
    try:
        subprocess.run(square_thumbnail_command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    except subprocess.CalledProcessError as e:
        print(f"ERROR extracting square thumbnail for {video_path.name}: {e}")

    watermarked_video_output_path = watermarked_output_dir / f"{base_name}_watermarked.mp4"
    watermark_command = [
        "ffmpeg",
        "-i", str(video_path),
        "-i", WATERMARK_IMAGE_URL,
        "-filter_complex",
        f"[0:v]format={OUTPUT_PIX_FMT}[v0];[v0][1:v]overlay={WATERMARK_POSITION}",
        "-c:v", "libx264",
        "-crf", str(FFMPEG_CRF),
        "-preset", FFMPEG_PRESET,
        "-profile:v", "high",
        "-level", "4.0",
        "-r", str(OUTPUT_VIDEO_FPS),
        "-vsync", "cfr",
        "-c:a", "copy",
        str(watermarked_video_output_path)
    ]
    try:
        subprocess.run(watermark_command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=3600)
    except subprocess.CalledProcessError as e:
        print(f"ERROR creating watermarked video for {video_path.name}: {e}")
        print(f"FFmpeg stderr: {e.stderr.decode()}")
    except subprocess.TimeoutExpired:
        print(f"ERROR: Watermarking timed out for {video_path.name}. Video might be too long or machine too slow.")
    except Exception as e:
        print(f"An unexpected error occurred for {video_path.name}: {e}")

    return {
        "title": base_name,
        "price": 5,
        "thumbnail": f"{root_folder_name_lower}/{base_name}.jpg",
        "link": "",
        "created": int(time.time()),
        "tags": [""]
    }

def main():
    parser = argparse.ArgumentParser(description="Processes video clips to generate thumbnails and watermarked versions.")
    parser.add_argument(
        "input_dir",
        nargs="?",
        default=os.getcwd(),
        type=Path,
        help="Path to the directory containing video clips. Defaults to the current directory."
    )
    args = parser.parse_args()

    input_video_dir = args.input_dir.resolve()
    root_folder_name_lower = input_video_dir.name.lower()

    if not input_video_dir.is_dir():
        print(f"Error: Input directory not found: {input_video_dir}")
        return

    normal_thumbnails_output_dir, squared_thumbnails_output_dir, watermarked_output_dir = create_output_dirs(input_video_dir)

    asset_item_meta_data = []
    videos_processed = 0
    videos_found = False
    for item in input_video_dir.iterdir():
        if item.is_file() and item.suffix.lower() in ALLOWED_EXTENSIONS:
            videos_found = True
            metadata = process_video(item, normal_thumbnails_output_dir, squared_thumbnails_output_dir, watermarked_output_dir, root_folder_name_lower)
            if metadata:
                asset_item_meta_data.append(metadata)
            videos_processed += 1

    if not videos_found:
        print(f"\nNo video files found in '{input_video_dir}' with extensions: {', '.join(ALLOWED_EXTENSIONS)}")
    else:
        output_json_path = input_video_dir / "metadata.json"
        with open(output_json_path, 'w') as f:
            json.dump({"assetItemMetaData": asset_item_meta_data}, f, indent=4)
        print(f"\nMetadata successfully written to {output_json_path}")

    print(f"\nFinished! {videos_processed} videos processed.")

if __name__ == "__main__":
    main()
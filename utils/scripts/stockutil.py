#!/usr/bin/env python3

# To use this script from anywhere, run:
"""
sudo cp stockutil.py /usr/local/bin/stockutil
"""
# And use `stockutil` within the directory you'd like videos processed

import os
import subprocess
import argparse
from pathlib import Path
import requests #type: ignore

WATERMARK_IMAGE_URL = "https://raw.githubusercontent.com/OperationFman/portfolio/refs/heads/main/src/scripts/watermark.png"
THUMBNAIL_TIMESTAMP = "00:00:02"
THUMBNAILS_FOLDER_NAME = "thumbnails"
WATERMARKED_FOLDER_NAME = "watermarks"

FFMPEG_CRF = 20
FFMPEG_PRESET = "slower"
WATERMARK_POSITION = "W-w-20:H-h-20"

ALLOWED_EXTENSIONS = ('.mp4', '.mov', '.avi', '.mkv', '.webm')

def create_output_dirs(input_dir: Path):
    thumbnails_dir = input_dir / THUMBNAILS_FOLDER_NAME
    watermarked_dir = input_dir / WATERMARKED_FOLDER_NAME
    thumbnails_dir.mkdir(parents=True, exist_ok=True)
    watermarked_dir.mkdir(parents=True, exist_ok=True)
    return thumbnails_dir, watermarked_dir

def process_video(video_path: Path, thumbnails_output_dir: Path, watermarked_output_dir: Path):
    base_name = video_path.stem
    print(f"\nProcessing: {video_path.name}")

    thumbnail_output_path = thumbnails_output_dir / f"{base_name}.jpg"
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
        return

    watermarked_video_output_path = watermarked_output_dir / f"{base_name}_watermarked.mp4"
    watermark_command = [
        "ffmpeg",
        "-i", str(video_path),
        "-i", WATERMARK_IMAGE_URL,
        "-filter_complex",
        f"[0:v][1:v]overlay={WATERMARK_POSITION}",
        "-c:v", "libx264",
        "-crf", str(FFMPEG_CRF),
        "-preset", FFMPEG_PRESET,
        "-c:a", "copy",
        str(watermarked_video_output_path)
    ]
    try:
        subprocess.run(watermark_command, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, timeout=3600)
        print(f"Watermarked video created successfully: {watermarked_video_output_path.name}.")
    except subprocess.CalledProcessError as e:
        print(f"ERROR creating watermarked video for {video_path.name}: {e}")
        print(f"FFmpeg stderr: {e.stderr.decode()}")
    except subprocess.TimeoutExpired:
        print(f"ERROR: Watermarking timed out for {video_path.name}. Video might be too long or machine too slow.")
    except Exception as e:
        print(f"An unexpected error occurred for {video_path.name}: {e}")

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

    if not input_video_dir.is_dir():
        print(f"Error: Input directory not found: {input_video_dir}")
        return

    thumbnails_output_dir, watermarked_output_dir = create_output_dirs(input_video_dir)

    videos_processed = 0
    videos_found = False
    for item in input_video_dir.iterdir():
        if item.is_file() and item.suffix.lower() in ALLOWED_EXTENSIONS:
            videos_found = True
            process_video(item, thumbnails_output_dir, watermarked_output_dir)
            videos_processed += 1

    if not videos_found:
        print(f"\nNo video files found in '{input_video_dir}' with extensions: {', '.join(ALLOWED_EXTENSIONS)}")

    print(f"\nFinished! {videos_processed} videos processed.")

if __name__ == "__main__":
    main()
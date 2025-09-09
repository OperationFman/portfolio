import fs from "fs";
import path from "path";
import { stockFootageMetaData } from "../src/datasources/AssetMetaData";
import { travelVideoMetaData } from "../src/datasources/TravelMetaData";
import { guideMetaData } from "../src/datasources/GuideMetaData";

const outDir = path.resolve(__dirname, "./sitemap-meta");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

fs.writeFileSync(
	path.join(outDir, "AssetMetaData.json"),
	JSON.stringify(stockFootageMetaData, null, 2),
);
fs.writeFileSync(
	path.join(outDir, "TravelMetaData.json"),
	JSON.stringify(travelVideoMetaData, null, 2),
);
fs.writeFileSync(
	path.join(outDir, "GuideMetaData.json"),
	JSON.stringify(guideMetaData, null, 2),
);

console.log("✅ Exported metadata as JSON for sitemap");

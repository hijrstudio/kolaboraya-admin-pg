const fs = require("fs");
const path = require("path");

const STRAPI_API = "https://kolaborayaid-admin-pg-uenjk.ondigitalocean.app";
const API_TOKEN =
  "147b5d1f8d4eef45d286c750579ab103c3b81c3f07a7796b1fa1066c617a0ddd3bc4b88b7ab2eb6befa6d4320823717ac430a47ff59b5c21bb1b1798de408dfb629b877733814c1efc56e16f0f6d3b6e35ddb9a6ae39eb28c38aaf0ce28a80cdff3835ca5826aa6b28a8a118d11268f83fcb505fe77de8c8495002c1603aa84e";
const DOWNLOAD_DIR = path.join(__dirname, "downloads");

async function downloadFile(url, filename) {
  const res = await fetch(`${STRAPI_API}${url}`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });

  const buffer = Buffer.from(await res.arrayBuffer());

  if (!fs.existsSync(DOWNLOAD_DIR)) {
    fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
  }

  fs.writeFileSync(path.join(DOWNLOAD_DIR, filename), buffer);
}

async function run() {
  console.log("📦 Fetch all files...");

  const res = await fetch(`${STRAPI_API}/api/upload/files`, {
    headers: { Authorization: `Bearer ${API_TOKEN}` },
  });

  const files = await res.json();

  console.log(`✅ Total files: ${files.length}`);

  for (const file of files) {
    if (file.provider === "local") {
      // original
      await downloadFile(file.url, file.name);
      console.log("Downloaded:", file.name);

      // formats
      const formats = file.formats || {};
      for (const key in formats) {
        const fmt = formats[key];
        await downloadFile(fmt.url, fmt.name);
        console.log(`Downloaded format ${key}:`, fmt.name);
      }
    }
  }

  console.log("🎉 Semua file selesai!");
}

run().catch(console.error);

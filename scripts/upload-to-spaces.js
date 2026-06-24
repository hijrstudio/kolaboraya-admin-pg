const fs = require("fs");
const path = require("path");
const {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
} = require("@aws-sdk/client-s3");

const UPLOAD_DIR = path.join(__dirname, "downloads"); // folder tempat file yang sudah didownload
const BUCKET = "kolaboraya-media";

const s3 = new S3Client({
  region: "sgp1",
  endpoint: "https://sgp1.digitaloceanspaces.com",
  credentials: {
    accessKeyId: process.env.DO_SPACE_KEY,
    secretAccessKey: process.env.DO_SPACE_SECRET,
  },
});

async function fileExists(key) {
  try {
    await s3.send(
      new HeadObjectCommand({
        Bucket: BUCKET,
        Key: key,
      }),
    );
    return true; // file ada
  } catch (err) {
    if (err.$metadata?.httpStatusCode === 404) {
      return false; // file tidak ada
    }
    throw err; // error lain
  }
}

async function uploadFile(filePath, fileName) {
  const exists = await fileExists(fileName);

  if (exists) {
    console.log("⏭️ Skip (already exists):", fileName);
    return;
  }

  const fileContent = fs.readFileSync(filePath);

  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: fileName,
    Body: fileContent,
    ACL: "public-read",
  });

  await s3.send(command);
  console.log("✅ Uploaded:", fileName);
}

async function run() {
  const files = fs.readdirSync(UPLOAD_DIR);

  for (const file of files) {
    const fullPath = path.join(UPLOAD_DIR, file);
    const stat = fs.statSync(fullPath);

    if (stat.isFile()) {
      await uploadFile(fullPath, file);
    }
  }

  console.log("🎉 Semua file berhasil di-upload ke DO Spaces!");
}

run().catch(console.error);

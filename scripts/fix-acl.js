const {
  S3Client,
  ListObjectsV2Command,
  PutObjectAclCommand,
} = require("@aws-sdk/client-s3");

const s3 = new S3Client({
  region: "sgp1",
  endpoint: "https://sgp1.digitaloceanspaces.com",
  credentials: {
    accessKeyId: process.env.DO_SPACE_KEY,
    secretAccessKey: process.env.DO_SPACE_SECRET,
  },
});

const BUCKET = "kolaboraya-media";

async function run() {
  const list = await s3.send(new ListObjectsV2Command({ Bucket: BUCKET }));

  for (const item of list.Contents) {
    await s3.send(
      new PutObjectAclCommand({
        Bucket: BUCKET,
        Key: item.Key,
        ACL: "public-read",
      }),
    );
    console.log("Fixed:", item.Key);
  }

  console.log("DONE 🚀");
}

run();

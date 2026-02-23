export default ({ env }) => {
  console.log("SPACE KEY:", env("DO_SPACE_KEY"));
  console.log("SPACE SECRET:", env("DO_SPACE_SECRET") ? "ADA" : "KOSONG");
  console.log("SPACE ENDPOINT:", env("DO_SPACE_ENDPOINT"));
  console.log("SPACE REGION:", env("DO_SPACE_REGION"));
  console.log("SPACE BUCKET:", env("DO_SPACE_BUCKET"));

  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          accessKeyId: env("DO_SPACE_KEY"),
          secretAccessKey: env("DO_SPACE_SECRET"),
          endpoint: env("DO_SPACE_ENDPOINT"),
          region: env("DO_SPACE_REGION"),
          params: {
            Bucket: env("DO_SPACE_BUCKET"),
          },
          s3Options: {
            forcePathStyle: false,
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};

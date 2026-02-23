export default ({ env }) => ({
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
});

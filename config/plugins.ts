export default ({ env }) => {
  // Use DO Spaces only when its credentials are set (production droplet).
  // Without them (local dev), Strapi falls back to the default local provider (public/uploads).
  if (!env("DO_SPACE_KEY")) {
    return {};
  }

  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env("DO_SPACE_KEY"),
              secretAccessKey: env("DO_SPACE_SECRET"),
            },
            region: env("DO_SPACE_REGION"),
            endpoint: env("DO_SPACE_ENDPOINT"),
            forcePathStyle: false,
          },
          params: {
            Bucket: env("DO_SPACE_BUCKET"),
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

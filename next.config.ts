import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Pin the file-tracing root to this app so Next doesn't infer the parent
  // ~/Project workspace (which has its own lockfile) as the root.
  outputFileTracingRoot: process.cwd(),
  async redirects() {
    return [
      // Twilio case study was reframed around the Video business unit; keep the
      // old indexed URL alive with a permanent redirect to the new slug.
      {
        source: "/project/twilio-live",
        destination: "/project/twilio-video",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  compiler:{
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
        port: '',
        pathname: '/paulicdom',
      },
    ],
  },
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
  experimental: {
    // Next.js supports a new MDX compiler written in Rust. 
    // This compiler is still experimental and is not recommended for production use.
    mdxRs: true,
  }
})

module.exports = withMDX(nextConfig);

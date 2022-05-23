module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/:path',
        destination: 'https://v3.goddamnyouryan.com/blog/:path',
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://v3.goddamnyouryan.com/blog',
        permanent: true,
      },
    ]
  },
}
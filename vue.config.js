module.exports = {
  build: {
    chunkSizeWarningLimit: 5000, // Chunk size warning limit in KB
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Deployment_exercise/'
      : '/',
      outputDir: 'dist',
  }

// This comment will trigger ghpages render again
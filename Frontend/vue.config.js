module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: "all",
    hot: true,
    liveReload: true,
    watchFiles: {
      paths: ["src/**/*", "public/**/*"],
      options: {
        poll: 1000, // Aggressiveres Polling alle 1s
        usePolling: true,
        ignored: /node_modules/,
      },
    },
  },
};

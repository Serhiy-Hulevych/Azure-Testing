const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: "8080"
  },
  publicPath: '/Third'
})

/*
https: {
      key: fs.readFileSync('./src/security/cert.key'),
      cert: fs.readFileSync('./src/security/cert.pem'),
      //ca: fs.readFileSync('./certs/my-ca.crt')
      requestCert: false,
      rejectUnauthorized: false
    },
    */

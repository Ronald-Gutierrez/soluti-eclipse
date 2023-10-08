const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // La URL base donde deseas interceptar las solicitudes
    createProxyMiddleware({
      target: 'https://aa.usno.navy.mil', // La URL de la API externa
      changeOrigin: true, // Cambiar el encabezado de origen para evitar problemas CORS
    })
  );
};

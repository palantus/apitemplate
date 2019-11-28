module.exports = {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10) || 8080,

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  }
};
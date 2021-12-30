module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '15b92b6f0ab23e97ec6a7a4bae01e2f1'),
  },
});

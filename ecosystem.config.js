module.exports = {
  apps: [
    {
      name: 'api-licencias-siian',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env: {
        NODE_ENV: 'development',
        NEXT_PUBLIC_BACKEND_URL: 'http://25.64.132.239:4001/api',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_BACKEND_URL: 'http://25.64.132.239:4001/api',
        PORT: 4000,
      },
    },
  ],
};

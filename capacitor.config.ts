import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pianosync.app',
  appName: 'pianosync',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "GoogleAuth": {
      "scopes": [
        "profile",
        "email"
      ],
      "serverClientId": "271408278055-r7cvu2ccfaagpts13aeqq8lbs40us7th.apps.googleusercontent.com",
      "forceCodeForRefreshToken": true
    }
  }
};

export default config;

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.survival.offgridguide',
  appName: 'Ultimate Off-Grid Survival Guide',
  webDir: '.',
  server: {
    androidScheme: 'https'
  },
  android: {
    buildOptions: {
      releaseType: 'AAB'
    }
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#5D5CDE'
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#5D5CDE'
    }
  }
};

export default config;

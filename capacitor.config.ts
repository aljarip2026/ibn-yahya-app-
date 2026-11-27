import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.ibnyahya.app',
  appName: 'ابن يحيى',
  webDir: 'www',
  server: { androidScheme: 'https' },
  android: { allowMixedContent: true }
};
export default config;

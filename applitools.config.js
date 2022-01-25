module.exports = {
  appName: 'AD-1239',
  showLogs: false,
  batchName: 'My batch - Mock data',
  concurrency: 5,
  apiKey: process.env.APPLITOOLS_APY_KEY,
  browser: [
    {width: 1024, height: 768, name: 'chrome'},
    {width: 1600, height: 1200, name: 'safari'},
    {
      iosDeviceInfo: {
        deviceName: 'iPhone 11 Pro',
        //screenOrientation: 'landscape', // optional, default: 'portrait'
        iosVersion: 'latest' // optional, default: undefined (i.e. the default is determined by the Ultrafast grid)
      },
    }
  ],
  batchId: process.env.APPLITOOLS_BATCH_ID
}
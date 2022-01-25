module.exports = {
  appName: 'AD-1239',
  showLogs: false,
  batchName: 'My batch - Mock data',
  browser: [
    {width: 1024, height: 768, name: 'chrome'},
    {width: 1024, height: 768, name: 'safari'},
    {
      iosDeviceInfo: {
        deviceName: 'iPhone 11 Pro',
        //screenOrientation: 'landscape', // optional, default: 'portrait'
        iosVersion: 'latest' // optional, default: undefined (i.e. the default is determined by the Ultrafast grid)
      },
    }
  ]
}
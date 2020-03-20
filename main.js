'use strict';

const electron = require('electron');
const serve = require('electron-serve');
const loadURL = serve({ directory: 'dist' });
const Path = require('path');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
const electronConfig = require(Path.join(
  __dirname,
  'config',
  'electron-config.json',
));

(async () => {
  await app.whenReady();

  mainWindow = new BrowserWindow(electronConfig);
  await mainWindow.loadURL('app://-');
  // The above is equivalent to this:
  // The `-` is just the required hostname
  await mainWindow.focus();
})();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
  }
});

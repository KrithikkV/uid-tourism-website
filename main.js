const path = require('path');
const { app, BrowserWindow, Menu, MenuItem } = require('electron');

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load index.html into the window.
  win.loadFile(path.join(__dirname, 'Main2.html'));
}
const template = [
  {
    label: 'View',
    submenu: [
      {
        label: 'Back',
        accelerator: 'Alt+Left',
        click: () => {
          const win = BrowserWindow.getFocusedWindow();
          if (win.webContents.canGoBack()) win.webContents.goBack();
        }
      },
      {
        label: 'Forward',
        accelerator: 'Alt+Right',
        click: () => {
          const win = BrowserWindow.getFocusedWindow();
          if (win.webContents.canGoForward()) win.webContents.goForward();
        }
      },
      { type: 'separator' },
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

app.whenReady().then(createWindow);

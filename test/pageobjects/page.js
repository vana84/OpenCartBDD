export default class Page {
    open (path) {
      browser.windowHandleMaximize();
      browser.url(path)
       }
    }
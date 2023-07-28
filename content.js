var script = document.createElement('script');
script.textContent = `
  function changeFavicon() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = '${chrome.runtime.getURL("icon16.png")}';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  
  window.addEventListener('load', function () {
    setInterval(changeFavicon, 1000);
  });
`;
(document.head||document.documentElement).appendChild(script);
script.remove();

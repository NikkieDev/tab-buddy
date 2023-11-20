(async function() {
    'use strict';
    await chrome.storage.local.get(["version"], async result => {
        document.querySelector("span#version__value").innerHTML = `v${result.version}`;
        await localStorage.setItem("version", result.version);
    });
})();

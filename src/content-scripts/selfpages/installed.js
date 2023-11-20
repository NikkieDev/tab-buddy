(async function() {
    'use strict';
    await chrome.storage.local.get(["currentVersion"], result => {
        document.querySelector("span#version__value").innerHTML = `v${result.currentVersion}`;
    })

    await chrome.storage.local.get(["installed"], result => localStorage.setItem("installed", "true"));
})();
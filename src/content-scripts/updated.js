(async function() {
    'use strict';

    await chrome.storage.local.get(["newVersion", "currentVersion"], async result => {
        document.querySelector("span#version__value").innerHTML = `v${result.newVersion}`;
        document.querySelector("span#version-old__value").innerHTML = `v${result.currentVersion}`;

        await chrome.storage.local.set({ currentVersion: result.newVersion });
    });
})();

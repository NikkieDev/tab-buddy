function defineShortcuts(data) {
    console.log(JSON.stringify(data));
}

(async function() {
    'use strict';

    await chrome.storage.local.get(["version", "shortcuts"], result => {
        document.querySelector("#version").innerHTML = `v${result.version}`;
        defineShortcuts(result.shortcuts);
    })
})();
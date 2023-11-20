class Worker {
    version = null;

    static async setVersion(isNew = false) {
        this.version = await chrome.runtime.getManifest()["version"];
        
        isNew ? await chrome.storage.local.set({ version: this.version })
        : await chrome.storage.local.set({ currentVersion: this.version })
    }
}

chrome.runtime.onInstalled.addListener(async (event) => {
    await chrome.storage.local.set({installed: true});
    chrome.runtime.setUninstallURL("https://tab-buddy.kubyx.nl/browser-content/pages/uninstalled.html");

    if (event.reason == "install") {
        await Worker.setVersion();
        chrome.tabs.create({ url: "https://tab-buddy.kubyx.nl/browser-content/pages/installed.html" });
    } else if (event.reason == "update") {
        await Worker.setVersion(true);
        chrome.tabs.create({ url: "https://tab-buddy.kubyx.nl/browser-content/pages/updated.html" });
    }
});



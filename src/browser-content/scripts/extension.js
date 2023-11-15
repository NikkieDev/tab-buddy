(async function() {
    'use strict';
    let checkInstalled = undefined;
    let x = 0;

    checkInstalled = setInterval(() => {
        if (localStorage.getItem("installed") == "true") {
            console.log("found");
            clearInterval(checkInstalled);
        } else x++;

        if (x == 4) {
            clearInterval(checkInstalled);
            alert("Not installed!")
            // window.open(toStore)
        }
    }, 200);
})();
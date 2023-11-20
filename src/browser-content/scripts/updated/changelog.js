await fetch(`../../../changelogs/changelog-${localStorage.getItem('version')}.json`, { method: 'GET' })
.then(response => response.json()).then(response => {
    Object.keys(response).forEach(changeCategory => { // Change category is a large item that has been changed. UI, Core, etc.
        const categoryElem = document.createElement('div');
        const categoryElemHeader = document.createElement("h3");
        const categoryElemChild = document.createElement("ul");

        categoryElemHeader.innerHTML = changeCategory;
        categoryElemHeader.classList += "bg-warning m-0 p-2"
        
        categoryElem.classList += "d-flex flex-column m-2 bg-dark border rounded shadow text-white"

        categoryElemChild.classList += "mt-2"

        categoryElem.appendChild(categoryElemHeader);
        categoryElem.appendChild(categoryElemChild);
        
        Object.values(response[changeCategory]).forEach(categoryValue => {
            const elem = document.createElement("li");
            
            elem.innerHTML = `${categoryValue}`;
            categoryElemChild.appendChild(elem);
        });

        document.querySelector("div#changelogs-body").appendChild(categoryElem);
    });
})
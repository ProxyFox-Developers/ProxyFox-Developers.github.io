// Automatically set to the content in sidebars.json
const sidebars = {}/*sidebars*/

/**
 * Handles the onclick event to allow for navigation within JS, and
 * prevents the default handler normally assigned to the element from running.
 *
 * @param event The event object. We require #id.
 * @return {@code false} to prevent <a>'s native handler from running.
 */
function onNavClick(event) {
    event.preventDefault();
    update(event.target.id);
    // Must return false.
    return false;
}

for(let element of document.getElementsByClassName("pf-click")) {
    element.addEventListener("click", onNavClick);
}

let lastTab = document.getElementsByClassName("pf-tab")[0];
let homeTab = document.getElementById("home")
var currentSidebar = sidebars["/home"]

let sidebar = document.getElementById("pf-sidebar");
let maincontent = document.getElementById("pf-content");
let title = document.getElementById("pf-title");
let image = document.getElementById("pf-image");
let body = document.getElementById("pf-body");
function setMain(content) {
    image.src = content.image
    title.innerText = content.title
    body.innerText = content.description
}
async function updateTab() {
    let page = document.getElementById(window.location.pathname.substr(1).split("/")[0]) || homeTab;
    lastTab.classList.remove("pf-tab");
    lastTab = page;
    currentSidebar = sidebars[page.id] || sidebars["wip"];
    page.classList.add("pf-tab");
    var child = sidebar.lastElementChild;
    while (child) {
        sidebar.removeChild(child);
        child = sidebar.lastElementChild;
    }
    let i = true
    for (let name in currentSidebar) {
        if (i) {
            setMain(currentSidebar[name])
            i = false
        }
        let item = document.createElement("dt")
        item.onclick = () => {
            setMain(currentSidebar[name])
        }
        item.innerText = currentSidebar[name].title
        sidebar.appendChild(item)
    }
}
updateTab()
function update(name) {
    if ("/"+name == window.location.pathname) return
    window.history.pushState({}, "ProxyFox", window.location.protocol+"/"+name)
    updateTab()
}
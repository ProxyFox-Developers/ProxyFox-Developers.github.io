const sidebars = {
    "wip": {
        "Under Construction": {
            title: "Under Construction...",
            image: null,
            description: "Check back here later to see what's new"
        }
    },
    "/home": {
        "About ProxyFox": {
            title: "About ProxyFox",
            image: "https://cdn.discordapp.com/avatars/947174063841894500/50c07a7ddecdbe1f1a22d96f6dc63f1f.png",
            description: "ProxyFox is a modern Discord bot designed for systems to aid communication.\nIt uses Discord's webhooks to create pseudo-users in which to proxy message content as."
        }
    }
}

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
    let page = document.getElementById(window.location.pathname.substr(1)) || homeTab;
    lastTab.classList.remove("pf-tab");
    lastTab = page;
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
        item.innerText = name
        sidebar.appendChild(item)
        let line = document.createElement("hr")
        sidebar.appendChild(line)
    }
    sidebar.removeChild(sidebar.lastElementChild)
}
updateTab()
function update(name) {
    if ("/"+name == window.location.pathname) return
    window.history.pushState({}, "ProxyFox", window.location.protocol+"/"+name)
    updateTab()
}
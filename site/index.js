let tab = document.getElementsByClassName("pf-tab")[0];
switch (window.location.pathname) {
    case "/system":
        tab.style.left = "12.5vw"
        break;
    case "/members":
        tab.style.left = "25vw"
        break;
    case "/switches":
        tab.style.left = "37.5vw"
        break;
    case "/messages":
        tab.style.left = "50vw"
        break;
    case "/settings":
        tab.style.left = "62.5vw"
        break;
}
function update(name) {
    if ("/"+name == window.location.pathname) return
    window.history.pushState({}, "ProxyFox", window.location.protocol+"/"+name)
    switch (name) {
        case "system":
            tab.style.left = "12.5vw"
            break;
        case "members":
            tab.style.left = "25vw"
            break;
        case "switches":
            tab.style.left = "37.5vw"
            break;
        case "messages":
            tab.style.left = "50vw"
            break;
        case "settings":
            tab.style.left = "62.5vw"
            break;
        default:
            tab.style.left = "0px"
            break;
    }
}
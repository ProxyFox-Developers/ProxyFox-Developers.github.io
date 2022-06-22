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
function getTheme() {
    let theme = "light";

    if (localStorage.getItem("theme") && localStorage.getItem("theme") === "dark") theme = "dark";
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) theme = "dark";

    if (document.cookie.indexOf("theme=dark") > -1) theme = "dark";
    else if (document.cookie.indexOf("theme=light") > -1) theme = "light";

    return theme;
}

function switchTheme() {
    let theme = getTheme() === "light" ? "dark" : "light";
    loadTheme(theme);
}

function getThemeIcon(theme) {
    if (theme === "light") return "assets/sun.png";
    else return "assets/moon.png";
}

function loadTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.cookie = "theme=" + theme + "; SameSite=None; Secure";

    document.getElementById("theme-icon").src = getThemeIcon(theme);
}

document.onload = function(e) {
    document.documentElement.setAttribute("data-theme", getTheme());
}

document.onreadystatechange = function() {
    document.getElementById("theme-icon").src = getThemeIcon(getTheme());
    loadTheme(getTheme());
}
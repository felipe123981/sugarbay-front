function lockPage(message, maxWidth) {
    if (document.body.clientWidth > maxWidth) {
        if (message != "") {
            alert(message);
        }
        window.location.href = "blocked-page.html"
    } else {
        if (document.URL.indexOf("blocked") != 0) {
            window.location.href = "index.html";
        }
    }
}

function loadLockPage(message, maxWidth) {
    if (document.body.clientWidth > maxWidth) {
        if (message != "") {
            alert(message);
        }
        window.location.href = "blocked-page.html";
    }
}

function slideCatalog() {
    var button = document.getElementsByTagName("button")[1];
    alert(button);
}
function writeCookie(name, email, token) {
    document.cookie = "name="
    name.split(" ").join("") +
    "; email=" +
    email +
    "; token=" +
    token; +
    "; path=/; domain=sugarbay.com"

  console.log(`${document.cookie}`);
}
function readCookie(name) {
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for( var i = 0; i < cookies.length; i++) {
        var c = cookies[i];
        while (c.charAt(0) == ` `)
            c = c.substring(1, c.length);
        if (c.indexOf(searchName == 0)) {
            return c.substring(searchName.length , c.length);
        }

        return null;
    }
}

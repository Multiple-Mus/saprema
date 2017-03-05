// Delegates for login/sign-up
delegate(document, "click", "#user-register-submit", function (event) {
    event.preventDefault();
    //var form = document.getElementById("register-form");
    //var params = serialize(form);
    //loadHtml("/modal-login", "container", "POST", "application/json", params);
    loadHtml("/saprema-views/main-menu.html", "main-content", "GET", "text/html");
});

delegate(document, "click", "#user-login-submit", function (event) {
    event.preventDefault();
    //var form = document.getElementById("login-form");
    //var params = serialize(form);
    //loadHtml("/modal-login", "container", "POST", "application/json", params);
    loadHtml("/saprema-views/main-menu.html", "main-content", "GET", "text/html");
});

delegate(document, "click", "#user-login-btn", function (event) {
    event.preventDefault();
    loadHtml("/saprema-views/login-modal.html", "primary-modal", "GET", "text/html");
});

delegate(document, "click", "#user-register-btn", function (event) {
    event.preventDefault();
    loadHtml("/saprema-views/register-modal.html", "primary-modal", "GET", "text/html");
});

delegate(document, "click", "#student-radio", function (event) {
    loadHtml("/saprema-views/register-student.html", "register-level", "GET", "text/html");
});

delegate(document, "click", "#teacher-radio", function (event) {
    loadHtml("/saprema-views/register-teacher.html", "register-level", "GET", "text/html");
});

function loadHtml(route, replace, type, reqHeader, params) {
    var httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
        return false;
    }

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                document.getElementById(replace).innerHTML = "";
                document.getElementById(replace).innerHTML = httpRequest.responseText;
            } else if (httpRequest.status === 404) {
                alert("404");
            } else {
                alert(httpRequest.status);
            }
        }
    };
    httpRequest.open(type, route);
    httpRequest.setRequestHeader('Content-type', reqHeader);
    if (params == null) {
        httpRequest.send();
    } else {
        httpRequest.send(params);
    }
}

// Function code taken from Stackoverflow https://stackoverflow.com/questions/30880757/javascript-equivalent-to-on
function delegate(el, evt, sel, handler) {
    el.addEventListener(evt, function (event) {
        var t = event.target;
        while (t && t !== this) {
            if (t.matches(sel)) {
                handler.call(t, event);
            }
            t = t.parentNode;
        }
    });
}
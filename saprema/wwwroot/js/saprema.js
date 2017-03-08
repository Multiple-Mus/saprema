/* Delegates for right navigation options */
window.onload = loadHtml("/saprema-views/nav-login-signup.html", "nav-right", "GET", "text/html");

/* Delegates for navigation bar */
delegate(document, "click", "#nav-name", function (event) {
    event.preventDefault();
    loadHtml("/saprema-views/main-menu.html", "main-content", "GET", "text/html");
});

/* Delegates for login/sign-up */
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
    //loadHtml("/saprema-views/nav-links.html", "nav-left", "GET", "text/html");
    //Set following code up to exicute on login success
    loadHtml("/saprema-views/nav-logged-in.html", "nav-right", "GET", "text/html");
});

delegate(document, "click", "#user-login-btn", function (event) {
    event.preventDefault();
    loadHtml("/saprema-views/login-modal.html", "primary-modal", "GET", "text/html");
});

delegate(document, "click", "#user-register-btn", function (event) {
    event.preventDefault();
    //loadHtml("/saprema-views/register-modal.html", "primary-modal", "GET", "text/html");
    loadHtml("/saprema-views/review-modal-class.html", "primary-modal", "GET", "text/html");
});

delegate(document, "click", "#student-radio", function (event) {
    loadHtml("/saprema-views/register-student.html", "register-level", "GET", "text/html");
});

delegate(document, "click", "#teacher-radio", function (event) {
    loadHtml("/saprema-views/register-teacher.html", "register-level", "GET", "text/html");
});

/* Delegates for user drop down */
delegate(document, "click", "#logout-btn", function (event) {
    //Logout functions go here
    loadHtml("/saprema-views/nav-login-signup.html", "nav-right", "GET", "text/html");
});

delegate(document, "click", "#profile-btn", function (event) {
    loadHtml("/saprema-views/user-profile.html", "main-content", "GET", "text/html");
    //Write out code, if teacher logged in excicute next line
    loadHtml("/saprema-views/user-profile-teacher.html", "teacher-profile", "GET", "text/html");
});

delegate(document, "click", "#statistics-btn", function (event) {
    loadHtml("/saprema-views/user-stats.html", "main-content", "GET", "text/html");
});

delegate(document, "click", "#poses-btn", function (event) {
    loadHtml("/saprema-views/user-poses.html", "main-content", "GET", "text/html");
});

/* Delegates for meditation menu */
delegate(document, "click", "#meditation-menu-breath", function (event) {
    loadHtml("/saprema-views/meditation-breath.html", "main-content", "GET", "text/html");
});

delegate(document, "click", "#breath-play-btn", function (event) {
    event.preventDefault();
    var breath_time = [];
    breath_time[0] = parseInt(document.getElementById("inhale").value);
    breath_time[1] = parseInt(document.getElementById("inHold").value);
    breath_time[2] = parseInt(document.getElementById("exhale").value);
    breath_time[3] = parseInt(document.getElementById("outHold").value);
    //var params = serialize(breath_time);
    //loadHtml("/saprema-views/meditation-breath-play.html", "main-content", "POST", "application/json", breath_time);
    loadHtml("/saprema-views/meditation-breath-play.html", "main-content", "GET", "text/html");
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

//Function code taken from Stackoverflow https://stackoverflow.com/questions/30880757/javascript-equivalent-to-on
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
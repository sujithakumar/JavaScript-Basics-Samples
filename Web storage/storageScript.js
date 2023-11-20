var out;

function loading() {
    clearResult();
    loadLocalStorage();
    loadSessionStorage();
}

function clearResult() {
    document.getElementById('outputL').innerHTML = " ";
    document.getElementById('outputS').innerHTML = " ";
}

function displayJson(inp) {
   // clearResult();
    out = {
        "name": document.getElementById('name').value,
        "pass": document.getElementById('pass').value
    }
    switch (inp) {
        case 'L':
            localStorage.setItem('JSonOut', JSON.stringify(out));
            document.getElementById('outputL').innerHTML = localStorage.getItem('JSonOut');
            break;
        case 'S':
            sessionStorage.setItem('JSonOut', JSON.stringify(out));
            document.getElementById('outputS').innerHTML = sessionStorage.getItem('JSonOut');
            break;
    }
}

function displayResults(input) {
    // clearResult();
     switch (input) {
         case 'outputL':
             document.getElementById('outputL').innerHTML = "name : " + localStorage.getItem('name') + " pass : " + localStorage.getItem('pass');
             break;
         case 'outputS':
             document.getElementById('outputS').innerHTML = "name : " + sessionStorage.getItem('name') + " pass : " + sessionStorage.getItem('pass');
             break;
 
     }
 }

 function loadLocalStorage() {
    if (localStorage.length > 0) {
        if (localStorage.getItem('JSonOut')) {
            document.getElementById('outputL').innerHTML = localStorage.getItem('JSonOut');
        }
        else if (localStorage.getItem('name')) {
            document.getElementById('outputL').innerHTML = "name : " + localStorage.getItem('name') + " pass : " + localStorage.getItem('pass');
        }
    }
    else {
        document.getElementById('outputL').innerHTML = "localstorage is not available in new tab";
    }
}

function storeinLocal() {
    if (localStorage) {
        var name = document.getElementById('name').value;
        var pass = document.getElementById('pass').value;
        localStorage.setItem("name", name);
        localStorage.setItem("pass", pass)
    }
    displayResults('outputL');
}



function clearFromLocal() {
    if (localStorage) {
        localStorage.clear();
    }
    displayResults('outputL');
}

function clearFromSession() {
    if (sessionStorage) {
        sessionStorage.clear();
    }
    displayResults('outputS');
}

function storeinSession() {
    if (sessionStorage) {
        var name = document.getElementById('name').value;
        var pass = document.getElementById('pass').value;
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("pass", pass)
    }
    displayResults('outputS');
}

function loadSessionStorage() {
    if (localStorage.length > 0) {
        if (sessionStorage.getItem('JSonOut')) {
            document.getElementById('outputS').innerHTML = sessionStorage.getItem('JSonOut');
        }
        else if (sessionStorage.getItem('name')) {
            document.getElementById('outputS').innerHTML = "name : " + sessionStorage.getItem('name') + " pass : " + sessionStorage.getItem('pass');
        }
    }
    else {
        document.getElementById('outputS').innerHTML = "sessionstorage is not available in new tab";
    }
}

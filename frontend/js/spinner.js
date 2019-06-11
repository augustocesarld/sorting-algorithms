function enableSpinner () {
    document.getElementById("spinner").hidden = false;
    document.getElementById("graphic").hidden = true;
}

function disableSpinner (graphic = false) {
    document.getElementById("spinner").hidden = true;
    if (graphic) 
        document.getElementById("graphic").hidden = false;
}

disableSpinner();
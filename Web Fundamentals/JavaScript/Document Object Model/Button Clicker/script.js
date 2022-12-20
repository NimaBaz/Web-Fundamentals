function changeText(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login"
    }
}

function removeButton(element) {
    element.remove();

}

timesClicked = 0;

function liked() {
    alert('Ninja was liked');
    timesClicked++;

    document.getElementById("timesClicked").innerHTML = timesClicked;
    return true;
}


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

function liked() {
    alert('Ninja was liked');
}


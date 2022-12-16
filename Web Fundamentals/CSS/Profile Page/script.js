
// Creating a function to add item from list
function addItem() {
    var a = Profile.getElementById("add");
    var candidate = Profile.getElementById("candidate");
    var li = Profile.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(Profile.createTextNode(candidate.value));
    a.appendChild(li);
}
// Creating a function to remove item from list
function removeItem() {
    var a = Profile.getElementById("remove");
    var candidate = Profile.getElementById("candidate");
    var item = Profile.getElementById(candidate.value);
    a.removeChild(item);
}
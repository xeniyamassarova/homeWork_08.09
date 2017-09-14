addAnother = function() {
    var ul = document.getElementById("list");
    var textfield = document.getElementById("textfield");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(textfield.value));
    ul.appendChild(li)
    textfield.value = ""
}
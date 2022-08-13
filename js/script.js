// Create a new list item when clicking on the "Add" button
function newTask() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("taskInput").value;
    let task = document.createTextNode(inputValue);
    li.appendChild(task);

    if (inputValue === '') {
        alert("You must write something!"); 
    } else {
        document.getElementById("myUL").appendChild(li);
        document.getElementById("taskInput").value = ""; //after click, value is empty
    }

    let span = document.createElement("SPAN");
    let x = document.createTextNode("×");
    span.appendChild(x);
    li.appendChild(span);
    span.className = "close"; //close className is in CSS

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// // Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle("checked");
    }
}, false);

// // Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none"
    }
}

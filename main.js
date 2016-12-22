function handleAddButtonClick(e) {
	e.target.innerHTML = "dlick"
	var text = document.getElementById("input").value;
	var err = document.getElementById("errorBox");
	err.innerHTML = "";
	if (text == "") {
		err.innerHTML = "Write some text here to do!"
		return;
	}

	var newDiv = document.createElement("div");
	newDiv.className = "todo-item";

	var newImg = document.createElement("img");
	newImg.className = "checkbox";
	newImg.alt = "checkbox";
	newImg.src = "images/unchecked.jpg";
	newImg.onclick = handleCheckboxClick;
	newDiv.appendChild(newImg);

	var newP = document.createElement("p");
	newP.className = "item-text";
	newP.innerHTML = text;
	newDiv.appendChild(newP);

	var main = document.getElementById("main");
	main.insertBefore(newDiv, main.childNodes[0]);
	document.getElementById("input").value = "";

	// Don't propagate to use the parents' click handler
	e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true)
}

function handleClearButtonClick(e) {
	var items = document.getElementsByClassName("todo-item");
	var toClear = [];
	// This part needs ES6 compatability
	for (let i of items) {
		// First child is always the img checkbox
		if (i.childNodes[0].alt == "checked-checkbox")
			toClear.push(i);
	}
	// Clear the already done items out
	for (let i of toClear) {
		i.outerHTML = "";
	}

}

function handleCheckboxClick(e) {
	if (e.target.alt == "checked-checkbox")
		return;

	e.target.src = "images/checked.jpg"
	e.target.alt = "checked-checkbox"

	var strikedText = document.createElement("strike");
	// Second child will always be the text
	var siblingText = e.target.parentNode.childNodes[1];
	strikedText.innerHTML = siblingText.innerHTML;
	siblingText.innerHTML = "";
	siblingText.appendChild(strikedText);
}

document.getElementById("add").onclick = handleAddButtonClick;
document.getElementById("clear").onclick = handleClearButtonClick;



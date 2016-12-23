/********************
**** FUNCTIONS ******
*********************/

function handleAddButtonClick(e) {
	var text = document.getElementById("input").value;

	// Print error message if input is blank
	var err = document.getElementById("errorBox");
	err.innerHTML = "";
	if (text == "") {
		err.innerHTML = "Write some text here to do!"
		return;
	}

	// Create the new TODO item and append it
	var newDiv = document.createElement("div");
	newDiv.className = "todo-item";

	var newImg = document.createElement("img");
	newImg.className = "checkbox";
	newImg.alt = "checkbox";
	newImg.src = "images/unchecked.jpg";
	newImg.onclick = handleCheckboxClick;
	newDiv.appendChild(newImg);

	var newTextDiv = document.createElement("div");
	newTextDiv.className = "text-div";

	var newP = document.createElement("p");
	newP.className = "item-text";
	newP.innerHTML = text;
	newTextDiv.appendChild(newP);

	newDiv.appendChild(newTextDiv);

	var main = document.getElementById("main");
	main.insertBefore(newDiv, main.childNodes[0]);
	// Clear the input
	document.getElementById("input").value = "";

	// Don't propagate to use the parents' click handler
	e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = true)
}

// Remove all items with TODO items that have been checked off
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

	// Check the check box
	e.target.src = "images/checked.jpg"
	e.target.alt = "checked-checkbox"

	// Strike out the TODO text
	var strikedText = document.createElement("strike");
	// Second child will always be the text div, which will only have
	// a child of the text
	var siblingText = e.target.parentNode.childNodes[1].childNodes[0];
	strikedText.innerHTML = siblingText.innerHTML;
	siblingText.innerHTML = "";
	siblingText.appendChild(strikedText);
}

/*****************************************************************************/

document.getElementById("add").onclick = handleAddButtonClick;
document.getElementById("clear").onclick = handleClearButtonClick;
document.getElementById("input").maxLength = Math.round(document.getElementById("input").offsetWidth / 9);

/*

<div class="todo-item">
	<img alt="checkbox" src="images/unchecked.jpg" class="checkbox"/>
	<div class="text-div">
		<p class="item-text">Memememem</p>
	</div>
</div>

*/


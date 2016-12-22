function handleClick(e) {
	console.log(e);
	if (e.target.style.backgroundColor == "rgb(255, 0, 0)")
		e.target.style.backgroundColor = "#00f";
	else
		e.target.style.backgroundColor = "#f00";
}

document.getElementById("main").addEventListener("click", handleClick);
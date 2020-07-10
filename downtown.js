/*var bot = 1.35;

window.onload = movedot;
window.onresize = movedot;

function movedot(){
	var body = document.body;
	var dot = document.getElementById("dot");
	
	dot.style.top = (body.offsetHeight/bot) + "px";
};*/

// Reposition every resize
window.onload = movedots;
window.onresize = movedots;

//elements = ["dot"];	// List of elements to reposition
positions = [1.35];	// Position values for elements (top)

function movedots(){
	var elements = document.getElementsByClassName("point");
	console.log(elements);
	var i = 0;
	// Take all the listed elements and reposition them according to body height
	for (let element of elements)
	{
		element.style.top = (document.body.offsetHeight/positions[i]) + "px";
		console.log(element);
		i++;
	}
};
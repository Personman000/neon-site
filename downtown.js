/*var bot = 1.35;

window.onload = movedot;
window.onresize = movedot;

function movedot(){
	var body = document.body;
	var dot = document.getElementById("dot");
	
	dot.style.top = (body.offsetHeight/bot) + "px";
};*/

// Reposition every resize
window.onload = run;
window.onresize = movedots;

elements = [];	// List of elements to reposition
positions = [];	// Position values for elements (top)

function run(){
	// Set elements
	elements = document.getElementsByClassName("point");	
	for (let element of elements)
	{
		// Get top value from top style value
		var element_top = element.style.top;
		element_top = element_top.substring(0, element_top.length-2);
		element_top = parseFloat(element_top);

		// Set positions
		positions.push(element_top);						
	}
	console.log(positions);

	// Run function
	movedots()												
}

function movedots(){
	console.log(elements);
	var i = 0;
	// Take all the listed elements and reposition them according to body height
	for (let element of elements)
	{
		element.style.top = (document.body.offsetHeight/positions[i]) + "px";
		i++;
	}
};
window.onload = function(){
	div = document.getElementById("parallax_div");	
	prevScrollpos = div.scrollTop;

	img1 = document.getElementById("background_img").src
	img2 = 'https://i.imgur.com/AKSXucL.jpg'

	div.onscroll = onScroll;
}

function onScroll(){
	hideMenuOnScroll();
	changeBackgroundOnScrollValue()
}

function hideMenuOnScroll() {
	var currentScrollPos = div.scrollTop;
	
	if (prevScrollpos > currentScrollPos)
	{
		//console.log("up");
		document.getElementById("top_menu").style.top = "0";
	}else
	{
		//console.log("down");
		document.getElementById("top_menu").style.top = "-50px";
	}

	prevScrollpos = currentScrollPos;

	//console.log(currentScrollPos);
}

function changeBackgroundOnScrollValue() {
	var currentScrollPos = div.scrollTop;
	var transitionScrollPos = document.getElementById("transition_paragraph").offsetTop-700;

	console.log("curr: " + currentScrollPos);
	console.log("para: " + transitionScrollPos);
	if (currentScrollPos > transitionScrollPos)
	{
		document.getElementById("background_img").src = img2;
	}else
	{
		document.getElementById("background_img").src = img1;
	}
}
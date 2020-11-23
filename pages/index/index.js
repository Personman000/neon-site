window.onload = function(){
	div = document.getElementById("parallax_div");
	div.onscroll = hideMenuOnScroll;
	prevScrollpos = div.scrollTop;
}

function hideMenuOnScroll() {
	var currentScrollPos = div.scrollTop;
	
	if (prevScrollpos > currentScrollPos)
	{
		console.log("up");
		document.getElementById("top_menu").style.top = "0";
	}else
	{
		console.log("down");
		document.getElementById("top_menu").style.top = "-50px";
	}

	prevScrollpos = currentScrollPos;

	console.log(currentScrollPos);
}
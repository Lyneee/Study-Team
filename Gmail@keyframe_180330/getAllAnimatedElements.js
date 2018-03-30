var all = document.querySelectorAll('*');
var allAnimated = new Array();
for(var i=0; i < all.length; i++) {
	var an = window.getComputedStyle(all[i], '').animationName;
	if(an !== "none") {
		allAnimated.push(all[i]);
	}
}
console.log(allAnimated);


let collapsed=false;
let submenu=document.getElementById('sub');

function alr(event) {
	if (collapsed==true) {
		collapsed=false;
		submenu.style.display="none";
	} else {
		submenu.style.display="block";
		collapsed=true;
	}
}


/*JavaScript Function closing menu after click on menu item/link */

(function () {
	function uncheckNav() {
		document.getElementById("navi-toggle").checked = false;
	}

	function setNavOnclick() {
		Array.from(
				document.getElementsByClassName("navigation__link")
			)
			.map(navLink => navLink.addEventListener("click", uncheckNav));
	}

	function main() {
		setNavOnclick();
	}

	main();
})()

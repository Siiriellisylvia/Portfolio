
//Burger icon to X

$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});

//Open mobile navigation menu
        function openMenu() {
            let x = document.getElementById("myLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }}


// JavaScript function to close the mobile menu
        function closeMenu() {
        let x = document.getElementById("myLinks");
        x.style.display = "none";
        }

        // Attach the click event to all links in the mobile menu
        const mobileMenuLinks = document.querySelectorAll("#menuColumn a");
        for (var i = 0; i < mobileMenuLinks.length; i++) {
        mobileMenuLinks[i].addEventListener("click", closeMenu);
}
//Image scroll on landing page
        let portrait = document.getElementById("portrait");
        let heroText =document.getElementById("heroText")
        let meSection = document.getElementById("meSection");
        let heroSection = document.getElementById("heroSection");
    
        window.addEventListener('scroll', function () {
        
// Calculate the position of the portrait relative to the scroll position
        var scrollY = window.scrollY;
        var portraitPosition = scrollY;
        var heroTextPosition = scrollY;
        
        // Calculate the maximum position where the portrait should stop
        var maxPosition = meSection.offsetTop + meSection.offsetHeight - 35 - portrait.offsetHeight;
    
        // Limit the portrait's position to the maximum position
        if (portraitPosition > maxPosition) {
            portraitPosition = maxPosition;
            }
            
            // Set the portrait's position
            portrait.style.top = portraitPosition + 'px';
            heroText.style.top = portraitPosition + 'px'
        });

        //Open mobile navigation menu
        function openMenu() {
            var x = document.getElementById("myLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }}


        // Close the mobile menu
        function closeMenu() {
        var x = document.getElementById("myLinks");
        x.style.display = "none";
        }

        // Attach the click event to all links in the mobile menu
        var mobileMenuLinks = document.querySelectorAll("#menuColumn a");
        for (var i = 0; i < mobileMenuLinks.length; i++) {
        mobileMenuLinks[i].addEventListener("click", closeMenu);
        }

        const bulletItems = document.querySelectorAll('.bullet-item');

        //Check which bulletpoints are visible
        function checkVisibility() {
            bulletItems.forEach((item) => {
                const itemPosition = item.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;

                if (itemPosition < screenHeight * 0.9) {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }
            });
            }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('load', checkVisibility);

   // Quote animation
    const quotes = document.querySelectorAll('.animated-quote');
    let currentIndex = 0;

    function showNextQuote() {
        quotes[currentIndex].style.opacity = '0';
        quotes[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % quotes.length;
        quotes[currentIndex].style.display = 'block';
        setTimeout(() => {
            quotes[currentIndex].style.opacity = '1';
        }, 1000);
    }

    // Initially hide all quotes except the first one
    for (let i = 1; i < quotes.length; i++) {
        quotes[i].style.display = 'none';
    }

    // Start the animation
    setInterval(showNextQuote, 8000);


    //Mobile navigation burger menu to X
    $(document).ready(function(){
        $('#nav-icon3').click(function(){
            $(this).toggleClass('open');
        });
    });

// Attach the click event to the "My Work" link
// var submenuToggleLink = document.querySelector(".submenu-toggle");
// submenuToggleLink.addEventListener("click", toggleSubmenu);
        // let path = document.querySelector('#lineAnimation');
        // let pathLength = path.getTotalLength();

        // path.style.strokeDasharray = pathLength + ' ' + pathLength;
        // path.style.strokeDashoffset = pathLength;

        // window.addEventListener('scroll', () => {
        //     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        //     var drawLength = pathLength * scrollPercentage;

        //     //Draw in reverse
        //     path.style.strokeDashoffset = pathLength - drawLength;
        // })

        // let heroSection = document.getElementById("heroSection");
        // let portrait = document.getElementById("portrait");
        // let meSection = document.getElementById("meSection");
        // let heroText = document.getElementById("heroText");
        // let navBar = document.querySelector(".top-bar");
        // let navLinks = document.querySelector(".nav-links")
        // let siteName = document.querySelector(".name")

        // var targetPosition = meSection.offsetTop - 80;
    
        // window.addEventListener('scroll', function(){
        //     var value = window.scrollY;
    
        //     portrait.style.top = value * 1 + 'px';
        //     heroText.style.top = value * 1 + 'px';
            

        //  // Define the position where you want to change the background color
        // if (value >= targetPosition) {
        //     // When scrolled to or past the adjusted position, add the class to change the background color
        //     navBar.classList.add("highlighted-bg");

        //     // Add a specific class to the navigation links
        //     navLinks.classList.add("highlighted-nav-links");
        //     siteName.classList.add("highlighted-name");

        // } else {
        //     // When not scrolled to the adjusted position, remove the class to revert to the original background color
        //     navBar.classList.remove("highlighted-bg");

        //     // Remove the specific class from the navigation links
        //     navLinks.classList.remove("highlighted-nav-links");
        //     siteName.classList.remove("highlighted-name");

        // }
//     });


// window.addEventListener('scroll', function () {
//         // Calculate the position of the portrait relative to the scroll position
//         var scrollY = window.scrollY;
//         var portraitPosition = scrollY;

//         // Calculate the maximum position where the portrait should stop
//         var maxPosition = meSection.offsetTop + meSection.offsetHeight - portrait.offsetHeight;

//         // Limit the portrait's position to the maximum position
//         if (portraitPosition > maxPosition) {
//             portraitPosition = maxPosition;
//         }

//         // Set the portrait's position
//         portrait.style.top = portraitPosition + 'px';
//     });

//     var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("top-bar").style.top = "0";
//   } else {
//     document.getElementById("top-bar").style.top = "-80px";
//   }
//   prevScrollpos = currentScrollPos;
// }
    
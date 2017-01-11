document.addEventListener("DOMContentLoaded", 
    function(event) {

        function showNav (event) {
            var nav = document.querySelector(".main-nav");

            if (nav.style.display === 'block' || nav.style.display === '') {
                nav.style.display = 'none';
            }
            else {
                nav.style.display = 'block';
            }

        } 

        document.querySelector(".main-nav__toggle")
            .addEventListener("click", showNav);

        document.querySelector(".page_header--icon")
            .addEventListener("click", showNav);
    }
);

// function hideShow () {
//     var nav = document.getElementsByClassName("main-nav").value;
//     console.log(nav);
// }

// hideShow();
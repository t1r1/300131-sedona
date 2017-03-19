'use strict';

document.addEventListener('DOMContentLoaded', 
    function(event) {
        var nav = document.querySelector('.main-nav');
        function showNav (event) {
            nav.style.display = 'block';
        } 
        function hideNav (event) {
            nav.style.display = 'none';
        }

        document.querySelector('.main-nav__toggle').addEventListener('click', hideNav);

        document.querySelector('.page_header--icon').addEventListener('click', showNav);
    }
);


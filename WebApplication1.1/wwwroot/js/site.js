// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// ----------CARD1--------------------------------------------------------------------------------------//

var card1 = document.getElementById('card1');


var options = card1.querySelectorAll('.options button');
var productImage = card1.querySelector('.camiseta');



options.forEach(function (option) {
    option.addEventListener('click', function () {
        var imageURL = option.getAttribute('data-image');

        options.forEach(function (otherOption) {
            otherOption.classList.remove('active');
        });

        option.classList.add('active');
        productImage.src = imageURL;
    });
});

// ----------CARD2--------------------------------------------------------------------------------------//

var card2 = document.getElementById('card2');

var options2 = card2.querySelectorAll('.options button');
var productImage2 = card2.querySelector('.camiseta');

options2.forEach(function (option) {
    option.addEventListener('click', function () {
        var imageURL = option.getAttribute('data-image');

        options2.forEach(function (otherOption) {
            otherOption.classList.remove('active');
        });

        option.classList.add('active');
        productImage2.src = imageURL;
    });
});

// ----------CARD3--------------------------------------------------------------------------------------//

var card3 = document.getElementById('card3');

var options3 = card3.querySelectorAll('.options button');
var productImage3 = card3.querySelector('.camiseta');

options3.forEach(function (option) {
    option.addEventListener('click', function () {
        var imageURL = option.getAttribute('data-image');

        options3.forEach(function (otherOption) {
            otherOption.classList.remove('active');
        });

        option.classList.add('active');
        productImage3.src = imageURL;
    });
});

// ----------CARD4--------------------------------------------------------------------------------------//
var card4 = document.getElementById('card4');

var options4 = card4.querySelectorAll('.options button');
var productImage4 = card4.querySelector('.camiseta');

options4.forEach(function (option) {
    option.addEventListener('click', function () {
        var imageURL = option.getAttribute('data-image');

        options4.forEach(function (otherOption) {
            otherOption.classList.remove('active');
        });

        option.classList.add('active');
        productImage4.src = imageURL;
    });
});

// ----------CARD5--------------------------------------------------------------------------------------//

var card5 = document.getElementById('card5');

var options5 = card5.querySelectorAll('.options button');
var productImage5 = card5.querySelector('.camiseta');

options5.forEach(function (option) {
    option.addEventListener('click', function () {
        var imageURL = option.getAttribute('data-image');

        options5.forEach(function (otherOption) {
            otherOption.classList.remove('active');
        });

        option.classList.add('active');
        productImage5.src = imageURL;
    });
});

// ----------CARD6--------------------------------------------------------------------------------------//

var card6 = document.getElementById('card6');

var options6 = card6.querySelectorAll('.options button');
var productImage6 = card6.querySelector('.camiseta');

options6.forEach(function (option) {
    option.addEventListener('click', function () {
        var imageURL = option.getAttribute('data-image');

        options6.forEach(function (otherOption) {
            otherOption.classList.remove('active');
        });

        option.classList.add('active');
        productImage6.src = imageURL;
    });
});

// ----------CARD7--------------------------------------------------------------------------------------//

var card7 = document.getElementById('card7');

var options7 = card7.querySelectorAll('.options button');
var productImage7 = card7.querySelector('.camiseta');

options7.forEach(function (option) {
    option.addEventListener('click', function () {
        var imageURL = option.getAttribute('data-image');

        options7.forEach(function (otherOption) {
            otherOption.classList.remove('active');
        });

        option.classList.add('active');
        productImage7.src = imageURL;
    });
});

// ----------CARD8--------------------------------------------------------------------------------------//

var card8 = document.getElementById('card8');

var options8 = card8.querySelectorAll('.options button');
var productImage8 = card8.querySelector('.camiseta');

options8.forEach(function (option) {
    option.addEventListener('click', function () {
        var imageURL = option.getAttribute('data-image');

        options8.forEach(function (otherOption) {
            otherOption.classList.remove('active');
        });

        option.classList.add('active');
        productImage8.src = imageURL;
    });
});

// ----------CARD9--------------------------------------------------------------------------------------//

var card9 = document.getElementById('card9');

var options9 = card9.querySelectorAll('.options button');
var productImage9 = card9.querySelector('.camiseta');

options9.forEach(function (option) {
    option.addEventListener('click', function () {
        var imageURL = option.getAttribute('data-image');

        options9.forEach(function (otherOption) {
            otherOption.classList.remove('active');
        });

        option.classList.add('active');
        productImage9.src = imageURL;
    });
});

// ----------CARD10--------------------------------------------------------------------------------------//

var card10 = document.getElementById('card10');

var options10 = card10.querySelectorAll('.options button');
var productImage10 = card10.querySelector('.camiseta');

options10.forEach(function (option) {
    option.addEventListener('click', function () {
        var imageURL = option.getAttribute('data-image');

        options10.forEach(function (otherOption) {
            otherOption.classList.remove('active');
        });

        option.classList.add('active');
        productImage10.src = imageURL;
    });
});


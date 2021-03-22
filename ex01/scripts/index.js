window.onload = function() {
    var elem = document.querySelector(".gallery");
    var msnry = new Masonry(elem, {
        // options
        itemSelector: ".gallery-element",
        columnWidth: 200,
        gutter: 10,
    });
};


var span1 = document.getElementById("close1");

var modal1 = document.getElementById("myModal-img1");

var pageLinkImg1 = document.getElementById("page-title-img1");

pageLinkImg1.onclick = function() {
    modal1.style.display = "block";
};

span1.onclick = function() {
    modal1.style.display = "none";
    console.log(modal1);
};


var span2 = document.getElementById("close2");
var modal2 = document.getElementById("myModal-img2");

var pageLinkImg2 = document.getElementById("page-title-img2");

pageLinkImg2.onclick = function() {
    modal2.style.display = "block";
};

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};

span2.onclick = function() {
    modal2.style.display = "none";
    console.log(modal2);
};

// Get the modal
var span3 = document.getElementById("close3");
var modal3 = document.getElementById("myModal-img3");
// Get the button that opens the modal
var pageLinkImg3 = document.getElementById("page-title-img3");

pageLinkImg3.onclick = function() {
    modal3.style.display = "block";
};

span3.onclick = function() {
    modal3.style.display = "none";
};


var span4 = document.getElementById("close4");
var modal4 = document.getElementById("myModal-img4");

var pageLinkImg4 = document.getElementById("page-title-img4");

pageLinkImg4.onclick = function() {
    modal4.style.display = "block";
};

span4.onclick = function() {
    modal4.style.display = "none";
};

var span5 = document.getElementById("close5");
var modal5 = document.getElementById("myModal-img5");

var pageLinkImg5 = document.getElementById("page-title-img5");

pageLinkImg5.onclick = function() {
    modal5.style.display = "block";
};

span5.onclick = function() {
    modal5.style.display = "none";
};


var span6 = document.getElementById("close6");
var modal6 = document.getElementById("myModal-img6");

var pageLinkImg6 = document.getElementById("page-title-img6");

pageLinkImg6.onclick = function() {
    modal6.style.display = "block";
};

span6.onclick = function() {
    modal6.style.display = "none";
};


var span7 = document.getElementById("close7");
var modal7 = document.getElementById("myModal-img7");

var pageLinkImg7 = document.getElementById("page-title-img7");

pageLinkImg7.onclick = function() {
    modal7.style.display = "block";
};

span7.onclick = function() {
    modal7.style.display = "none";
};


var span8 = document.getElementById("close8");
var modal8 = document.getElementById("myModal-img8");

var pageLinkImg8 = document.getElementById("page-title-img8");

pageLinkImg8.onclick = function() {
    modal8.style.display = "block";
};

span8.onclick = function() {
    modal8.style.display = "none";
};


var span9 = document.getElementById("close9");
var modal9 = document.getElementById("myModal-img9");

var pageLinkImg9 = document.getElementById("page-title-img9");

pageLinkImg9.onclick = function() {
    modal9.style.display = "block";
};

span9.onclick = function() {
    modal9.style.display = "none";
};


var span10 = document.getElementById("close10");
var modal10 = document.getElementById("myModal-img10");

var pageLinkImg10 = document.getElementById("page-title-img10");

pageLinkImg10.onclick = function() {
    modal10.style.display = "block";
};

span10.onclick = function() {
    modal10.style.display = "none";
};
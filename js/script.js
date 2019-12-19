var enTete = document.createElement("header"); // création header
document.body.appendChild(enTete);

var div1 = document.createElement("div"); // création div main 
div1.className = "main";
div1.style.display = "flex";
document.body.appendChild(div1);


var div2 = document.createElement("div");
div2.style.width = "50%";
div2.className = "partie_gauche";
div1.appendChild(div2);

var div3 = document.createElement("div");
div2.appendChild(div3);
var image1 = document.createElement("img");
image1.style.width = "100%";
image1.src = "images/trefle.jpg";
div3.appendChild(image1);

var div4 = document.createElement("div");
div4.style.overflow = "hidden";
div2.appendChild(div4);
var image2 = document.createElement("img");
image2.style.width = "100%";
image2.src = "images/trefle.jpg";
div4.appendChild(image2);


var div5 = document.createElement("div");
div5.className = "partie_droite";
div5.style.margin = "0px 25px";
div5.style.width = "50%";
div1.appendChild(div5);

var div6 = document.createElement("div");
div5.appendChild(div6);
div6.style.display = "flex";
div6.style.overflow = "hidden";
div6.style.height = "50%";
var image3 = document.createElement("img");
image3.src = "images/trefle.jpg";
image3.overflow = "hidden";
image3.style.width = "50%";
div6.appendChild(image3);
var paragraphe1 = document.createElement("p");
paragraphe1.style.margin = "0px 25px";
paragraphe1.style.width = "50%";
paragraphe1.innerHTML = "Je suis le paragraphe 1 !!";
paragraphe1.style.color = "red";
div6.appendChild(paragraphe1);

var div7 = document.createElement("div");
div5.appendChild(div7);
div7.style.display = "flex";
div7.style.height = "50%";
var image4 = document.createElement("img");
image4.src = "images/trefle.jpg";
image4.overflow = "hidden";
image4.style.width = "50%";
div7.appendChild(image4);
var paragraphe2 = document.createElement("p");
paragraphe2.style.margin = "0px 25px";
paragraphe2.style.width = "50%";
paragraphe2.innerHTML = "Je suis le paragraphe 2 !!";
paragraphe2.style.color = "red";
div7.appendChild(paragraphe2);

var piedDePage = document.createElement("footer");
document.body.appendChild(piedDePage);
var botao = document.querySelectorAll(".lancamentos__botao");
botao.addEventListener("click", function(event) {
    event.preventDefault();

    criar div
    criar ul
    criar li 
    add ul e li na div

})



var section = document.querySelector(".teste");
var div = document.createElement("div");
var ul = document.createElement("ul");
var li = document.createElement("li");

div.appendChild(ul);
li.textContent = "JAIFIJAW";
ul.appendChild(li);

section.appendChild(div);



let imagens = document.querySelector(".imgOng");

function ampliar (imagens){
    console.log("Ampliou");
    imagens.style.transform = "scale(4,4)";
    
}

function encolher (imagens){
    console.log("Encolheu");
    imagens.style.transform = "scale(1,1)";
    
}
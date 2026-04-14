let myImages = document.querySelector("img");

myImages.onclick = () => {
    let mySrc = myImages.getAttribute("src");
    if(mySrc === "images/traducao.png"){
        myImages.setAttribute("src", "images/traducaoa2.png");
    }else{
        myImages.setAttribute("src", "images/traducao.png");
    };
};

// Mensagens de boas-vindas personalizada.
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("Por favor, digite seu nome: ");
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName}, suas traduções serão ainda melhores com o nosso sistema!`;
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}, suas traduções serão ainda melhores com o nosso sistema!`;
}

myButton.onclick = () => {
    setUserName();
}

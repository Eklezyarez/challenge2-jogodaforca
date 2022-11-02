var palavras = ['ALURA', 'ORACLE', 'HTML', 'JAVASCRIPT', 'CSS', 'NODEJS', 'JQUERY', 'GRAPHQL', 'SPRING', 'ANGULAR', 'MAEVEN'];
var palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
var erros = [];
var palavraCorreta = [];

document.addEventListener("keydown", (evento) => {
  let codigo = evento.keyCode; 
  if (setOut(codigo)) {
    let pass = evento.key.toUpperCase();
    if (erros.includes(pass)) {
      alert("Letra já usada!");
    } else {if (palavraSecreta.includes(pass)) {palavraCorreta.push(pass);
      } else {erros.push(pass);}
    }charging();}});

Forca(); cLet();

function charging() {
  Forca();  wrong();  cLet();  Game();
}

function cLet() {
  let container = document.querySelector(".secretPlace");
  container.innerHTML = "";
  palavraSecreta.split("").forEach((pass) => {
    if (palavraCorreta.includes(pass)) {
      container.innerHTML += `<span>${pass}</span>`;
    } else {container.innerHTML += `<span>_</span>`;}
  });
}

function wrong() {
  let div = document.querySelector(".errosPlace");
  div.innerHTML = "";
  erros.forEach((pass) => {
    div.innerHTML += `<span>${pass}</span>`;
  });
}

function Game() {
  var mensage = "";
  var container = document.querySelector(".secretPlace");
  var partesCorpo = document.getElementById("canvas");

  if (erros.length === 6) {
    mensage = "Perdeu! Palavra Secreta: " + palavraSecreta;}

  if (palavraSecreta === container.innerText) {
    mensage = "Acertou!";}

  if (mensage) {
    document.querySelector("#mensagem").innerHTML = mensage;
    document.querySelector(".popup-container").style.display = "flex";
  }
}

function novoJogo() {
    window.location.reload();
  }  
function jogar() {
    window.location.replace('./play.html');
  }
function desistir() {
    window.location.replace('./index.html');
  }

function cancelar() {
  window.location.replace('./index.html');
}
function addPalavra() {
  window.location.replace('./neword.html');
}

function nextG() {
  window.location.reload();
} 

function setOut(codigo) {
  return codigo >= 65 && codigo <= 100;
}

function enviar() {
  var inputPalavra = document.querySelector("#nextPass"); 
  var novaPalavra = palavras.push(inputPalavra.value);
  window.location.replace('./play.html');
  }

function Forca() {
  let forca = document.getElementById("canvas").getContext('2d');
  
  forca.strokeStyle = "#fff";
  forca.lineWidth = 8;
  forca.lineCap ='round';
  forca.lineJoin = 'round';
  forca.beginPath();
  forca.moveTo(150, 10);
  forca.lineTo(150, 40);
  forca.moveTo(50, 10);
  forca.lineTo(150, 10);
  forca.moveTo(50, 199);
  forca.lineTo(50, 10);
  forca.moveTo(20, 199);
  forca.lineTo(150, 199);
  forca.stroke();

    for (let i = 0; i < erros.length; i++) {
      if (i==0){
      forca.lineWidth = 5;
      forca.beginPath();
      forca.arc(150, 63, 20, 0, Math.PI * 2);
      forca.stroke();
    }if(i==1) {
      forca.beginPath();
      forca.moveTo(150, 85);
      forca.lineTo(150, 150);
      forca.stroke();
    }if(i==2) {
      forca.beginPath();
      forca.moveTo(150, 95);
      forca.lineTo(180,110);
      forca.stroke();
    }if(i==3) {
      forca.beginPath();
      forca.moveTo(150, 95);
      forca.lineTo(120, 110 );
      forca.stroke();
    }if(i==4) {
      forca.beginPath();
      forca.moveTo(150, 150);
      forca.lineTo(180, 170);
      forca.stroke();
    }if(i==5) {
      forca.beginPath();
      forca.moveTo(150, 150);
      forca.lineTo(120, 170);
      forca.stroke();
    }
  }
}


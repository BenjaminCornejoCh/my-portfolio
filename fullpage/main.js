const myFullPage = new fullpage("#fullpage", {
  //options here
  autoScrolling: true, //Se activa el scroll
  fitToSection: false, //Acomoda el scroll automaticamente para que la sección se muestre en la pantalla
  fitToSectionDelay: 500, // Delay antes de acomodar la sección automáticamente
  easing: "easeInOutCubic", // Función de tiempo de la animación
  scrollingSpeed: 900, // Velocidad del scroll. Valores en milisegundos
  css3: true, // Si usará css3 o javascript
  easingcss3: "ease-out", // Curva de velocidad del efecto
  loopBottom: false,

  navigation: true,

  sectionsColor: ["#100E1D", "#100E1D", "#100E1D", "#100E1D"],
  verticalCentered: true,

  anchors: ["seccion1", "seccion2", "seccion3", "seccion4"],
});

//métodos
fullpage_api.setAllowScrolling(true);

// Efectos de texto
const animate = document.querySelectorAll(".animate");

animate.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style = `--l: '${item.innerHTML}'`;
  });
  item.addEventListener("mouseout", () => {
    item.style = "";
  });
});

// Play - Pause Music
let on_off = document.getElementById("sound");
let off_on = document.getElementsByClassName("a-sound")[0];
let i_sound = document.getElementById("i-sound");
let video = document.getElementById("video");
console.log(off_on);

let onOff = () => {
  if (on_off.innerHTML == "ON") {
    video.pause();
    on_off.innerHTML = "OFF";
    on_off.style.color = "red";
    i_sound.classList = "fas fa-volume-mute volume icon";
    i_sound.style.color = "red";
  } else {
    video.play();
    on_off.innerHTML = "ON";
    on_off.style.color = "aquamarine";
    i_sound.style.color = "aquamarine";
    i_sound.classList = "fas fa-volume-up volume icon";
  }
};

on_off.addEventListener("click", onOff);

// Cubitos
let cube = document.querySelector(".cube");
let currentClass = "";

let giro = (x) => {
  let showClass = "show-top";
  if (currentClass) {
    x.classList.remove(currentClass);
  }
  x.classList.add(showClass);
  currentClass = showClass;
};
let vuelta = (x) => {
  let showClass = "show-front";
  if (currentClass) {
    x.classList.remove(currentClass);
  }
  x.classList.add(showClass);
  currentClass = showClass;
};


// FORMULARIO
// function usrpas() {
//   if (
//     document.form1.txt.value == "Admin1" &&
//     document.form1.num.value == "Admin1"
//   ) {
//     window.location = "Admin1.html";
//     return;
//   }
//   alert("Error en Usuario o Contraseña. Intenta de nuevo.");
// }

// document
//   .getElementById("formulario")
//   .addEventListener("submit", function (e) {
//     console.log("hohoho");
//     e.preventDefault();
//     usrpas();
//   });

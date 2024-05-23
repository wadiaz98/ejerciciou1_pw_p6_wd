var intento = 0;
var puntaje;
const comprueba = (id) => {

  if (document.getElementById("id" + id).textContent === "excadrill") {
    intento += 1;
 
    document.getElementById("msj").innerText =
      "Felicitaciones, has seleccionado la opción correcta";
    document.getElementById("img").src = "../img/pcolor.jpg";
    document.getElementById("msj").style.color = "blue";
    document.getElementById("msj").style.border = "1px solid black";

    console.log(intento)
    if (intento === 1) {
      puntaje = 5;
      document.getElementById("puntaje").innerText = puntaje;
      document.getElementById("intentos").innerText = intento;
      return;
    } else if (intento === 2) {
      puntaje = 3;
      document.getElementById("puntaje").innerText = puntaje;
      document.getElementById("intentos").innerText = intento;
      return;
    } else if (intento === 3) {
      puntaje = 1;
      document.getElementById("puntaje").innerText = puntaje;
      document.getElementById("intentos").innerText = intento;
      return;
    }
  } else {
    document.getElementById("msj").innerText =
      "pókemon incorrecto, intentalo nuevamente";
    document.getElementById("msj").style.color = "red";
    document.getElementById("msj").style.border = "1px solid black";
    intento +=1;
    console.log(intento);
    document.getElementById('intentos').innerText = intento;
    if (intento >= 3) {
      resetea();
    }
  }
};

const resetea = () => {
  intento = 0;
  document.getElementById("puntaje").innerText = "0";
  document.getElementById("intentos").innerText = "0";
  document.getElementById("img").src = "../img/pnegro.jpg";
  document.getElementById("msj").innerText = "";
  document.getElementById("msj").style.border = "none";
};

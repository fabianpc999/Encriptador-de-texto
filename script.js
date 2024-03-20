function encriptar() {
  var pattern = "^*@!#$%&/()=?¡!¿";
  var texto = document.getElementById("inputtexto");
  var bandera = true

  if (texto.value.includes(pattern)) {
    console.log("esta")
  }

  for (var i = 0; i < pattern.length; i++) {


    if (texto.value.includes(pattern.charAt(i))) {
      alert("Carcater especial");
      bandera = false
    }

  }

  if (bandera) {
    var a = "";
    for (var i = 0; i < texto.value.length; i++) {
      var caracter = texto.value.charAt(i);
      console.log(caracter);
      if (caracter == "a") {
        caracter = "ai";
      }
      if (caracter == "e") {
        caracter = "enter";
      }
      if (caracter == "i") {
        caracter = "imes";
      }
      if (caracter == "o") {
        caracter = "ober";
      }
      if (caracter == "u") {
        caracter = "ufat";
      }
      a = a + "" + caracter;
    }

    document.getElementById("imagen-mu").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("textodos").innerHTML = a;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }

}

function desencriptar() {
  var texto = document.getElementById("inputtexto").value.toLowerCase();
  var txtcifrado = texto.replace(/enter/gim, "e");
  var txtcifrado = txtcifrado.replace(/ober/gim, "o");
  var txtcifrado = txtcifrado.replace(/imes/gim, "i");
  var txtcifrado = txtcifrado.replace(/ai/gim, "a");
  var txtcifrado = txtcifrado.replace(/ufat/gim, "u");
  document.getElementById("imagen-mu").style.display = "none";
  document.getElementById("text").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("textodos").innerHTML = txtcifrado;
  document.getElementById("inputtexto").innerHTML = " ";
  document.getElementById("copiar").style.display = "inherit";
}
function copiar() {
  var contenido = document.querySelector("#textodos");
  contenido.select();
  document.execCommand("copy");
  alert("copiado!");
}

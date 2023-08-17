function encriptar() {
  const mensaje = document.getElementById("mensaje").value;
  const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  const resultado = document.getElementById("resultado");

  let mensajeEncriptado = "";

  for (let i = 0; i < mensaje.length; i++) {
      const codigoCaracter = mensaje.charCodeAt(i);

      if (codigoCaracter >= 65 && codigoCaracter <= 90) {
          mensajeEncriptado += String.fromCharCode(((codigoCaracter - 65 + desplazamiento) % 26) + 65);
      } else if (codigoCaracter >= 97 && codigoCaracter <= 122) {
          mensajeEncriptado += String.fromCharCode(((codigoCaracter - 97 + desplazamiento) % 26) + 97);
      } else {
          mensajeEncriptado += mensaje.charAt(i);
      }
  }

  resultado.value = mensajeEncriptado;
}

function desencriptar() {
  const mensaje = document.getElementById("mensaje").value;
  const desplazamiento = parseInt(document.getElementById("desplazamiento").value);
  const resultado = document.getElementById("resultado");

  let mensajeDesencriptado = "";

  for (let i = 0; i < mensaje.length; i++) {
      const codigoCaracter = mensaje.charCodeAt(i);

      if (codigoCaracter >= 65 && codigoCaracter <= 90) {
          mensajeDesencriptado += String.fromCharCode(((codigoCaracter - 65 - desplazamiento + 26) % 26) + 65);
      } else if (codigoCaracter >= 97 && codigoCaracter <= 122) {
          mensajeDesencriptado += String.fromCharCode(((codigoCaracter - 97 - desplazamiento + 26) % 26) + 97);
      } else {
          mensajeDesencriptado += mensaje.charAt(i);
      }
  }

  resultado.value = mensajeDesencriptado;
}

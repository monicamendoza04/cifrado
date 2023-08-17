function encrypt() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const result = document.getElementById("result");
  
    let encryptedMessage = "";
  
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        encryptedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        encryptedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        encryptedMessage += message.charAt(i);
      }
    }
  
    result.value = encryptedMessage;
  }
  
  function decrypt() {
    const message = document.getElementById("message").value;
    const shift = parseInt(document.getElementById("shift").value);
    const result = document.getElementById("result");
  
    let decryptedMessage = "";
  
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        decryptedMessage += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        decryptedMessage += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
      } else {
        decryptedMessage += message.charAt(i);
      }
    }
  
    result.value = decryptedMessage;
  }
  
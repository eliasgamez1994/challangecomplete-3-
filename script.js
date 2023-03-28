
//Creamos la funcion junto con sus variables 

document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generate");
  const passwordTextArea = document.getElementById("password");
  const passwordLengthInput = document.getElementById("length");

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  //Este bloque de código define una función que devuelve un número entero aleatorio entre dos valores. La función toma dos argumentos: min y max, que son los valores mínimo y máximo de la serie de números aleatorios generados.
  function generatePassword(passwordLength) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";

    /*Este bloque de código define una función que toma un argumento passwordLength, que es el número de 
    caracteres que se desea en la contraseña. La función devuelve una cadena aleatoria de caracteres 
    alfanuméricos y especiales de la longitud especificada. La función utiliza un bucle for para iterar 
    passwordLength veces y en cada iteración elige un carácter aleatorio de la cadena de caracteres. */

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = getRandomInt(0, characters.length - 1);
      password += characters.charAt(randomIndex);
    }

    return password;
  }

  generateBtn.addEventListener("click", function () {
    const desiredLength = parseInt(passwordLengthInput.value, 10);
    const newPassword = generatePassword(desiredLength);
    passwordTextArea.value = newPassword;
  });
});

/**Este bloque de código establece un evento click en el botón generateBtn. Cuando se hace clic en el botn, 
 * se llama a la función generatePassword() con el número de caracteres deseados obtenidos del elemento 
 * passwordLengthInput. 
 * Lego, la nueva contraseña generada se establece como el valor del textarea paswordTextArea. */
require("colors");
const tabla = async (base = 5, listar) => {
  try {
    const fs = require("fs");
    let salida = "";
    for (let b = 0; b < base; b++) {
      salida += `${base} ${'x'.blue} ${b} ${'='.blue} ${base * b} \n`;
    }
    if (listar) {
      console.log(`
      ==================
      ===================
      #######TABLA#######
      ===================
      ===================
      `.green);
      console.log(salida);
    }
    fs.writeFileSync("./salida/tabla.txt", salida);
    return "Tabla creada.".green;
  } catch (error) {
    return error;
  }
};

module.exports = {
  tabla,
};

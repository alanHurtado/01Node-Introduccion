const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Base a  multiplicar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe:'Muesta la tabla del archivo creado'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe de ser un número";
    }
    return true;
  }).argv;


  module.exports = {
    argv,
  };
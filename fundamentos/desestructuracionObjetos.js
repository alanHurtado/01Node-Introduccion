const heroe = {
  nombre: "deeppol",
  poder: "volar",
  getNombre() {
    return `${this.nombre} ${this.poder}`;
  },
};

// Forma Normal

// const nombre = heroe.nombre;
// const poder = heroe.poder;
// const nombrePoder = getNombre();
// Con destructuración

const { nombre, poder, edad= '98' } = heroe;

console.log(nombre);
console.log(poder);
console.log(edad);


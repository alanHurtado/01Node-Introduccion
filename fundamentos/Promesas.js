const empleados = [
  {
    id: 1,
    nombre: "Fernado",
  },
  {
    id: 2,
    nombre: "Alan",
  },
  {
    id: 3,
    nombre: "Valeria",
  },
];
const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 3000,
  },
  {
    id: 3,
    salario: 20000,
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id);

    empleado ? resolve(empleado) : reject(`Empleado con id ${id} no existe`);
  });
};

const getSalirio = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id);

    salario ? resolve(salario) : reject(`Salario con id ${id} no existe`);
  });
};

// getEmpleado(7)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.log(err));

// getSalirio(1)
//   .then((salario) => console.log(salario))
//   .catch((err) => console.log(err));
letx = 'ljdskljflsd'
const id = 2;
getEmpleado(id)
  .then((empleado) => {
     x = empleado;
    return getSalirio(id);
  })
  .then((salario) =>
    console.log("El empleado:", x, "Tiene un salario de :", salario)
  )
  .catch((err) => console.log(err));

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

const id = 3;

const getInfoUser = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalirio(id);
    return `Hola ${empleado.nombre} su salario, ${salario}`;
  } catch (error) {
    return error;
  }
};
getInfoUser(id)
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

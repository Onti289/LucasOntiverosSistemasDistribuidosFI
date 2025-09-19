const axios = require('axios');

// Inciso A

async function obtenerPublicaciones(id) {
  const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const publicaciones = await respuesta.json();
  return publicaciones;
}

async function obtenerUsuariosSecuencial() {
  console.log("\n--- Ejecución Secuencial ---");
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await respuesta.json();
  const primeros3 = usuarios.slice(0, 3);
  for (let usuario of primeros3){
    const publicaciones = await obtenerPublicaciones(usuario.id);
    console.log(`${usuario.name} tiene ${publicaciones.length} publicaciones`);
  }
}

// Inciso B

async function obtenerUsuariosParalelo() {
  console.log("\n--- Ejecución Paralela ---");
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await respuesta.json();
  const primeros3 = usuarios.slice(0, 3);
  const promesas = primeros3.map(u => obtenerPublicaciones(u.id));
  const publicaciones = await Promise.all(promesas);
  primeros3.forEach((usuario, i) => {
    console.log(`${usuario.name} tiene ${publicaciones[i].length} publicaciones`);
  });
}


(async () => {
  await obtenerUsuariosSecuencial();
  await obtenerUsuariosParalelo();
})();
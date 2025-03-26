// Lista de estudiantes con sus calificaciones
let estudiantes = [
    ['Juan', [['Matematicas', 8], ['Lengua', 9], ['Sociales', 7], ['Naturales', 7]]],
    ['Ana', [['Lengua', 9], ['Matematicas', 10], ['Sociales', 8], ['Naturales', 6]]],
    ['Luis', [['Lengua', 6], ['Sociales', 8], ['Matematicas', 7], ['Naturales', 6]]],
    ['María', [['Lengua', 9], ['Sociales', 10], ['Naturales', 10], ['Matematicas', 9]]]
  ];
  
  // Importar readline para interactuar con el usuario
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Función para mostrar el menú
  function mostrarMenu() {
    console.log("--- Menú ---");
    console.log("1. Ingresar o modificar calificación");
    console.log("2. Mostrar todos los datos");
    console.log("3. Salir");
  }
  
  // Función para agregar o modificar calificaciones
  function agregarCalificacion(nombre, materia, calificacion) {
    // Buscar si el estudiante ya está en la lista
    let estudiante = estudiantes.find(est => est[0] === nombre);
  
    if (estudiante) {
      // Si el estudiante existe, buscar la materia
      let materiaEncontrada = estudiante[1].find(m => m[0] === materia);
      
      if (materiaEncontrada) {
        // Si la materia ya existe, modificar la calificación
        materiaEncontrada[1] = calificacion;
        console.log(`${nombre} tiene nueva calificación en ${materia}: ${calificacion}`);
      } else {
        // Si la materia no existe, agregarla
        estudiante[1].push([materia, calificacion]);
        console.log(`${nombre} ha sido registrado en ${materia} con calificación: ${calificacion}`);
      }
    } else {
      // Si el estudiante no existe, agregarlo con la materia
      estudiantes.push([nombre, [[materia, calificacion]]]);
      console.log(`Nuevo estudiante ${nombre} registrado con calificación en ${materia}: ${calificacion}`);
    }
  }
  
  // Función para mostrar todos los datos
  function mostrarDatos() {
    console.log("\n--- Datos de estudiantes ---");
    estudiantes.forEach(est => {
      console.log(`${est[0]}: ${JSON.stringify(est[1])}`);
    });
  }
  
  // Función para manejar la opción seleccionada
  function manejarOpcion(opcion) {
    if (opcion === "1") {
      rl.question("Nombre del estudiante: ", (nombre) => {
        rl.question("Materia: ", (materia) => {
          rl.question("Calificación: ", (calificacion) => {
            agregarCalificacion(nombre, materia, parseFloat(calificacion));
            mostrarMenuYSeleccionar();
          });
        });
      });
    } else if (opcion === "2") {
      mostrarDatos();
      mostrarMenuYSeleccionar();
    } else if (opcion === "3") {
      console.log("¡Hasta luego!");
      rl.close();
    } else {
      console.log("Opción no válida. Intenta nuevamente.");
      mostrarMenuYSeleccionar();
    }
  }
  
  // Función para mostrar el menú y capturar la opción seleccionada
  function mostrarMenuYSeleccionar() {
    mostrarMenu();
    rl.question("Elige una opción: ", (opcion) => {
      manejarOpcion(opcion);
    });
  }
  
  // Iniciar el menú al ejecutar el programa
  mostrarMenuYSeleccionar();
  
  
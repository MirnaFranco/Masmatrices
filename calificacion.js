// Matriz de calificaciones
let estudiantes = [
    ['Juan', [['Matematicas', 8], ['Lengua', 9], ['Sociales', 7], ['Naturales', 7]]],
    ['Ana', [['Lengua', 9], ['Matematicas', 10], ['Sociales', 8], ['Naturales', 6]]],
    ['Luis', [['Lengua', 6], ['Sociales', 8], ['Matematicas', 7], ['Naturales', 6]]],
    ['María', [['Lengua', 9], ['Sociales', 10], ['Naturales', 10], ['Matematicas', 9]]]
  ];
  
  // Función para agregar o modificar calificaciones
  function agregarCalificacion(nombre, materia, calificacion) {
    // Buscar si el estudiante ya está en la matriz
    let estudiante = estudiantes.find(est => est[0] === nombre);
    
    if (estudiante) {
      // Si el estudiante existe, buscar la materia
      let materiaEncontrada = estudiante[1].find(m => m[0] === materia);
      
      if (materiaEncontrada) {
        // Si la materia ya existe, actualizar la calificación
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
  
  // Ejemplo de uso
  agregarCalificacion('Juan', 'Matematicas', 9);  // Modifica la calificación
  agregarCalificacion('Pedro', 'Quimica', 10);  // Agrega un nuevo estudiante
  
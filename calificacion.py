# Lista de estudiantes con sus calificaciones
estudiantes = [
    ['Juan', [['Matematicas', 8], ['Lengua', 9], ['Sociales', 7], ['Naturales', 7]]],
    ['Ana', [['Lengua', 9], ['Matematicas', 10], ['Sociales', 8], ['Naturales', 6]]],
    ['Luis', [['Lengua', 6], ['Sociales', 8], ['Matematicas', 7], ['Naturales', 6]]],
    ['María', [['Lengua', 9], ['Sociales', 10], ['Naturales', 10], ['Matematicas', 9]]]
]

# Función para agregar o modificar calificaciones
def agregar_calificacion(nombre, materia, calificacion):
    # Buscar si el estudiante ya está en la lista
    for estudiante in estudiantes:
        if estudiante[0] == nombre:
            # Si el estudiante existe, buscar la materia
            for materia_estudiante in estudiante[1]:
                if materia_estudiante[0] == materia:
                    # Si la materia existe, modificar la calificación
                    materia_estudiante[1] = calificacion
                    print(f'{nombre} tiene nueva calificación en {materia}: {calificacion}')
                    return
            # Si la materia no existe, agregarla
            estudiante[1].append([materia, calificacion])
            print(f'{nombre} ha sido registrado en {materia} con calificación: {calificacion}')
            return
    # Si el estudiante no existe, agregarlo con la materia
    estudiantes.append([nombre, [[materia, calificacion]]])
    print(f'Nuevo estudiante {nombre} registrado con calificación en {materia}: {calificacion}')

# Ejemplo de uso
agregar_calificacion('Juan', 'Matematicas', 9)  # Modifica la calificación
agregar_calificacion('Pedro', 'Quimica', 10)  # Agrega un nuevo estudiante

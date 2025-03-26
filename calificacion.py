# Lista de estudiantes con sus calificaciones
estudiantes = [
    ['Juan', [['Matematicas', 8], ['Lengua', 9], ['Sociales', 7], ['Naturales', 7]]],
    ['Ana', [['Lengua', 9], ['Matematicas', 10], ['Sociales', 8], ['Naturales', 6]]],
    ['Luis', [['Lengua', 6], ['Sociales', 8], ['Matematicas', 7], ['Naturales', 6]]],
    ['María', [['Lengua', 9], ['Sociales', 10], ['Naturales', 10], ['Matematicas', 9]]]
]

# Función para mostrar el menú
def mostrar_menu():
    print("--- Menú ---")
    print("1. Ingresar o modificar calificación")
    print("2. Mostrar todos los datos")
    print("3. Salir")
    return input("Elige una opción: ")

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

# Función para mostrar todos los datos
def mostrar_datos():
    print("\n--- Datos de estudiantes ---")
    for estudiante in estudiantes:
        print(f"{estudiante[0]}: {estudiante[1]}")

# Programa principal
while True:
    opcion = mostrar_menu()

    if opcion == "1":
        nombre = input("Nombre del estudiante: ")
        materia = input("Materia: ")
        calificacion = float(input("Calificación: "))
        agregar_calificacion(nombre, materia, calificacion)
    elif opcion == "2":
        mostrar_datos()
    elif opcion == "3":
        print("¡Hasta luego!")
        break
    else:
        print("Opción no válida. Intenta nuevamente.")

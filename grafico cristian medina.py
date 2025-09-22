import matplotlib.pyplot as plt

# Datos ficticios
data = {
    'Categoría': ['A', 'B', 'C', 'D'],
    'Valores': [23, 17, 35, 29]
}

# Crear gráfico de barras
plt.bar(data['Categoría'], data['Valores'], color=['skyblue', 'salmon', 'lightgreen', 'orange'], label="Valores")

# Etiquetas de los ejes y título
plt.xlabel('Categoría')
plt.ylabel('Valores')
plt.title('Gráfico de Barras de Ejemplo')

# Añadir los valores encima de cada barra
for i, v in enumerate(data['Valores']):
    plt.text(i, v + 0.5, str(v), ha='center')

# Añadir leyenda
plt.legend()

# Mostrar gráfico
plt.show()
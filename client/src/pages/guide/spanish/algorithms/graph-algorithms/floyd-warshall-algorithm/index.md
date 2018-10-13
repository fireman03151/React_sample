---
title: Floyd Warshall Algorithm
localeTitle: Floyd Warshall Algorithm
---
## Floyd Warshall Algorithm

El algoritmo Floyd Warshall es un gran algoritmo para encontrar la distancia más corta entre todos los vértices en la gráfica. Tiene un algoritmo muy conciso y complejidad de tiempo O (V ^ 3) (donde V es el número de vértices). Puede utilizarse con pesos negativos, aunque los ciclos de peso negativos no deben estar presentes en el gráfico.

### Evaluación

Complejidad del espacio: O (V ^ 2)

Peor complejidad de tiempo del caso: O (V ^ 3)

### Implementacion Python

```python
# A large value as infinity 
 inf = 1e10 
 
 def floyd_warshall(weights): 
    V = len(weights) 
    distance_matrix = weights 
    for k in range(V): 
        next_distance_matrix = [list(row) for row in distance_matrix] # make a copy of distance matrix 
        for i in range(V): 
            for j in range(V): 
                # Choose if the k vertex can work as a path with shorter distance 
                next_distance_matrix[i][j] = min(distance_matrix[i][j], distance_matrix[i][k] + distance_matrix[k][j]) 
        distance_matrix = next_distance_matrix # update 
    return distance_matrix 
 
 # A graph represented as Adjacency matrix 
 graph = [ 
    [0, inf, inf, -3], 
    [inf, 0, inf, 8], 
    [inf, 4, 0, -2], 
    [5, inf, 3, 0] 
 ] 
 
 print(floyd_warshall(graph)) 
```

#### Más información:

[Graficas](https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md)

[Floyd Warshall - Wikipedia](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)
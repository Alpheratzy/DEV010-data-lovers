# Game of Thrones

"Juego de Tronos" es una serie de televisión de drama y fantasía épica creada por David Benioff y D.B. Weiss, basada en la serie de novelas "Canción de Hielo y Fuego" del autor George R.R. Martin. 

La serie sigue las luchas y conflictos entre varias casas nobles en el ficticio continente
de Westeros, mientras compiten por el Trono de Hierro y el control de los Siete Reinos.

## Hallazgos

Haciendo una investigación (research) sobre la información que podrían necesitar nuestras
usuarias encontramos que los datos de mayor interés son:

- Información sobre los personajes como nombre, titulo, imagen y famila.

Adicionalmente a esta información, para nuestras usuarias es importante poder ver la lista de personajes que aparecen en la serie y la cantidad de miembros en cada familia para tener mayor información de la serie.


## Detalles de la data

En el archivo got.js sumistrado por el equipo Laboratoria: 

- nombre
- apellido
- titulo
- familia
- imagen de personaje
- año de nacimiento
- año de muerte

En el archivo motto.js creado por las programadoras para complementar el diseño:

- Lema familiar o cita de personaje.
- Escudo de la familia
- Breve historia de la familia
## Descripcion del producto y su Diseño

![Prototipo de baja fidelidad](/src/data/imagenes/Baja%20fidelidad.jpeg)

Bautizamos el website como "Game of Thrones: Guía de personajes", debido a que la mayor parte de la información que teníamos disponible, solo incluía este aspecto de la Saga literaria. La data además estaba exclusivamente en inglés, por lo que ajustamos el diseño general a ese idioma. 

![Prototipo de alta fidelidad](/src/data/imagenes/altaFidelñidad.jpg)

Tratamos de darle un diseño parecido a los juegos de mesa de la franquicia;  El background muestra el mapa de Westeros, sobre el que se depositan  las cartas de los personajes, como si del tablero de juego se tratara.

Cada pantalla es capaz de mostrar 12 cartas. Para cambiar de pantalla solo hay que accionar los botones de paginación en la parte inferior de la misma.

![Tablero de juego](/src/data/imagenes/Cards.jpg)

Las 53 tarjetas de personaje son negras,  y contienen las fotos de los personajes por su parte delantera, e información personal por el reverso; revelandose una vez el usuario coloca el cursor encima de cada una de ellas.  Esta información incluye: el titulo que obstentaba, a qué familia pertenecía y su año de nacimiento.

 ![Información complementaria](/src/data/imagenes/history.jpg)

 En la parte inferior del tablero,  se deposita información adicional sobre la historia de la franquicia, o  los personajes que están visibles en ese momento en pantalla.

 En el footer, nos pareció necesario colocar un disclaimer sobre los derechos de autor de los personajes e imagenes utilizadas, para evitar problemas a futuro.


## Funcionalidades

  Hemos agregado 4 funcionalidades principales a la página, a saber:

  1. Función de Búsqueda.

    Disponible en el navegador principal, a través de un campo de busqueda o input.
    
    El usuario puede escribir el nombre del personaje que necesite en el campo, y el sistema solo mostrará en pantalla esa card.
    
    En el código: activamos la función con un evento keyup, de manera que la busqueda se da a la par que el usuario escribe.

2.  Función de Filtrado:

    Disponible en el navegador principal a través de un selector.
    
    Es la que más cambios realiza en el tablero, dependiendo de la casa escogida:

    - El background cambia a los colores tradicionales de la casa.
    - Se muestra una cita, asociada a uno, o a todos los personajes de la casa. En el área superior del tablero.
    - Se muestran solo las tarjetas con los personajes pertenecientes a esa casa.
    - Se muestra el escudo de la casa, en el panel inferior del tablero.
    - Se muestra una pequeña historia de la familia, en el panel inferior del tablero.
    - y se activa la función "Sobrevivientes", que permite conocer cuántos personajes sobrevivieron de esa casa, al juego de Thronos.

3. Función de Ordenado Alfabetico:

    Disponible en el navegador principal a través de un selector.
    
    Ofrece la oportunidad al usuario de ordenar alfabeticamente la data de forma ascendente o descendente.

4. Función de Ordenado por fecha de nacimiento. 

    Disponible en el navegador principal a través de un selector. 

    Ofrece la oportunidad al usuario de ordenar los personajes de mayor edad a menor edad, y viceversa, dejando de últimos aquellos personajes que se desconoce su su fecha de nacimiento. 

5. Función Sobrevivientes:

    Disponible en todas las pantallas del website. En la parte baja del tablero.
    
    Genera una operación matemática que imprime numéricamente, cuantos de los personajes mostrados en pantalla sobrevivieron al Juego de Tronos, al terminarse la serie.

    En el código: se realizó tomando en cuenta la presencia o no de una fecha de muerte, en la data por personaje.

# test 

En total se realizaron 15 test al archivo data.js, que:

1. Verificaron que las funciones existían.
2. Verificaron que las funciones retornaban lo que se esperaba. 
3. Verificaron si existían los objetos asociados.

 Dichos test imprimieron los siguientes resultados:

Scanned 1 files, no errors found (14 ms).

> data-lovers@1.0.0 test
> jest --verbose --coverage

 PASS  test/data.spec.js                                                                                       
  √ returns the filtered data (1 ms)
  
  funcion filterData                                                                                    
    √ is a function (2ms)     

    √ returns if the function works (1ms)  

  funcion houseFilter                                                                                          
    √ is a function (1ms)

  mottoFilter                                                                                                  
    √ should be an object

    √ return the filtered data (3 ms) 

    mottoFilter.mottoFilterFunction                                                                            
      √ function (1 ms) 

  sortData                                                                                                     
    √ is a function 

    √ Order A-Z (1 ms) 

    √ Order Z-A   

  calcSurvivors                                                                                                
    √ is a function  

    √ returns number of survivors (1 ms)

  funcion 
  sortBorn                                                                                             
    √ is a function

  sortBorn                                                                                                     
    √ sort by Olders (1 ms) 

    √ sort by youngs (1 ms)  

                                                                                     
--------------|---------|----------|---------|---------|-------------------                                    
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                     
--------------|---------|----------|---------|---------|-------------------
All files     |   95.45 |       80 |     100 |      95 | 
 src          |   95.45 |       80 |     100 |      95 | 
  data.js     |   95.45 |       80 |     100 |      95 | 39,58
 src/data/got |       0 |        0 |       0 |       0 | 
  motto.js    |       0 |        0 |       0 |       0 | 
--------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        0.972 s, estimated 1 s
Ran all test suites.
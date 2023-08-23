//IMPORTACION DE BASES DE DATOS Y OTROS ARCHIVOS

import data from './data/got/got.js'; //import dataMotto from "./data/got/motto.js";
import { filterData, houseFilter, sortData, mottoFilter, calcSurvivors, sortBorn} from './data.js';

//VISUALIZACIÓN
//Constantes necesarias de los espacios cambiantes de la página.

const container = document.querySelector('.card')          //Espacio del tablero
const previous = document.querySelector('.previous')       //botón para desplazar las páginas- anterior
const next = document.querySelector('.next')               //botón para desplazar las páginas- siguiente
const familySelection = document.getElementById('house')   //selector, filtro por familia.
const order = document.querySelector('.order')             //selector, filtro de orden
const search =document.querySelector('.search')            //campo de búsqueda - input
const survivorSpan =document.getElementById('survivors')   //span, para el número de sobrevivientes.

const elementsArray = data.got.length;                     //Elementos de la api
const itemPag = 12;                                        // Visualización de cards por página
const numPag = Math.ceil(elementsArray / itemPag);         // MATH para redondear hacia arriba, los numeros de paginas
let pagAct = 0; //pagina actual


//EVENTOS ASOCIADOS A FUNCIONES PRINCIPALES
// Búsqueda

search.addEventListener('keyup', () => {                  // Escucha si se escribe en el campo de búsqueda
  removeChildNodes(container)                             // limpia el campo de búsqueda
  const newArrSearch = filterData(data, search.value.toLowerCase()) //busca la data
  fetchGots(newArrSearch)                                // Imprime la data en la página usando la funcion fetchGots

  survivorSpan.textContent =  calcSurvivors(newArrSearch) //Imprime el número de supervivientes con la función calcSurvivors
})

//Filtrar la data

familySelection.addEventListener('change', () => {        //Escucha al selector cambiar de opción
  removeChildNodes(container)           
  const newArrFam = houseFilter(data, familySelection.value)
  fetchGots(newArrFam)

  survivorSpan.textContent =  calcSurvivors(newArrFam) 

})

//ordenar la data alfabeticamente

order.addEventListener('change', () => {                
  removeChildNodes(container)
  const newArrOrder = sortData(data, order.value)
  fetchGots(newArrOrder)

  survivorSpan.textContent =  calcSurvivors(newArrOrder)

})

//ordenar la data por fecha de nacimiento

order.addEventListener('change', () => {
  if (order.value === "Born") {
    const OrderBorn= sortBorn(data, order.value) 
    fetchGots(OrderBorn)
  }
} )

// EVENTOS ASOCIADOS A LA PAGINACIÓN
// Botones que desplazan por las cards

previous.addEventListener('click', () => {  //registra un envento en el objeto

  if (pagAct - 1 < numPag) { // Registra un evento a un objeto en específico
    pagAct--;
    removeChildNodes(container);  // limpia container
    fetchGots(data);
  }
})

next.addEventListener('click', () => {
  if (pagAct + 1 < numPag) {
    pagAct++;
    removeChildNodes(container);  // limpia container
    fetchGots(data);
  }
})

//Organización de las cards en pantalla

function fetchGots(nuevaData) { // funcion para visualizar la data got con condiciones para que no se pasen ni antes ni despues del arary
  let prueba = 0
  if (Math.sign(pagAct) === -1) {  // Math.sign devuelve uno o -1
    pagAct = 0
  } else {
    prueba = pagAct
  }
  for (let i = 0; i < itemPag; i++) {   // recorrer la data y crear cada card
    const actual = (prueba * itemPag) + i;

    if (nuevaData.got) {
      if (actual >= nuevaData.got.length) return
      container.innerHTML +=`<section class="flip-card">
        <section class="flip-card-inner">
          <section class="flip-card-front">
            <figure >
              <img class="imagen" src=${nuevaData.got[actual].imageUrl}>
              <figcaption>${nuevaData.got[actual].fullName}</figcaption>
            </figure>
          </section>
          <section class="flip-card-back">
            <figcaption><br> ${nuevaData.got[actual].fullName}</figcaption>
            <figcaption><hr><br>Title :${nuevaData.got[actual].title}</figcaption></figcaption>
            <figcaption><br>Family: ${nuevaData.got[actual].family}</figcaption>
            <figcaption><br>Born: ${nuevaData.got[actual].born}</figcaption>
          </section>
        </section>
      </section>`
    }

    else {
      if (actual >= nuevaData.length)
        return
      container.innerHTML += `<section class="flip-card">
        <section class="flip-card-inner">
          <section class="flip-card-front">
            <figure >
              <img class="imagen" src=${nuevaData[actual].imageUrl}>
              <figcaption>${nuevaData[actual].fullName}</figcaption>
            </figure>
          </section>
          <section class="flip-card-back">
            <figcaption><br> ${nuevaData[actual].fullName}</figcaption>
            <figcaption><hr><br>Title :${nuevaData[actual].title}</figcaption>
            <figcaption><br>Family: ${nuevaData[actual].family}</figcaption>
            <figcaption><br>Born: ${nuevaData[actual].born}</figcaption>
          </section>
        </section>
      </section>`
    }

  }

}

//FUNCIONES EXTRA DE DISEÑO
//Funcion que cambia el mensaje, el autor de dicho mensaje, el escudo y la historia de la familia.

familySelection.addEventListener("change", function(){
  const selectedHouse =familySelection.value;
  const resultsWords = document.querySelector(".words");
  const resultShield = document.getElementById("shield");
  const resultHistory = document.getElementById("history");
  const resultComment =document.querySelector(".autor");
  changeColor(selectedHouse)


  //a. limpiar contenidos de los espacios...
  resultsWords.innerHTML = "";
  resultComment.innerHTML= "";
  resultShield.innerHTML = "";
  resultHistory.innerHTML= "";

  const words=mottoFilter.mottoFilterFunction(undefined,selectedHouse)

  //b. Pintar la nueva informacion en los espacios...

  words.forEach(item => {
    resultsWords.innerHTML=`<p>"${item.motto}"</p>`
  })

  words.forEach(item => {
    resultComment.innerHTML=`<h3>${item.comment}</h3>`
  })

  words.forEach(item => {
    resultShield.innerHTML+=`<img class="shield" src="${item.imageUrl}" alt= "House Shield"></img>`
  })

  words.forEach(item => {
    resultHistory.innerHTML+=`<p>${item.history}</p>`
  })
})

//Cambio del color del background por familia.

function changeColor(valueSelector) {
  let mainColor ="";

  if (valueSelector === "Baelish" || valueSelector === "Baratheon" || valueSelector === "Clegane"){
    mainColor = "	#CCAD2A";
  }
  else if (valueSelector === "Lannister"||valueSelector=== "Bolton"|| valueSelector === "Targaryen"){
    mainColor= "#BD2E31";
  }
  else if (valueSelector === "Stark"||valueSelector === "Greyjoy"|| valueSelector === "Seaworth"){
    mainColor= "#828282";
  }
  else if (valueSelector === "Tarly"||valueSelector === "Tyrell"|| valueSelector=== "Mormont"){
    mainColor= "#008F39";
  }
  else if (valueSelector === "Tarth"){
    mainColor="#3B83BD";
  }
  else if (valueSelector === "Martell"){
    mainColor= "#ED7700";
  }
  document.querySelector('main').style.backgroundColor = mainColor

}

//función de limpieza de espacios para ser utilizada por otras funciones. 
function removeChildNodes(parent) {  
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
fetchGots(data);

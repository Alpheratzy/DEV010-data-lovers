import data2 from "./data/got/motto.js";

//funcion buscar
export function filterData(data, searchedWord) {  
  const searchResult= data.got.filter(index => index.fullName.toLowerCase().includes(searchedWord)) //retorna Esto se utiliza para filtrar el arreglo en base a una condición. Se creará un nuevo arreglo con los elementos que cumplan con la condición.
  return searchResult
}

//funcion filtrar por familia
export function houseFilter(data, filter) { 
  const datafamily= data.got.filter(item => item.family.includes(filter));
  return datafamily
}

//funcion filtrar para información adicional sobre familias.
export const mottoFilter= { 
  mottoFilterFunction: function (data = data2, family) {
    const mottoResult = data.motto.filter(item=> item.family.includes(family));
    return mottoResult
  },
}

//funcion de ordenar alfabeticamente
export function sortData(data, order) {
  const orderData = data;
  
  const try1 = orderData.got.sort((a, b) => {
    const fullNameA = a.fullName.toLowerCase();
    const fullNameB = b.fullName.toLowerCase();
    
    if (fullNameA < fullNameB) {
      return -1;
    }

    if (fullNameA > fullNameB) {
      return 1;
    }

    return 0;
  });

  if (order === 'Ascendente') {
    return try1
  }
  if (order === 'Descendente') {
    return [...try1].reverse()
  }
}

//Función de cálculo de sobrevivientes.
export function calcSurvivors (newArrFam){
  const totalElements = newArrFam.length;    //total de elementos del array
  let death = 0;                            //contador de muertes
  
  for (let i = 0; i < newArrFam.length; i++){
    const item = newArrFam[i]
    if (item.death !== undefined && item.death !== null)  {
      death++;
    }
  }
  const survivors = totalElements - death;
  return survivors
}












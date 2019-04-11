// Aqui uso equipmentSchema y equipmentData pero la solucion sirve para cualquiera 
const equipmentSchema = require('./schemas/equipment').equipmentSchema;
const equipmentData = require('./data/equipment').equipmentData;

// Lista de propiedades del Schema
const schemaPropertyList = equipmentSchema.properties;
// Esto es lo que devulevo al final del proceso
let equipmentListResult = [];
// Obtengo un array de keys ejemplo: primary_key, updated_at, created_at, deleted_at
const keys = Object.keys(schemaPropertyList);

// Loop through equipment data list - Esta es la data que se obtiene via postman
equipmentData.forEach(equipmentItem => {
    let itemResult = {};
    // Hago un loop sobre las keys, por cada key se asisnga una propiedad en el objeto itemResult y se le da el valor que se toma de equipmentItem
    for (i = 0; i < keys.length; i++){
        // Aqui aseguro que las propiedades se asignen correctamente de acuerdo a su posicion
        itemResult[keys[i]] = equipmentItem[i];
    }
    // Inserto el nuevo item mapeado a la lista final
    equipmentListResult.push(itemResult)
})
// Imprimo la lista.
console.log(equipmentListResult);


// **2. Scrieți o funcție care returnează un obiect nou fără proprietățile furnizate**
// Funcția primește 2 parametri ca date de intrare.
// Unul dintre parametri este obiectul, iar celălalt este proprietatea care nu se dorește să persiste în rezultatul returnat.
// Exemplu 1:
// `Input: obiect = { a: 1, b: 2 }, proprietate = “b”`
// `Output: { a: 1 }`
// *Hint 1: https://www.w3schools.com/howto/howto_js_remove_property_object.asp*
// *Hint 2: Exista doua moduri de accesare a elementelor prin chei: `obiect.cheie` sau `obiect[”cheie”]`*
//..........................................................................................................

// Case 1 to delete obj property through: delete.obj.key 
const obj = { 
  a: 1,
  b: 2,
  c: 3
};
console.log()
console.log(".............CASE 1.............");
console.log("Case1-Step1-original object is: ");
console.log(obj);

const chosenproperty = obj.c;
delete obj.c;
console.log(".............................");
console.log("Case1-Step2-deleted property was: ");
console.log(chosenproperty);

console.log(".............................");
console.log("Case1-Step3-Resulted object is: ")
console.log(obj) // Output: { a: 1, b:2 }
console.log(".............................");
console.log()
console.log()

// Case 2 to delete obj property through function
function removePropertyOfObj(object, property) {
  // verify if the property is inside the object
  // Use property of object: obj.hasOwnProperty(property) to verify if the "obj" has the "property"
  if (object.hasOwnProperty(property)) { 
    // create a clone of the original object
    const aNewObject = { ...object };
    // delete the property from the new object
    // use the property of object : delete objectname[propertyofobject];
    delete aNewObject[property];
    // return the new object
    return aNewObject;
  } else {
    // if the property does not exists return the original object
    return object;
  }
}

// Function use in the next example :
const exampleObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
console.log(".............CASE 2.............");
console.log("Case2-Step1-original object is: ");
console.log(exampleObject)

const exampleProperty = "c";
console.log(".............................");
console.log("Case2-Step2-deleted property was: ");
console.log(exampleProperty);

console.log(".............................");
console.log("Case2-Step3-new object obtained by function is: ");
console.log(ResultedNewObject = removePropertyOfObj(exampleObject, exampleProperty));
console.log(".............................");
console.log()
console.log()

// use the same function to also delete exampleProperty in object from Case 1
console.log(".............CASE 3.............");
console.log("use the function from Case2 to delete exampleProperty from Case2 in object from Case 1")
console.log("Case3-Step3-original object is: ");
console.log(obj)

console.log(".............................");
console.log("Case2-Step2-deleted property was: ");
console.log(exampleProperty);

console.log(".............................");
console.log("use the function from Case2 to delete exampleProperty from Case2 in object from Case 1")
console.log("Case3-Step3-new obtained object by function: ");
console.log(ResultedNewObject = removePropertyOfObj(obj, exampleProperty));
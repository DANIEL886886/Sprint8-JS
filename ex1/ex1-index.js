// **1. Scrieți o funcție care creează un obiect pentru a păstra informații despre rețeta ta preferată**
// Ar trebui să aibă proprietăți pentru titlu (un șir de caractere), porții (un număr) și ingrediente (o șir de elemente - array). 
//Va fi afișată pe rânduri separate(o instrucțiune`console.log` pentru fiecare) toate informațiile obiectului după crearea acestuia.
// Exemplu 1:
// `Input: titlu = “Pizza”, portii = 3, ingrediente = [“sunca”, “cas”, “ketchup”]`
// `Output: { titlu: “Pizza”, portii: 3, ingrediente: [”sunca”, “cas”, “ketchup”] }`
//.....................................................................................

// Function to create a recipe object
function createRecipe(title, portions, ingredients) {
  // Create an object with the given title, portions, and ingredients
  let recipe = {
    title: title, // Property for the recipe title
    portions: portions, // Property for the number of portions
    ingredients: ingredients // Property for an array of ingredients
  };

  // Log the recipe object to the console
  console.log(`Title: ${recipe.title}`);
  console.log(`Portions: ${recipe.portions}`);
  console.log(`Ingredients: ${recipe.ingredients.join(', ')}`);

  // Return the recipe object
  return recipe;
}

// Example usage
const recipe = createRecipe("Pizza", 3, ["sunca", "cas", "ketchup"]);
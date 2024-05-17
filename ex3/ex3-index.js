// 3. Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum titlu (un șir de caractere - string), autor (un șir de caractere - string) și esteCitită (un boolean care indică dacă ați citit-o).
// Scrieți o funcție care:
// Iterează prin gama de cărți. Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
// Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.
// Exemplu 1:
// Input: [ { titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, { titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, ];
// Output:
// “Carte 1 de Autor 1”
// ”Ai citit deja “Carte 1” de Autor 1”
// ”Carte 2 de Autor 2”
// ”Trebuie sa citesti “Carte 2” de Autor 2”
//.......................................................................................................................................

// Define the array of books
let books = [
       { index: "1", titlu: "Capra cu 3 iezi", autor: "Autor 1", esteCitita: true },
       { index: "2", titlu: "Programarea pentru incepatori", autor: "Autor 2", esteCitita: true },
       { index: "3", titlu: "Cele mai bune 50 de retete culinare", autor: "Autor 2", esteCitita: false },
       { index: "4", titlu: "Cele 7 minuni ale lumii", autor: "Autor 2", esteCitita: false },
];

// Define the function to print book information
function printBookInfo(book) {
    let message = "Cartea nr." + book.index + " : " + book.titlu + " de " + book.autor; // other posibility : let message = `${book.titlu} de ${book.autor}`;
       //console.log(message);
       console.log();
    if (book.esteCitita) {
           console.log("Ai citit deja " + message); //(`Ai citit deja ${message}`);
           console.log();
    } else {
           console.log("Trebuie să citești " + message);
           console.log();
    }
}

// Iterate through the array of books
for (let book of books) {
       printBookInfo(book);
}
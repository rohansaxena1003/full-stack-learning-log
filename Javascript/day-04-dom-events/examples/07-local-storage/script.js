// /* 2. What is localStorage?
// localStorage is browser storage containing key–value pairs.
// Think of a key as a label used to retrieve a saved value:
// localStorage.setItem("day4.username", "Rohan");
// Here:
// - Key: "day4.username"
// - Value: "Rohan"
// It normally survives page refreshes and browser restarts. 
// However, it is not permanent backup: clearing site data or using private browsing can affect retention.
// */

// /* 3. The four storage methods
// localStorage.setItem("day4.username", "Rohan"); // save or update
// localStorage.setItem("day4.username", "Sam"); // Using the same key replaces its previous value
// const username = localStorage.getItem("day4.username"); // Read: getItem()
// console.log(username); // "Sam"
// console.log(localStorage.getItem("day434.userName")) // If the key does not exist, the result is null.
// localStorage.removeItem("day4.username"); // Remove one entry: removeItem()

// // Recognize this method; do not run it casually.
// localStorage.clear(); // Remove all entries: clear()
// > clear() removes all local-storage entries for the current origin, 
// including those belonging to your other exercises. 
// */

// /* 4. Storage stores strings
// localStorage.setItem("day4.count", 5);
// const count = localStorage.getItem("day4.count");
// console.log(count);        // "5"
// console.log(typeof count); // "string"

// An object needs special handling:
// const product = {
//     id: 1,
//     name: "Keyboard"
// };

// // Incorrect for preserving this object's structure
// localStorage.setItem("day4.product", product);
// console.log(localStorage.getItem("day4.product")); // [object Object]

// Its properties are not preserved in a useful format.
// Use JSON to represent structured data as a string
// */

// /* 5. JSON stands for JavaScript Object Notation.
// It is a text format for representing data.
// A JavaScript object:
// const product = {
//     id: 1,
//     name: "Keyboard",
//     inStock: true
// };

// Its JSON representation:
// {
//     "id": 1,
//     "name": "Keyboard",
//     "inStock": true
// }

// For this topic, remember:
// - JSON property names use double quotes.
// - JSON strings use double quotes.
// - JSON supports objects, arrays, strings, numbers, Booleans, and null.
// - JSON does not allow comments or trailing commas.
// An object is something your JavaScript can directly work with. 
// A JSON string is text that describes data.

// */

// /* 6. JSON.stringify() — data to string */
// const product1 = {
//     id: 1,
//     name: "Keyboard",
//     inStock: true
// };

// const json1 = JSON.stringify(product1);

// console.log(json1);
// // {"id":1,"name":"Keyboard","inStock":true}

// console.log(typeof json1); // "string"

// /* The conversion below is often called serialization.
// For now, serialize plain data. 
// Functions and undefined object properties are omitted, dates become strings, 
// and circular references cause an error. 
// JSON is not a universal way to preserve every JavaScript value.
// */
// localStorage.setItem("day4.product", json1);
// localStorage.getItem("day4.product1");
// console.log(localStorage);

// /* 7. JSON.parse() — string to data

// */

// const json2 = '{"id":1,"name":"Keyboard","inStock":true}';

// const product2 = JSON.parse(json2);

// console.log(product2.name);    // "Keyboard"
// console.log(product2.inStock); // true

// /* To restore a stored object: */
// const saved = localStorage.getItem("day4.product");

// if (saved !== null) {
//     const product = JSON.parse(saved);

//     console.log(product.name); // Keyboard
// }
// /* The essential pair is:
// JSON.stringify(data); // Data → JSON string
// JSON.parse(json);     // JSON string → data
// */

// /* 8. Saving an array of objects
// Your existing product data can be stored together:
// */
// const products21 = [
//     {
//         id: 1,
//         name: "Keyboard",
//         price: 15000,
//         inStock: true
//     },
//     {
//         id: 2,
//         name: "Mouse",
//         price: 7000,
//         inStock: false
//     }
// ];

// localStorage.setItem(
//     "day4.products",
//     JSON.stringify(products21)
// );
// /* You do not need a separate storage entry for every product.
// Restore it: */
// const saved21 = localStorage.getItem("day4.products");
// console.log(saved21);
// console.log(typeof saved21); // string
// console.log(JSON.parse(saved21));
// let restoredProducts;

// if (saved21 !== null) {
//   restoredProducts = JSON.parse(saved21);
// }
// console.log(restoredProducts);

// /* 9. . Handling missing or invalid saved data
// There are three different situations:
// | Situation | Example | Required response |
// |---|---|---|
// | Nothing saved | `getItem()` returns `null` | Use initial/default data |
// | Invalid JSON | `"{broken"` | Catch the parsing error |
// | Valid JSON, wrong structure | `"42"` or `"null"` | Validate the parsed value |

// Successfully parsing JSON does not prove that it contains your expected data.
// Here is an illustrative loader for an array of strings:
// */
// function loadNotes() {
//     try {
//         const saved31 = localStorage.getItem("day4.notes");

//         if (saved31 === null) {
//             return [];
//         }

//         const parsed = JSON.parse(saved31);

//         const validNotes =
//             Array.isArray(parsed) &&
//             parsed.every((note) => typeof note === "string");

//         if (!validNotes) {
//             throw new Error("Unexpected notes format");
//         }

//         return parsed;
//     } catch (error) {
//         console.log("Could not load notes:", error);

//         return [];
//     }
// }

// console.log(loadNotes());


// /* 11. Storage does not update automatically
// Saving creates a stored representation of the data at that moment. */
// const settings = {
//     theme: "light"
// };

// localStorage.setItem(
//     "day4.settings",
//     JSON.stringify(settings)
// );

// settings.theme = "dark";
// /*
// The stored value still says "light".
// Save again to persist the change:
// */
// localStorage.setItem(
//     "day4.settings",
//     JSON.stringify(settings)
// );
// /*
// Similarly, reading and parsing data does not automatically display it. 
// Your application must call its rendering function.
// */


















































































const STORAGE_KEY = "day4.study-note";

const form = document.querySelector("#note-form");
const noteInput = document.querySelector("#note");
const removeButton = document.querySelector("#remove-note");
const status = document.querySelector("#status");
const preview = document.querySelector("#preview");

let note = {
    text: ""
};

function renderNote() {
    preview.textContent = note.text || "No saved note.";
}

function loadNote() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved === null) {
            return;
        }

        const parsed = JSON.parse(saved);

        if (
            parsed === null ||
            typeof parsed !== "object" ||
            Array.isArray(parsed) ||
            typeof parsed.text !== "string"
        ) {
            throw new Error("Unexpected note format");
        }

        note = {
            text: parsed.text
        };

        noteInput.value = note.text;
        status.textContent = "Saved note restored.";
    } catch (error) {
        console.warn(error);

        status.textContent =
            "Could not restore the note. Existing storage was not changed.";
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = noteInput.value.trim();

    if (text === "") {
        status.textContent = "Enter a note, not just spaces.";
        noteInput.focus();
        return;
    }

    const updatedNote = {
        text
    };

    try {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(updatedNote)
        );

        note = updatedNote;
        renderNote();

        status.textContent = "Note saved. Try refreshing.";
    } catch (error) {
        console.warn(error);

        status.textContent =
            "Could not save. Your text is still in the input.";
    }
});

removeButton.addEventListener("click", () => {
    try {
        localStorage.removeItem(STORAGE_KEY);

        note = {
            text: ""
        };

        form.reset();
        renderNote();

        status.textContent = "Saved note removed.";
        noteInput.focus();
    } catch (error) {
        console.warn(error);

        status.textContent = "Could not remove the saved note.";
    }
});

loadNote();
renderNote();
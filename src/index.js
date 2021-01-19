import store from './store'
import { BUG_ADDED, BUG_REMOVED } from './actionTypes'

// let input = "   JavaScript   ";

// let output = `<div>${input.trim()}</div>`; 

// const trim = str => str.trim();
// const wrap = type => str => `<${type}>${str}</${type}>`;

// const toLowerCase = str => str.toLowerCase();

// const transform = pipe(trim, toLowerCase, wrap("div"));

// console.log(transform(input));

// const person = { 
//     name: "John",
//     address: {
//         country: "Nigeria",
//         city: "Kano"
//     }
// };

// const updated = Object.assign({}, person, { name: "Bob", age: 30 })

// const updated = {
//     ...person, 
//     address: {
//         ...person.address,
//         city: "Lagos"
//     },
//     name: "Bob", 
//     age: 30
// }


// console.log(person)

// const numbers = [1, 2, 3];

// const index = numbers.indexOf(2);

// const add = [
//     ...numbers.slice(0, index),
//     4,
//     ...numbers.slice(index)
// ];

// const remove = numbers.filter(n => n !== 2);

// console.log(remove)

// const update = numbers.map(n => (n === 2 ? 20 : n));

// console.log(update)

// console.log(add)

// immutable.js

// let book = Map({ title: "Harry Poter" });

// function publish(book) {
//     return book.set("isPublished", true);
// }

// book = publish(book);

// console.log(book.toJS())

//immer

// let book = { title: "Harry Poter" };

// function publish(book) {
//     return produce(book, draftBook => {
//         draftBook.isPublish = true;
//     })
// }

// let updated = publish(book);

// console.log(book)
// console.log(updated)

const unsubscribe = store.subscribe(() => {
    console.log("Store Change", store.getState())
})

store.dispatch({
    type: BUG_ADDED,
    payload: {
        description: "Bug1"
    }
})

unsubscribe()

store.dispatch({
    type: BUG_REMOVED,
    payload: {
        id: 1
    }
})

console.log(store.getState())
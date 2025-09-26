
const loginPageHeader = document.getElementById("login-header");

console.log(loginPageHeader);

loginPageHeader.textContent = "I have been changed by the Script";


// console.log(document);

const loginFormInputs = document.getElementsByClassName("login-input");

console.log(loginFormInputs);


const paragraphElement = document.getElementsByTagName("p");

console.log(paragraphElement);


// select by css selector

const loginform = document.querySelector("#login-form");

const elementsAllByQuerySelector = document.querySelectorAll(".login-input");




// Parent Child Sibling Elements

console.log(loginform.parentElement.parentElement);

console.log(loginform.firstElementChild);
console.log(loginform.lastElementChild);
console.log(loginform.children)

console.log(loginform.firstElementChild.nextElementSibling.nextElementSibling)



// creating elements

const newElement = document.createElement("p");
newElement.textContent = "Hello there";

loginform.appendChild(newElement);
loginform.removeChild(newElement);


// Events and Listeners
/*
    Critical to web development

    It allows your page to be interactive and responsive to user interaction

    We can attach event listeners to elements on the page, which when triggered can run a specific function

    Events
        - Actions or occurrences that can happen in the browser, lick clicking, hovering, etc
    
    Event Listeners
        - These are JS functions that listen for the specific event
        - When the event occurs, the event listener callback function is executed

*/

// Attach Event listener

const loginButtonInput = document.querySelector("#login-button");

loginButtonInput.addEventListener("click", (event) => {
    console.log("I have been clicked");
    console.log(event);
})

/*
    Event object is created and passed to the event listener callback
    The event object contains information about the event, such as the target element
*/

// bubbling and capturing

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

// By default it is bubbling

// parent.addEventListener("click", () => {
//     alert("parent has been clicked");
// });

child.addEventListener("click", () => {
    alert("child has been clicked");
});


// to make it capturing, we pass an additional argument of true after the callback function
// by default, it is false

parent.addEventListener("click", () => {
    alert("Parent has been clicked capturing")
},
true);

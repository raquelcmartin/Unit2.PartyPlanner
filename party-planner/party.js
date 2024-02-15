/*
 SETUP
1. References to different useful things
2. State
*/

const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/raquel-martin';

let parties = []; // state

const partiesContainer = document.getElementById('events'); // reference to where im putting the parties 

/*
FETCH CALLS
/GET
/POST
/PUT
/DELETE
*/

async function getParties() {
    try {
        const response = await fetch (`${BASE_URL}/events`);
        const json = await response.json();

        return json.data; // return the events list

    } catch(err) {
        console.error(err);
    }
}



/*
 EVENT LISTENERS (click submit etc.)
 */





 /*
RENDER FUNCTIONS

renderParties() - what we call when GET/POST/PUT/DELETE runs to re-enter the DOM
*/

function renderParties() {
    const htmlParties = parties.map(event => {
        let div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `<h3>${event.name}</h3>
                         <p>${event.date}</p>
                         <p>${event.location}</p>
                         <p>${event.description}</p>`;
        return div
    })

    partiesContainer.replaceChildren(...htmlParties);
}



async function startApp() {
    parties = await getParties();
    renderParties()
}

startApp();

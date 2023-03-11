const tableBody = document.querySelector('#tableBody');
const gepName = document.querySelector('#name');
const gepPrice = document.querySelector('#price');
const gepWheels = document.querySelector('#wheels');
let abcRendezve = false;
let arRendezve = false;
let kerekRendezve = false;

//Animation timeline GSAP
const tl = gsap.timeline();


const gepLista = [
    { name: "Chassis", wheels: 28, purpose: "Offroad", price: 557900},
    { name: "Alboin 900", wheels: 28, purpose: "Trekking", price: 519900},
    { name: "Asgard", wheels: 29, purpose: "Technikás utak", price: 519900},
    { name: "Ruga", wheels: 29, purpose: "Hegyi", price: 372900},
    { name: "Reptila", wheels: 28, purpose: "Városi", price: 308900},
    { name: "Sirmium", wheels: 29, purpose: "Hegyi", price: 264900}
];

function listaRendezABC(){
    if(!abcRendezve){
        abc = gepLista.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
          });
        abcRendezve = true;
    }
    else {
        abc = gepLista.sort((a, b) => {
            if (b.name < a.name) {
              return -1;
            }
          });
        abcRendezve = false;
    }

}

function listaRendezAr(){
    if(!arRendezve){
        ar = gepLista.sort((a, b) => {
            if (a.price < b.price) {
              return -1;
            }
          });
        arRendezve = true;
    }
    else {
        ar = gepLista.sort((a, b) => {
            if (b.price < a.price) {
              return -1;
            }
          });
        arRendezve = false;
    }

}

function listaRendezKerek(){
    if(!kerekRendezve){
        kerek = gepLista.sort((a, b) => {
            if (a.wheels < b.wheels) {
              return -1;
            }
          });
          kerekRendezve = true;
    }
    else {
        kerek = gepLista.sort((a, b) => {
            if (b.wheels < a.wheels) {
              return -1;
            }
          });
          kerekRendezve = false;
    }

}

gepName.addEventListener('click', () => {
    listaRendezABC();
    listaTorol();
    gepKiIr();
});

gepPrice.addEventListener('click', () => {
    listaRendezAr();
    listaTorol();
    gepKiIr();
});

gepWheels.addEventListener('click', () => {
    listaRendezKerek();
    listaTorol();
    gepKiIr();
});

gepKiIr();


function gepKiIr(){
    gepLista.forEach((gep) =>{
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdWheels = document.createElement('td');
        let tdPurpose = document.createElement('td');
        let tdPrice = document.createElement('td');
        tl.fromTo(tr, {y: -100, opacity: 0}, {duration: 0.3, y: 0, opacity: 1, ease: "sine"})
        tdName.textContent = gep.name;
        tdWheels.textContent = gep.wheels;
        tdPurpose.textContent = gep.purpose;
        tdPrice.textContent = gep.price;
        tableBody.append(tr);
        tr.append(tdName);
        tr.append(tdWheels);
        tr.append(tdPurpose);
        tr.append(tdPrice);
    });
}

function listaTorol() {
    tableBody.textContent = "";
}
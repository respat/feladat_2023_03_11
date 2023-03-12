const tableBody = document.querySelector('#tableBody');
const bikeName = document.querySelector('#name');
const bikePrice = document.querySelector('#price');
const bikeWheels = document.querySelector('#wheels');
const color = document.querySelector('#color');
const theader = document.querySelector('#theader')
const container = document.querySelector('.container');
const cim = document.querySelector('.cim');
let darkMode = false;
let abcRendezve = false;
let arRendezve = false;
let kerekRendezve = false;

//Animation timeline GSAP
const tl = gsap.timeline();

const bikeLista = [
    { name: "Chassis", wheels: 28, purpose: "Offroad", price: 557900},
    { name: "Alboin 900", wheels: 28, purpose: "Trekking", price: 519900},
    { name: "Asgard", wheels: 29, purpose: "Technikás utak", price: 519900},
    { name: "Ruga", wheels: 29, purpose: "Hegyi", price: 372900},
    { name: "Reptila", wheels: 28, purpose: "Városi", price: 308900},
    { name: "Sirmium", wheels: 29, purpose: "Hegyi", price: 264900}
];

function listaRendezABC(){
    if(!abcRendezve){
        abc = bikeLista.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
          });
        abcRendezve = true;
    }
    else {
        abc = bikeLista.sort((a, b) => {
            if (b.name < a.name) {
              return -1;
            }
          });
        abcRendezve = false;
    }

}

function listaRendezAr(){
    if(!arRendezve){
        ar = bikeLista.sort((a, b) => {
            if (a.price < b.price) {
              return -1;
            }
          });
        arRendezve = true;
    }
    else {
        ar = bikeLista.sort((a, b) => {
            if (b.price < a.price) {
              return -1;
            }
          });
        arRendezve = false;
    }

}

function listaRendezKerek(){
    if(!kerekRendezve){
        kerek = bikeLista.sort((a, b) => {
            if (a.wheels < b.wheels) {
              return -1;
            }
          });
          kerekRendezve = true;
    }
    else {
        kerek = bikeLista.sort((a, b) => {
            if (b.wheels < a.wheels) {
              return -1;
            }
          });
          kerekRendezve = false;
    }

}

bikeName.addEventListener('click', () => {
    listaRendezABC();
    listaTorol();
    bikeKiIr();
});

bikePrice.addEventListener('click', () => {
    listaRendezAr();
    listaTorol();
    bikeKiIr();
});

bikeWheels.addEventListener('click', () => {
    listaRendezKerek();
    listaTorol();
    bikeKiIr();
});

bikeKiIr();

function bikeKiIr(){
    tl.fromTo(theader, {y: -100, opacity: 0}, {duration: 0.2, y: 0, opacity: 1, ease: "sine"})
    bikeLista.forEach((bike) =>{
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdWheels = document.createElement('td');
        let tdPurpose = document.createElement('td');
        let tdPrice = document.createElement('td');
        if(darkMode) {
          tr.classList.add("dark");
          theader.classList.add("dark")
          container.classList.add("dark-bg")
          cim.classList.add("cim-light")
        }
        else {
          container.classList.remove("dark-bg");
          tr.classList.remove("dark");
          theader.classList.remove("dark");
          cim.classList.remove("cim-light")
        }
        tl.fromTo(tr, {y: -100, opacity: 0}, {duration: 0.12, y: 0, opacity: 1, ease: "sine"})
        tdName.textContent = bike.name;
        tdWheels.textContent = bike.wheels;
        tdPurpose.textContent = bike.purpose;
        tdPrice.textContent = bike.price;
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

color.addEventListener('click', () => {
  if(darkMode) {
    darkMode = false;
  }
  else {
    darkMode = true;
  }
  listaTorol();
  bikeKiIr();
})

function colorMode() {

}
const tableBody = document.querySelector('#tableBody');
const bikeName = document.querySelector('#name');
const bikePrice = document.querySelector('#price');
const bikeWheels = document.querySelector('#wheels');
const color = document.querySelector('#color');
const theader = document.querySelector('#theader')
const container = document.querySelector('body');
const cim = document.querySelector('.cim');
const sortBtn = document.querySelector('#sort');
const toggle = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.btnToggle');
const sort = document.querySelector('.sort');
const filterTitle = document.querySelector('#filter-title')
const szerzo = document.querySelector('.szerzo');
const nav = document.querySelector('nav');
let darkMode = false;
let abcRendezve = false;
let arRendezve = false;
let kerekRendezve = false;
let active = false;
let counter = -1;

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

const rendezesLista = ["Kerékméret növekvő", "Kerékméret csökkenő", "ABC növekvő", "ABC csökkenő", "Ár növekvő", "Ár csökkenő"]

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

bikeKiIr();

sortBtn.addEventListener('click', () => {
  tl.fromTo(filterTitle, {y: 0, opacity: 1}, {duration: 0.1, y: 15, opacity: 0})
  setTimeout(function() {
    titleChange();
  }, 400);
  tl.fromTo(filterTitle, {y: -20, opacity: 0}, {delay: 0.5, duration: 0.3, y: 0, opacity: 1})
  console.log(counter)
  if(counter < rendezesLista.length-1){
    counter++;
  }
  else {
    counter = 0;
  }
  console.log(counter)
  setTimeout(function() {
    listaRendez();
  }, 600);
})

function titleChange() {
  filterTitle.textContent = rendezesLista[counter];
}

function listaRendez() {
  if(counter == 0 || counter == 1) {
    listaRendezKerek();
    listaTorol();
    bikeKiIr();
  }
  else if(counter == 2 || counter == 3) {
    listaRendezABC();
    listaTorol();
    bikeKiIr();
  }
  else if(counter == 4 || counter == 5) {
    listaRendezAr();
    listaTorol();
    bikeKiIr();
  }
}

// sortBtn.addEventListener('mouseleave', () => {
  
// })

function bikeKiIr(){
    bikeLista.forEach((bike) =>{
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdWheels = document.createElement('td');
        let tdPurpose = document.createElement('td');
        let tdPrice = document.createElement('td');
        if(darkMode) {
          tr.classList.add("dark");
          theader.classList.add("dark");
          container.classList.add("dark-bg");
          sort.classList.add("dark");
          nav.classList.add("dark-bg");
          szerzo.classList.add("szerzo-light");
        }
        else {
          container.classList.remove("dark-bg");
          tr.classList.remove("dark");
          theader.classList.remove("dark");
          sort.classList.remove("dark");
          nav.classList.remove("dark-bg");
          szerzo.classList.remove("szerzo-light");
        }
        tl.fromTo(tr, {y: -10, opacity: 0, zindex: -1}, {duration: 0.12, y: 0, opacity: 1, ease: "power4"})
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

toggle.addEventListener('click', () => {
  colorMode();
})

function colorMode() {
  if(darkMode) {
    darkMode = false;
    cim.style.fill = "black";
    tl.fromTo(toggleBtn, {x: 30, width: 100, background: "radial-gradient(circle, rgba(244,211,94,1) 5%, rgba(238,150,75,1) 100%)"}, 
    {duration: 0.3, x: 0, width:30, left: -100, background: "radial-gradient(circle, rgba(94,93,92,1) 0%, rgba(54,54,54,1) 92%)"},)
    .fromTo(toggle, {backgroundColor: "#282828", opacity: 0.6}, {duration: 0.2, backgroundColor: "white", opacity: 1})
  }
  else {
    cim.style.fill = "white";
    tl.fromTo(toggleBtn, {x: 0, width: 100, background: "radial-gradient(circle, rgba(94,93,92,1) 0%, rgba(54,54,54,1) 92%)"}, 
    {duration: 0.3, x: 30, width:30, right: -100, background: "radial-gradient(circle, rgba(244,211,94,1) 5%, rgba(238,150,75,1) 100%)"})
    .fromTo(toggle, {backgroundColor: "white", opacity: 0.6}, {duration: 0.2,backgroundColor: "#282828", opacity: 1})
    darkMode = true;
  }
  listaTorol();
  bikeKiIr();
}
const tableBody = document.querySelector('#tableBody')

const gepLista = [
    { name: "Chassis", wheels: 28, purpose: "Offroad", price: 557900},
    { name: "Alboin 900", wheels: 28, purpose: "Trekking", price: 519900},
    { name: "Asgard", wheels: 29, purpose: "Technikás utak", price: 519900},
    { name: "Ruga", wheels: 29, purpose: "Hegyi", price: 372900},
    { name: "Reptila", wheels: 28, purpose: "Városi", price: 308900},
    { name: "Sirmium", wheels: 29, purpose: "Hegyi", price: 264900}
];

gepKiIr();

function gepKiIr(){
    gepLista.forEach((gep) =>{
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdWheels = document.createElement('td');
        let tdPurpose = document.createElement('td');
        let tdPrice = document.createElement('td');
        
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
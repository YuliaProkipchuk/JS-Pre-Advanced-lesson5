let balance = 1000;
let beer = {
    name: "Пиво",
    number: 100,
    price: 30
};
let wine = {
    name: "Вино",
    number: 50,
    price: 100
}; let pepsi = {
    name: "Пепсі",
    number: 80,
    price: 20
};
let pricE = 0;
let goods = [beer, wine, pepsi];

function getBalance() {
    return balance;
}
function getItem(itemName){
    for (let elem of goods) {
        if (elem.name.includes(itemName)) {
            return elem.number;
        }
    }
}
function checkNumber(names, count) {
    for (let elem of goods) {
        if (elem.name.includes(names)) {
            if (elem.number < count) {
                return false;
            }
        }
    }
    return true;
}
function orderBalance(count, nameOfOrder) {
    pricE = 0;
    for (let i = 0; i < nameOfOrder.length; i++) {
        for (let elem of goods) {
            if (elem.name.includes(nameOfOrder[i])) {
                balance += elem.price * count[i];
                pricE += elem.price * count[i];
                elem.number -= count[i];

            }
        }
    }
    return pricE;
}
export{orderBalance,checkNumber, getBalance, getItem};

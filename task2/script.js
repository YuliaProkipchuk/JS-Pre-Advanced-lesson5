let selects = document.forms.select_form;
let storage = document.forms.storage_form;
let radioName;
let area = document.querySelector('#storage-area');
let namesofOrders = [];
let numberofOrders = [];
import {checkNumber,orderBalance, getBalance, getItem} from './shopModule.js';

if (radioName == undefined) {
    selects.add_btn.disabled = true;
}

document.querySelector(".radio-btn").addEventListener('click', function () {
    radioName = event.target.value;
    selects.add_btn.disabled = false;

})

document.querySelector('.up').addEventListener('click', () => {
    if (selects.select_count.value == '') {
        selects.select_count.value = 1;
    }
    else {
        selects.select_count.value++;
    }
})
document.querySelector('.down').addEventListener('click', () => {
    if (selects.select_count.value > 1) {
        selects.select_count.value--;
    }
    else {
        selects.select_count.value = ' ';
    }
})
selects.add_btn.addEventListener('click', () => {
    event.preventDefault();

    if (checkNumber(radioName, selects.select_count.value) && selects.select_count.value !== '') {
        namesofOrders.push(radioName);
        numberofOrders.push(+selects.select_count.value);
        area.innerHTML += `${radioName}: ${selects.select_count.value} шт.<br>`
    }
    else {
        document.querySelector('.modal').classList.add('show');
        document.querySelector('.text').innerHTML = `Вибачте, але на складі залишилося ${radioName} ${getItem(radioName)} штук`;
    }
    selects.select_count.value = '';

});
document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('show');
})
selects.buy_btn.addEventListener('click', () => {
    event.preventDefault();
    if (numberofOrders.length && namesofOrders.length) {
        let price = orderBalance(numberofOrders, namesofOrders);
        document.querySelector('.orders').innerHTML = area.innerHTML + `<br>Всього: ${price} гривень`;
        storage.balance_count.value = `${getBalance()} грн.`;
        storage.beer_count.value = `${getItem('Пиво')} шт.`;
        storage.wine_count.value = `${getItem('Вино')} шт.`;
        storage.pepsi_count.value = `${getItem('Пепсі')} шт.`;
        area.innerHTML = '';
    }

    numberofOrders.length = 0;
    namesofOrders.length = 0;
    price = 0;
})
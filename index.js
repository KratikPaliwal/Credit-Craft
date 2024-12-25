let bank_display = document.querySelector('#bank');
let bank_input = document.querySelector('#bankname');
let submit_btn = document.querySelector('#sub');
let name_display = document.querySelector('#disname');
let name_input = document.querySelector('#namedis');
let bankval;
let nameval;

document.addEventListener('DOMContentLoaded', () => {
    // Load saved data if it exists
    const savedBank = localStorage.getItem('bankName');
    const savedName = localStorage.getItem('userName');
    
    if (savedBank) {
        document.getElementById('bankname').value = savedBank;
        document.getElementById('bank').textContent = savedBank;
    }
    

    if (savedName) {
        document.getElementById('namedis').value = savedName;
        document.getElementById('disname').textContent = savedName;
    }

    
    bank_display.textContent = bank_input.value;
    name_display.textContent = name_input.value;


    // Live update for bank name
    document.getElementById('bankname').addEventListener('input', (e) => {
        const bankName = e.target.value;
        document.getElementById('bank').textContent = bankName;
        localStorage.setItem('bankName', bankName);
    });

    // Live update for user name
    document.getElementById('namedis').addEventListener('input', (e) => {
        const userName = e.target.value;
        document.getElementById('disname').textContent = userName;
        localStorage.setItem('userName', userName);
    });

    // Submit button can be used for additional actions if needed
    document.getElementById('sub').addEventListener('click', () => {
        window.location.href = 'premade.html';
    });
});

const localStorageItems = Object.fromEntries(Object.entries(localStorage));
const localStorageItems1 = JSON.parse(JSON.stringify(localStorage));
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  localStorageItems[key] = localStorage.getItem(key);
}
console.log(localStorageItems);
console.log(localStorageItems1);
bank_display.innerHTML = localStorageItems.bankName;
name_display.innerHTML = localStorageItems.name;

let user_name = document.querySelectorAll('.user-name');
user_name.innerHTML=localStorageItems.bankName;
console.log(user_name);


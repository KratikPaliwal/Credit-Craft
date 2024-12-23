let bank_display = document.querySelector('#bank');
let bank_input = document.querySelector('#bankname');
let submit_btn = document.querySelector('#sub');
let name_display = document.querySelector('#disname');
let name_input = document.querySelector('#namedis');

submit_btn.addEventListener('click',()=>{
    let bankval = bank_input.value.trim();
    let nameval = name_input.value.trim();
    if(!bankval  || !nameval){
        alert("Please fill in all fields");
        return;
    }

    
    bank_display.innerHTML = bankval;
    name_display.innerHTML = nameval;
    

    localStorage.setItem('bankName', `${bankval}`);
    localStorage.setItem('name', `${nameval}`);
});

submit_btn.addEventListener('click',()=>{
    
})

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



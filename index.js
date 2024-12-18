let bank_display = document.querySelector('#bank');
let bank_input = document.querySelector('#bankname');
let submit_btn = document.querySelector('#sub');
let display_number = document.querySelector('#number');
let number_input = document.querySelector('#number-input');
let display_valid_date = document.querySelector('#valid-start');
let valid_date_input = document.querySelector('#start-date');
let display_end_date = document.querySelector('#valid-end');
let valid_end_input = document.querySelector('#end-date');
let name_display = document.querySelector('#disname');
let name_input = document.querySelector('#namedis');

submit_btn.addEventListener('click',()=>{
    let bankval = bank_input.value.trim();
    let numberval = number_input.value.trim();
    let sdval = valid_date_input.value;
    let edate = valid_end_input.value;
    let nameval = name_input.value.trim();
    if(!bankval || !numberval || !sdval || !edate || !nameval){
        alert("Please fill in all fields");
        return;
    }
    let cardnumber = /^\d{16}$/;
    if(!cardnumber.test(numberval)){
        alert("Invalid card number");
    }
    let startDate = new Date(sdval);
    
    sdval = `${startDate.getMonth() + 1}/${(startDate.getFullYear()) - 2000}`;
    display_valid_date.innerHTML = sdval;
    edate = `${startDate.getMonth() + 1}/${((startDate.getFullYear()) - 2000)+5}`;
    display_end_date.innerHTML = edate;
    bank_display.innerHTML = bankval;
    display_number.innerHTML = numberval;
    name_display.innerHTML = nameval;
});
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
    let bankval = bank_input.value;
    bank_display.innerHTML=bankval;
    let numberval = number_input.value;
    display_number.innerHTML=numberval;
    let sdval = valid_date_input.value;
    let date = new Date(sdval);
    sdval=`${date.getMonth()+1}/${(date.getFullYear())-2000}`;
    console.log(sdval);
    display_valid_date.innerHTML=sdval;
    let edate=valid_end_input.value;
    let date2 = new Date(edate);
    edate =`${date.getMonth()+1}/${(date2.getFullYear())-2000}`;
    display_end_date.innerHTML=edate;
    let nameval = name_input.value;
    name_display.innerHTML=nameval;
})
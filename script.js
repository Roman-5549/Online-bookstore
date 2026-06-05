const read_more_btns = document.querySelectorAll('.Read_more');
const close_btns = document.querySelectorAll('.close-btn');
const popup_desc = document.querySelectorAll('.full-desc-container');

read_more_btns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        if(popup_desc[index]) {
            popup_desc[index].classList.add('open-full-desc');
        }
    });
});

close_btns.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        if(popup_desc[index]) {
            popup_desc[index].classList.remove('open-full-desc');
        }
    });
});

const current_date = new Date();
const date_element = document.createElement('p');
date_element.innerText = current_date;
const info_section = document.getElementById('info');
info_section.appendChild(date_element);

const app_form = document.getElementById('app-form');
const name_input = document.getElementById('name');
const email_input = document.getElementById('email');
const msg_input = document.getElementById('msg');

app_form.addEventListener('submit', function(event) {
    if(name_input.value.trim() === "" || email_input.value.trim() === "" || msg_input.value.trim() === ""){
        event.preventDefault();
        alert("You need to fill out all the inputs in the form !");
        name_input.style.borderColor = 'red';
        email_input.style.borderColor = 'red';
        msg_input.style.borderColor = 'red';
    };
});


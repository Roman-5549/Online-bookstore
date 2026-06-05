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
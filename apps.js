let maxField = 200;
let addBtn = document.querySelector('.addBtn');
let wrapper = document.querySelector('.field_wrapper');
let x = 1;

addBtn.addEventListener('click', function () {
    if (x < maxField) {
        x++;
        let newInput = document.createElement('div');
        newInput.innerHTML = '<input type="text"> <button class="removeBtn">Remove</button> <br><br>';
        wrapper.append(newInput);
    } 
});

wrapper.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('removeBtn')) {
        target.parentElement.remove();
        x--;
    }
});

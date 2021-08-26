const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    // Finding trigger point
    let triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        // For checking when to show and hide the box
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
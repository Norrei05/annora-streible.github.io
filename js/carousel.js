/** Starting index */
let slideIndex = [0, 0];
/** Format is carousel no. then slide no. */
let carouselId = [
    'C1', 'C2'
];
showSlides(0, 0);
showSlides(0, 1);

/**
 * Moves to the next slide
 * @param {*} n step
 * @param {*} no carousel number
 */
function nextSlide(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let container = document.getElementById(carouselId[no]);
    if (!container) return;
    
    let x = container.getElementsByClassName('slide');
    if (x.length === 0) return;

    if (n > x.length - 1) {
        slideIndex[no] = 0;
    }
    if (n < 0) {
        slideIndex[no] = x.length - 1;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    x[slideIndex[no]].style.display = 'block';
}
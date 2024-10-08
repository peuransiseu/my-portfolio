

const orgBackButton = document.querySelectorAll('.pre-btn');
const orgForwardButton = document.querySelectorAll('.next-btn');
const orgCarousel =  document.querySelectorAll('orgs-detail-container');




orgCarousel.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    orgForwardButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })   

    orgBackButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

})

orgBackButton.addEventListener('click', () => {
    console.log('left');
})

orgForwardButton.addEventListener('click', () => {
    console.log('left');
})

button1.onclick = addNum;

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

const dragStart = () =>{
    isDragStart = true;
}

const dragging = (e) => {
    if(!isDragStart) return;
    orgCarousel.scrollLeft = e.pageX;
}



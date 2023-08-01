const allSquares = document.getElementsByClassName('square')

//function that changes the color of the divs



for (x = 0; x < allSquares.length; x++) {
    allSquares[x].addEventListener('mouseover', function() {
        this.style.backgroundColor = 'black';
    })
}
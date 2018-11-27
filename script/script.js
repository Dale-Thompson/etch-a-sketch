const container = document.querySelector('#container');




// Creates function to draw grid - grid size is set hardcoded, loops through creating and appending a div.
function drawGrid() {
    var containerWidth = document.getElementById('container').offsetWidth;    
    let rowI;
    let gridSize = 25;
    let rowHeight = containerWidth / gridSize;
    
    //creates row divs
    for (rowI = 0; rowI < gridSize; rowI++) {
        //creates col divs
        let gridRow = document.createElement("div");
        let i;
        for (i = 0; i < gridSize; i++) {
            let gridSquare = document.createElement('div');
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
            gridSquare.setAttribute("id", i);
            gridSquare.addEventListener('mouseenter', function(e) {
                e.target.classList.add('grid-square-blacked');
            });
        }
        gridRow.setAttribute("id", rowI);
        gridRow.setAttribute("class", "grid-row");
        gridRow.style.cssText = "height:" + rowHeight + "px;"

        // adds row to the dom
        container.appendChild(gridRow)
    }

}

function resetBoard () {
    let boxes = document.querySelectorAll('.grid-square');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('grid-square-blacked');
        prompt("How many squares do you want ?");
    } 
}


drawGrid();

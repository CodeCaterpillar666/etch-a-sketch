canvasSize = "720px";

const container = document.querySelector('#container');
container.setAttribute('style', `display: flex; flex-wrap: wrap; border: solid 3px black; width: ${canvasSize}; height: ${canvasSize}; align-items: center; justify-content: center;`);

// A ppl x ppl grid of square divs
// ppl = pixels per line(row and column)
let ppl = 5;
let pixelSize = calPixelSize();

drawAllPixels(ppl);

function drawAllPixels(ppl) {
    for (let row = 0; row < ppl; row++) {
        const rowOfPixels = document.createElement('div');
        for (let col = 0; col < ppl; col++) {
            const pixel = drawOnePixel(pixelSize);
            rowOfPixels.appendChild(pixel);
        }
        container.appendChild(rowOfPixels);
    }
}

function drawOnePixel(pixelSize) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.setAttribute('style', `width: ${pixelSize}; height: ${pixelSize}; background-color: white; border: solid 0px black;`)

    // mouseover event
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = "Black";
    });
    return pixel;
}

function calPixelSize() {
    // Rip the last two characters "px"
    let size = Number(canvasSize.slice(0, -2));
    let pixelSize = size / ppl;
    let pixelSizeStrig = pixelSize + "px";
    return pixelSizeStrig;
}

/***************************************************************************************************************************************************/
/*
Excute clear() once the clear button is clicked.
The way I set onclick is follow this youtube(https://www.youtube.com/watch?v=XQEfWd1lh4Q).
*/
const clearBtn  = document.querySelector(".clear-btn");

clearBtn.onclick = clear;

function clear() {
    /**
     * 1. clear div(class="container")'s innerHTML
     * 2. ask the user to set a new ppl, and use the new ppl to update pixelSize
     * 3. based on user-newly-set ppl and the corresponding pixelSize, draw all the pixels
     */
    container.innerHTML = "";
    console.log("clear!");
    // console.log("ppl before clear: " + ppl);
    ppl = prompt("Please enter the number of pixels you want per side of the new canvas:")
    updatePixelSize();
    // console.log("ppl after clear: " + ppl);
    drawAllPixels(ppl);
}

function updatePixelSize() {
    pixelSize = calPixelSize();
}
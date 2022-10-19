// slide animation

let counter = 0;

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
        counter++;
        if (counter >= 4) {
            repeatPosition();
            return;
        }
        document.getElementById("sec-" + (counter - 1)).classList.toggle("shiftSectionLeft");
    }
    if (e.key === "ArrowUp") {
        counter--;
        if (counter <= -1) {
            repeatPosition();
            return
        }
        document.getElementById("sec-" + counter).classList.toggle("shiftSectionLeft");
    }
})

function repeatPosition() {
    counter = counter >= 3 ? 0 : 3;
    document.getElementById("sec-" + 0).classList.toggle("shiftSectionLeft");
    document.getElementById("sec-" + 1).classList.toggle("shiftSectionLeft");
    document.getElementById("sec-" + 2).classList.toggle("shiftSectionLeft");
}

const element = document.getElementById('sec-1');

function isEndOfPage() {
    if (element.scrollTop < lastScrollTop) {
        // upscroll
        return;
    }
    lastScrollTop = element.scrollTop <= 0 ? 0 : element.scrollTop;
    if (element.scrollTop + element.offsetHeight >= element.scrollHeight) {
        counter++;
        document.getElementById("sec-" + (counter - 1)).classList.toggle("shiftSectionLeft");
    }
}


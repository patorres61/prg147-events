function jokeAnswer() {
    'use strict';
    document.getElementById("joke").innerHTML = "Because he had a very big bill!";
}

function swap1() {
    'use strict';
    document.getElementById("pelican").src = "toucan.jpg";

}

function swap2() {
    'use strict';
    document.getElementById("pelican").src = "pelican.jpg";
}

function mOver(obj) {
    'use strict';
    obj.innerHTML = "Owlgebra!!!";
}

function mOut(obj) {
    'use strict';
    obj.innerHTML = "What kind of math do birds like?";
}

function changeBackground() {
    'use strict';
    document.getElementById('mydiv').style.backgroundImage = "url('banner2.jpg')";
}

function chgBackground() {
    'use strict';
    document.body.style.backgroundImage = "url('banner.jpg')";
}


function rightClick(obj) {
    'use strict';
    obj.style.backgroundColor = "#eaf04e";
    obj.innerHTML = "Cut a hole in the ice, put peas around the edge. When the polar bear comes to take a pea, you kick him in the icehole!";
}

function mUp(obj) {
    'use strict';
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "How do you catch a polar bear?";
}

function bearyelling() {
    'use strict';
    document.getElementById('myimage').src = "bearyelling.jpg";
}

function bears() {
    'use strict';
    document.getElementById('myimage').src = "bears.jpg";
}

function drink() {
    'use strict';
    document.getElementById("drinks").innerHTML = "Coffee, tea, or water?";
}

function pressKey() {
    'use strict';
    document.getElementById("pKey").innerHTML = "Yep, you just pressed a key!";
}

function isAltPressed(event) {
    'use strict';
    if (event.altKey) {
        document.getElementById("aKey").innerHTML = "The ALT key was pressed!";
    } else {
        document.getElementById("aKey").innerHTML = "The ALT key was NOT pressed!";
    }
}
/* Events fired on the drag target */

document.addEventListener("dragstart", function (event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    'use strict';
    event.dataTransfer.setData("Text", event.target.id);

    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
});

// While dragging the p element, change the color of the output text
document.addEventListener("drag", function (event) {
    'use strict';
    document.getElementById("demo2").style.color = "#7875be";
});

// Output some text when finished dragging the p element and reset the opacity
document.addEventListener("dragend", function (event) {
    'use strict';
    event.target.style.opacity = "1";
});


/* Events fired on the drop target */

// When the draggable p element enters the droptarget, change the DIVS's border style
document.addEventListener("dragenter", function (event) {
    'use strict';
    if (event.target.className === "droptarget") {
        event.target.style.border = "5px dotted purple";
    }
});

// By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
document.addEventListener("dragover", function (event) {
    'use strict';
    event.preventDefault();
});

// When the draggable p element leaves the droptarget, reset the DIVS's border style
document.addEventListener("dragleave", function (event) {
    'use strict';
    if (event.target.className === "droptarget") {
        event.target.style.border = "";
    }
});

/* On drop - Prevent the browser default handling of the data (default is open as link on drop)
   Reset the color of the output text and DIV's border color
   Get the dragged data with the dataTransfer.getData() method
   The dragged data is the id of the dragged element ("drag1")
   Append the dragged element into the drop element
*/
document.addEventListener("drop", function (event) {
    'use strict';
    event.preventDefault();
    if (event.target.className === "droptarget") {
        document.getElementById("demo2").style.color = "";
        event.target.style.border = "";
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
});


function allowDrop(ev) {
    'use strict';
    ev.preventDefault();
}

function drag(ev) {
    'use strict';
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    'use strict';
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function changeTextColor() {
    'use strict';
    document.getElementById("head2").style.color = "#eaf04e";
    document.getElementById("para").style.color = "#6a39c6";

}
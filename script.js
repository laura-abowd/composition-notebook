//loop to hide each 'notes' page
const element = document.querySelectorAll(".notes");
for (let x = 0; x < element.length; x++)
  element[x].style.display = 'none';

const li_elements = document.querySelectorAll(".links");
const item_elements = document.querySelectorAll(".notes");
const backCover = document.getElementById('back-cover');
const coverImg = document.getElementById('cover-img');

for (let i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click",
    function() {
      li_elements.forEach(function(li) {
        li.classList.remove("active");
      });
      this.classList.add("active");
      var li_value = this.getAttribute("data-notes");
      item_elements.forEach(function(item) {
        item.style.display = "none";
      });

      if (li_value == "html-notes") {
        document.getElementById(li_value).style.display = "block";
        coverImg.style.display = "none";
        backCover.style.visibility = "visible";
        backCover.style.backgroundColor = "grey"
      } else if (li_value == "css-notes") {
        document.getElementById(li_value).style.display = "block";
        coverImg.style.display = "none";
        backCover.style.visibility = "visible";
        backCover.style.backgroundColor = "grey"
      } else if (li_value == "js-notes") {
        document.getElementById(li_value).style.display = "block";
        coverImg.style.display = "none";
        backCover.style.visibility = "visible";
        backCover.style.backgroundColor = "white"
      } else if (li_value == "back-cover-open") {
        coverImg.style.display = "block";
        backCover.style.backgroundColor = "transparent";
     } else {}
    });
}

// const links = document.querySelectorAll('.links')
// const coverBack = document.getElementById('cover-back');
// const blackCol = document.getElementById('black-col');

// const html_link= document.getElementById('html-link');
// const css_link = document.getElementById('css-link');
// const javascript_link = document.getElementById('js-link');
// const cover = document.getElementById('cover-img');

// const html_notes = document.getElementById('html-notes');
// const css_notes = document.getElementById('css-notes');
// const js_notes = document.getElementById('js-notes');

// html_link.onclick = function() {
//     html_notes.style.display = "block";
//     cover.style.display = "none";
//     css_notes.style.display = "none";
//     js_notes.style.display = "none";
//     coverBack.style.backgroundColor = "white";
//     blackCol.style.backgroundColor = "red";
// }

// css_link.onclick = function() {
//     css_notes.style.display = "block";
//     cover.style.display = "none";
//     html_notes.style.display = "none";
//     js_notes.style.display = "none";
//     coverBack.style.backgroundColor = "white";
//     blackCol.style.backgroundColor = "red";
// }

// javascript_link.onclick = () => {
//     js_notes.style.display = "block";
//     cover.style.display = "none";
//     html_notes.style.display = "none";
//     css_notes.style.display = "none";
//     coverBack.style.backgroundColor = "white";
//     blackCol.style.backgroundColor = "red";
// }


// document.querySelectorAll() does not return an array, but a NodeList object.

// Event Listener Syntax...
// element.addEventListener(event, function, useCapture);

// const links = document.querySelectorAll('.links');
// const notes = document.querySelectorAll('.notes');

// for (const link of links) {
//   link.onclick = function (e) {
//     e.preventDefault();
//     for (const note of notes) {
//       if (note.id == link.dataset.notes) {
//         note.style.display = "block";
//         cover.style.display = "none";
//         coverBack.style.backgroundColor = "white";
//         blackCol.style.backgroundColor = "lightgrey";
//       } else {
//         note.style.display = "none";
//       }
//     }
//   }
// }


// lined paper
// background(255, 255, 247);
// const stroke = document.querySelectorAll('.notes');

// stroke(173, 222, 237);

// for (var i = 0; i< 20; i++) {
//     var lineY = 20 + (i*20);
//     line(0, lineY, 400, lineY);
// }


// function hideBackCover() {
//   const backCover = document.getElementById('cover-back')
//   backCover.style.visibility = "hidden"

//   const notes = document.querySelectorAll('.notes');
//   for (const note of notes) {
//     note.style.visibility = "hidden"
//   }

//   blackCol.style.backgroundColor = "hsl(250, 15%, 8%)";
// }

// function myFunction() {
//   var x = document.getElementById("cover-back");
//   x.style.visibility = "hidden";

//   if (x.style.visibility === "hidden") {
//     x.style.visibility = "visible";

//   } else {
//     x.style.visibility  = "hidden";
//   }
// }


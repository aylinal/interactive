var red = 0;
var blue = 0;
var green = 0;

document.body.onkeydown = function(keypress_event){
  var key = keypress_event.key;
document.getElementById ("key_display").innerHTML = key;
 var new_element = document.createElement("h1")
new_element.innerHTML=key;

new_element.classList.add("xl-type");
document.body.appendChild(new_element)

  if (key == "r") {
    document.body.style.backgroundColor = "#ea3c12";
  } else if (key == "a") {
    document.body.style.backgroundColor = "#f8db5e";
  } else if (key == "b") {
    document.body.style.backgroundColor = "#b25d72";
  }else if (key == "c") {
    document.body.style.backgroundColor = "#004440";
  }else if (key == "d") {
    document.body.style.backgroundColor = "#774d54";
  }else if (key == "e") {
    document.body.style.backgroundColor = "#2e93a1";
  }else if (key == "f") {
    document.body.style.backgroundColor = "#c9a2bf";
  }else if (key == "g") {
    document.body.style.backgroundColor = "#5c9665";
  }else if (key == "h") {
    document.body.style.backgroundColor = "#004440";
  }else if (key == "i") {
    document.body.style.backgroundColor = "#ffffcc";
  }else if (key == "j") {
    document.body.style.backgroundColor = "#ea7fe0";
  }else if (key == "k") {
    document.body.style.backgroundColor = "#fff861";
  }else if (key == "v") {
    document.body.style.backgroundColor = "#eee5d3";
  }else if (key == "l") {
    document.body.style.backgroundColor = "#f3daff";
  }else if (key == "m") {
    document.body.style.backgroundColor = "#ee5727";
  }else if (key == "n") {
    document.body.style.backgroundColor = "#ede9e9 ";
  }else if (key == "o") {
    document.body.style.backgroundColor = "olive";
  }else if (key == "p") {
    document.body.style.backgroundColor = "doe";
  }else if (key == "q") {
    document.body.style.backgroundColor = "puce";
  }else if (key == "r") {
    document.body.style.backgroundColor = "garnet";
  }else if (key == "s") {
    document.body.style.backgroundColor = "silver";
  }else if (key == "u") {
    document.body.style.backgroundColor = "green";
  }else if (key == "t") {
    document.body.style.backgroundColor = "grape";
  }else if (key == "w") {
    document.body.style.backgroundColor = "indigo";
  }else if (key == "x") {
    document.body.style.backgroundColor = "black";
  }


  else {
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
  }
};

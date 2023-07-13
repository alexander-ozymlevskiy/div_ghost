const input = document.getElementById("input");
const div = document.getElementById("divGhost");

input.onfocus = function() {
    div.style.display = "block";
  };
  
  input.onblur = function() {
    div.style.display = "none";
  };
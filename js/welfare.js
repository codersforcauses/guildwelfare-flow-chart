var q5_choice = "";
window.onscroll = function() {scrollFunction()};


function smoothScroll(parent) {
  var id = document.getElementById(parent);
  if(parent.startsWith('q')==true){
    parent = parent + "_div";
    var id_div = document.getElementById(parent);
    id_div.style.display = 'block';
  }
  zenscroll.to(id);
}

function changeColor(id_name) {
  var id = document.getElementById(id_name);
  id.style.backgroundColor = "var(--Yellow)"
}

function function_q5(choice){
  q5_choice = choice;
  smoothScroll('q6');
}

function function_q6(choice){
  var id_name= "";
  if (choice=="Off-campus"){
    id_name = "off_"+ q5_choice;
  }
  else{
    id_name = "on_" + q5_choice;
  }
  smoothScroll(id_name);
}

// Scroll Up Part
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

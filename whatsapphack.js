
while (1)
{


document.getElementsByClassName("input")[1].innerHTML="Tanishk!!! This message was written via JS script! ";

var input = document.getElementsByClassName("icon btn-icon icon-send");
input[0].click();

}

function pressKey() {
  var e = jQuery.Event("keypress");
  e.which = 32; // # space
  $(".input").trigger(e);
}
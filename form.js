var first_name=document.getElementById("first_name");
var last_name=document.getElementById("last_name");
var e_mail=document.getElementById("e_mail");



document.getElementById("sub1").addEventListener("click",displayThankYou);

function displayThankYou(){
  document.getElementById("name").innerHTML = "Thanks!" +" " + first_name.value + " " + last_name.value + " " + e_mail.value;
} 

document.getElementById("sub2").addEventListener("click",displayGreatAge)

function displayGreatAge(){
  document.getElementById("age").innerHTML = "Great Age";

}
document.getElementById("sub3").addEventListener("click",displayGreatHobby)

function displayGreatHobby(){
  document.getElementById("hobby").innerHTML = "Great Hobby!";

}
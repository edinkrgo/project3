
const toTop = document.querySelector('.to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
});

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

const skills = ["Quick problem solver", "Team leader", "Good communicator", "Social media manager"];
let n = skills.length;
let text = "<ul>";
for (let i = 0; i < n; i++) {
  text += "<li>" + skills[i] + "</li>";
}
text += "</ul>";
document.getElementById("array").innerHTML = text;


function myFunction() {
  var text;
  var proglang = document.getElementById("Input").value;

  switch(proglang) {
    case "C++":
    text = "C++ is Edins favorite programming language";
    break;
    case "Java":
    text = "Edin loves Java and is excellent at Java";
    break;
    case "Python":
    text = "Edin is a begginer at Python";
    break;
    case "C#":
    text = "Edin is okay with C#";
    break;
    case "HTML":
    text = "Edin is pretty good at HTML";
    break;
    default:
    text = "Edin does not have knowledge in this programming language";
  }
  document.getElementById("proglang").innerHTML = text;

}

$(document).ready(function(){
$("button.b").click(function(){
$("img.MyPicture").fadeOut(500);
});
$("button.b").click(function(){
  $("img.MyPicture").fadeIn(1000);
  });
});


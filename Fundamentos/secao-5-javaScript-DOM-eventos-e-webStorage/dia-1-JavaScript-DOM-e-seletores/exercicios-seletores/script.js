const header = document.getElementById("header-container");

const section1 = document.getElementsByClassName("emergency-tasks");

const section2 = document.getElementsByClassName("no-emergency-tasks");

const h3Emergency = document.querySelectorAll('.emergency-tasks div h3');

const h3NoEmergency = document.querySelectorAll('.no-emergency-tasks div h3');

const footer = document.getElementById("footer-container");


header.style.backgroundColor = 'rgb(0, 176, 105)';
section1[0].style.backgroundColor = 'rgb(255, 159, 132)';
section2[0].style.backgroundColor = 'rgb(249, 219, 94)';
h3Emergency[0].style.backgroundColor = 'rgb(165, 0, 243)';
h3Emergency[1].style.backgroundColor = 'rgb(165, 0, 243)';
h3NoEmergency[0].style.backgroundColor = 'rgb(35, 37, 37)';
h3NoEmergency[1].style.backgroundColor = 'rgb(35, 37, 37)';
footer.style.backgroundColor = "rgb(0, 53, 51)";
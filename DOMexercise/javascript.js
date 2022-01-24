var p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.cssText = "color:red";
document.body.appendChild(p);


let acheTrois = document.createElement('h3');
acheTrois.innerHTML = "I'm a blue h3!";
acheTrois.style.cssText = "color:blue";
document.body.appendChild(acheTrois);

let container = document.createElement('div');
document.body.appendChild(container);
container.className = "container";
container.style.cssText = "border:1px solid black;background-color:pink";


let title = document.createElement('h1');
container.appendChild(title);
title.innerHTML = "I'm in a div";

let meeToo = document.createElement('p');
meeToo.innerHTML = "ME TOO!";
container.appendChild(meeToo);


const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

  
  const buttons = document.querySelectorAll('button');

  // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {
  
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      alert(button.id);
    });
  });


const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';

container.appendChild(content);
const para = document.createElement('p');
para.classList.add('red');
para.textContent = "Hey I'am red!";
para.style.color = "red";

container.appendChild(para);

const blueHeader = document.createElement('h3');
blueHeader.classList.add('blue');
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";
container.appendChild(blueHeader);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World!");
});
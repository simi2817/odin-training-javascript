
const container = document.querySelector('#container');

const content1 = document.createElement('div');
content1.classList.add('content1');
content1.textContent = 'This is the glorious text-content!';
container.appendChild(content1);

const paraContent = document.createElement('p');
paraContent.classList.add('paraContent');
paraContent.style.color = 'red';
paraContent.textContent = 'Hey I\'m red!';
container.appendChild(paraContent);

const headerContent = document.createElement('h3');
headerContent.classList.add('headerContent');
headerContent.style.color = 'blue';
headerContent.textContent = 'I\'m a blue h3!';
container.appendChild(headerContent);
 
const content2 = document.createElement('div');
content2.classList.add('content2');
content2.style.border = 'solid black';
content2.style.backgroundColor = 'pink';

const h1Content = document.createElement('h1');
h1Content.textContent = "I\'m in a div!";
content2.append(h1Content);

const pContent = document.createElement('p');
pContent.textContent = "ME TOO!";
content2.append(pContent);

container.appendChild(content2);

function alertFunction() {
    alert('YAY! You did it!');
}

const button = document.querySelector("#button");
button.addEventListener('click', function(e) {
    e.target.style.backgroundColor = 'blue';
});

var btnElement = document.querySelector('button.btnSquare');

btnElement.onclick = function addSquare(){
    let linkElement = document.createElement("div");
    linkElement.style.width = '100px';
    linkElement.style.height = '100px';
    linkElement.style.margin = '10px';
    linkElement.style.backgroundColor = '#f00';


    linkElement.classList.add('square');
    document.body.appendChild(linkElement);
}


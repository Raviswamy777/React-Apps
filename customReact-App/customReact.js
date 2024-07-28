function myCustomReact(reactElement, container){
    var domElement = document.createElement(reactElement.type);
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    domElement.innerHTML = reactElement.childeren;
    container.appendChild(domElement);
}

let reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    childeren:"Hello Click me fo google"
}

var container = document.querySelector("#root");
myCustomReact(reactElement, container)
function customRender (reactElement , container){
   /* const DOMElement = document.createElement(reactElement.type)
    DOMElement.innerHTML = reactElement.children
    DOMElement.setAttribute('href', reactElement.props.href)
    DOMElement.setAttribute('target' , reactElement.props.target)
    container.appendChild(DOMElement)*/

    const DOMElement = document.createElement(reactElement.type)
    DOMElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        DOMElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(DOMElement)
}


const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target :'_blank'
    },
    children : 'click me to visit google'
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)
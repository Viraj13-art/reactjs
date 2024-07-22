function customRender(reactElement, container){
    /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setattribute('href', reactElement.props.href)
    domElement.setattribute('target', reactElement.props.target)
    container.appendchild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
    if(prop=='children') continue;
    domElement.setattribute(prop, reactElement.props[prop])
   }
   container.appendchild(domElement)
}
const reactElement = {
    type:'a',
    props: {
        href:'http://google.com',
        target:'_blank'
    },
    children:'click me to visit to google'
}
const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)
const dropDownMenu = (title, parent, displayMode) => {
    
    const dropDownMenu = parent
    dropDownMenu.classList.add('dropdown-menu')

    const menuHeader = document.createElement('button')
    menuHeader.classList.add('dropdown-header')
    menuHeader.textContent = title
    dropDownMenu.appendChild(menuHeader)

    const elementsContainer = document.createElement('ul')
    dropDownMenu.appendChild(elementsContainer)

    const elements = elementsContainer.childNodes

    switch (displayMode) {
        case 'click':
            menuHeader.addEventListener('click', (e) => {
                for ( let i = 0 ; i < elements.length ; i++) {
                    toggleVisible(elements[i])
                }
            elementsContainer.addEventListener('click', (e) => {
                e.stopPropagation()
            })
            });
            break;
        case 'hover':
            dropDownMenu.addEventListener('mouseover', () => {
                for ( let i = 0 ; i < elements.length ; i++) {
                    addVisible(elements[i])
                }
            })
            dropDownMenu.addEventListener('mouseout', () => {
                for ( let i = 0 ; i < elements.length ; i++) {
                    removeVisible(elements[i])
                }
            })
            break;
        default:
            dropDownMenu.addEventListener('mouseover', () => {
                for ( let i = 0 ; i < elements.length ; i++) {
                    addVisible(elements[i])
                }
            })
            dropDownMenu.addEventListener('mouseout', () => {
                for ( let i = 0 ; i < elements.length ; i++) {
                    removeVisible(elements[i])
                }
            })
            break;
    }
  
    function addVisible(el) {
        el.classList.add('visible')
    }
    
    function removeVisible(el) {
        el.classList.remove('visible')
    }

    function toggleVisible(el) {
        el.classList.toggle('visible')
    }

    function newElement(text, callbackFunction) {
        const el = document.createElement('li')
        el.textContent = text
        el.addEventListener('click', callbackFunction)
        elementsContainer.appendChild(el)
    }

    function removeElement(element) {
        elementsContainer.removeChild(element)
    }

    return {
        newElement,
        removeElement
    }

}

const dropDownMenuFromHtml = (menuElement, displayMode) => {
    
    const dropDownMenu = menuElement
    dropDownMenu.classList.add('dropdown-menu')

    const menuHeader = dropDownMenu.children[0]
    menuHeader.classList.add('dropdown-header')

    const elementsContainer = dropDownMenu.children[1]

    const elements = elementsContainer.children

    switch (displayMode) {
        case 'click':
            menuHeader.addEventListener('click', (e) => {
                for ( let i = 0 ; i < elements.length ; i++) {
                    toggleVisible(elements[i])
                    console.log(e.target)
                }
            elementsContainer.addEventListener('click', (e) => {
                e.stopPropagation()
            })
            });
            break;
        case 'hover':
            dropDownMenu.addEventListener('mouseover', () => {
                for ( let i = 0 ; i < elements.length ; i++) {
                    addVisible(elements[i])
                }
            })
            dropDownMenu.addEventListener('mouseout', () => {
                for ( let i = 0 ; i < elements.length ; i++) {
                    removeVisible(elements[i])
                }
            })
            break;
        default:
            dropDownMenu.addEventListener('mouseover', () => {
                for ( let i = 0 ; i < elements.length ; i++) {
                    addVisible(elements[i])
                }
            })
            dropDownMenu.addEventListener('mouseout', () => {
                for ( let i = 0 ; i < elements.length ; i++) {
                    removeVisible(elements[i])
                }
            })
            break;
    }
  
    function addVisible(el) {
        el.classList.add('visible')
    }
    
    function removeVisible(el) {
        el.classList.remove('visible')
    }

    function toggleVisible(el) {
        el.classList.toggle('visible')
    }
}


export {
    dropDownMenu,
    dropDownMenuFromHtml
}
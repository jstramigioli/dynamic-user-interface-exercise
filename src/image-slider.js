const imageSlider = (hostElement) => {
    const container = hostElement
    container.classList.add('img-slider-container')

    const frame = document.createElement('div')
    frame.classList.add('img-frame')
    container.appendChild(frame)

    const allImg = document.createElement('div')
    allImg.classList.add('all-img')
    frame.appendChild(allImg)

    const prevBtn = document.createElement('button')
    prevBtn.classList.add('prev-btn')
    prevBtn.addEventListener('click', prev)
    frame.appendChild(prevBtn)

    const nextBtn = document.createElement('button')
    nextBtn.classList.add('next-btn')
    nextBtn.addEventListener('click', next)
    frame.appendChild(nextBtn)

    const circlesContainer = document.createElement('div')
    circlesContainer.classList.add('circles-container')
    frame.appendChild(circlesContainer)

    function addImage(imgUrl, imgAlt) {
        const img = document.createElement('img')
        img.src = imgUrl
        img.alt = imgAlt
        allImg.appendChild(img)

        const imgCircle = document.createElement('button')
        imgCircle.classList.add('circle-slider')
        imgCircle.addEventListener('click', () => {
            selectImage(img)
        })
        circlesContainer.appendChild(imgCircle)

        return img
    }

    function updateCircles() {
        for (let i = 0 ; i < circlesContainer.children.length ; i++) {
            
            if (i == getSelectedImgIndex()) {
                circlesContainer.children[i].classList.add('selected') 
            }
            else if (circlesContainer.children[i].classList.contains('selected')) {
                circlesContainer.children[i].classList.remove('selected')
            }
        }
    }

    function selectImage(img) {
        unselectAll()
        if (img.classList.contains('right')) {
            img.classList.remove('right')
        }
        if (img.classList.contains('left')) {
            img.classList.remove('left')
        }
        img.classList.add('selected')
        updateCircles()
        sortRest()
    }

    function getSelectedImg() {
        for (let i = 0 ; i < allImg.children.length ; i++) {
            if (allImg.children[i].classList.contains('selected')) {
                return allImg.children[i]
            }
        }
    }

    function getSelectedImgIndex() {
        for (let i = 0 ; i < allImg.children.length ; i++) {
            if (allImg.children[i].classList.contains('selected')) {
                return i
            }
        }
    }

    function unselectAll() {
        for (let i = 0 ; i < allImg.children.length ; i++) {
            if (allImg.children[i].classList.contains('selected')) {
                allImg.children[i].classList.remove('selected')
            }
        }
    }

    function sortRest() {
        for (let i = 0 ; i < allImg.children.length ; i++) {
            if (i < getSelectedImgIndex()) {
                if (allImg.children[i].classList.contains('right')) {
                    allImg.children[i].classList.remove('right')
                }
                allImg.children[i].classList.add('left')
            }
            else if (i > getSelectedImgIndex()) {
                if (allImg.children[i].classList.contains('left')) {
                    allImg.children[i].classList.remove('left')
                }
                allImg.children[i].classList.add('right')
            }
        }  
    }


    function next() {
        if (getSelectedImgIndex() < allImg.children.length - 1) {
            selectImage(allImg.children[getSelectedImgIndex() + 1])
        }
        else {
            selectImage(allImg.children[0])
            allImg.children[0].classList.add('first')
            allImg.children[allImg.children.length - 1].classList.add('last')
        }
    }

    function prev() {
        if (getSelectedImgIndex() > 0) {
            selectImage(allImg.children[getSelectedImgIndex() - 1])
        }
        else {
            selectImage(allImg.children[allImg.children.length - 1])
            allImg.children[0].classList.add('first')
            allImg.children[allImg.children.length - 1].classList.add('last')
        }
    }

    function enableAutoSlide() {
        setInterval(next, 5000)
    }

    return {
        addImage,
        selectImage,
        enableAutoSlide
    }
}

export {imageSlider}
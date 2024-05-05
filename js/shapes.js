let current = 0;

const shapes = [
    "plus",
    "minus",
    "times",
    "divide",
    "integral",
    "root"
]

const animations = [
    "rotating",
    "rotating2"
]

function start() {
    setInterval(() => {
        const odd = Math.floor(Math.random() * 2) === 0

        const shape = document.createElement("div")
        shape.classList.add("shape")
        document.body.insertBefore(shape, document.body.firstChild)

        const img = document.createElement("img")
        const animation = animations[Math.floor(Math.random() * animations.length)]
        img.src = `/assets/shapes/${getTheme()}/${shapes[current]}.svg`
        img.style.animation = `${animation} 2s linear infinite`
        shape.appendChild(img)

        let id = null;
        const maxX = window.outerWidth + shape.offsetWidth
        const maxY = window.outerHeight + shape.offsetHeight

        let x, y

        if (odd) {
            x = -shape.offsetWidth
            y = Math.floor(Math.random() * maxY)
        } else {
            x = Math.floor(Math.random() * maxX)
            y = -shape.offsetHeight
        }

        const initX = x, initY = y

        shape.style.left = x + 'px'
        shape.style.top = y + 'px'

        id = setInterval(frame, Math.floor(Math.random() * 2) + 1);
        function frame() {
            if (x >= maxX || x < -shape.offsetWidth || y >= maxY || y < -shape.offsetHeight) {
                clearInterval(id);
                shape.remove()
            } else {
                if (initY < maxY / 2 || initX < maxX / 2) {
                    x++
                    y++
                } else {
                    x--
                    y--
                }

                shape.style.left = x + 'px'
                shape.style.top = y + 'px'
            }
        }

        current = (current + 1) % shapes.length
    }, 2000)
}
start()
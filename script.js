const container = document.querySelector('.container')

for(let i = 0; i < 16; i++)
{
    for(let j = 0; j < 16; j++)
    {
        let div = document.createElement('div')
        div.classList.add('pixel')
        container.appendChild(div)
    }
}

const pixels = document.querySelectorAll('.pixel')
console.log(pixels)
pixels.forEach((pixel)=>{

    pixel.addEventListener("mouseover" , () => {
        pixel.style.backgroundColor = 'red' 
    })
})

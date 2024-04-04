const images = document.querySelectorAll('.image')
const texts = document.querySelectorAll('.text')
const icons = document.querySelectorAll('.hero_icon')


const imgObserver = new IntersectionObserver((entries) =>{
     entries.forEach( (entry) => {
          if(entry.isIntersecting) {
               entry.target.classList.add('show_img')
               icons.forEach( (icon) => {
                    if(icon.classList[1] == entry.target.id){
                         icon.classList.add('shiny')
                    }
               })
          } else {
               entry.target.classList.remove('show_img')
               icons.forEach( (icon) => {
                    if(icon.classList[1] == entry.target.id){
                         icon.classList.remove('shiny')
                    }
               })
          }
     })
})
const textObserver = new IntersectionObserver((entries) =>{
     entries.forEach( (entry) => {
          if(entry.isIntersecting) {
               entry.target.classList.add('show_text')
          } else {
               entry.target.classList.remove('show_text')
          }
     })
})

images.forEach((image) => imgObserver.observe(image))
texts.forEach((text) => textObserver.observe(text))
const faWindowClose = document.querySelectorAll('.fa')

const pubWrapper = document.querySelector('.pub-wrapper')

faWindowClose[0].addEventListener('click', e => {
    e.preventDefault()
    pubWrapper.classList.remove('close')
})

faWindowClose[1].addEventListener('click', e => {
    e.preventDefault()
    pubWrapper.classList.add('close')
})

/*=============== MIXITUP FILTER ===============*/
let mixerPets = mixitup('.pets__cards', {
  selectors: {
    target: '.pet__card'
  },
  animation: {
    duration: 300
  }
});

/* Link active work */
const linkPets = document.querySelectorAll('.pets__item')

function activePet() {
  linkPets.forEach(l => l.classList.remove('active-section'))
  this.classList.add('active-section')
}

linkPets.forEach(l=> l.addEventListener('click', activePet))

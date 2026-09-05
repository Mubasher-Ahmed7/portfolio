// --- Hamburger menu ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

if (hamMenuBtn) {
  hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
      smallMenu.classList.remove('header__sm-menu--active')
    } else {
      smallMenu.classList.add('header__sm-menu--active')
    }
    if (headerHamMenuBtn.classList.contains('d-none')) {
      headerHamMenuBtn.classList.remove('d-none')
      headerHamMenuCloseBtn.classList.add('d-none')
    } else {
      headerHamMenuBtn.classList.add('d-none')
      headerHamMenuCloseBtn.classList.remove('d-none')
    }
  })
}

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// --- Logo click returns home ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

if (headerLogoConatiner) {
  headerLogoConatiner.addEventListener('click', () => {
    location.href = 'index.html'
  })
}

// --- Contact form (EmailJS) ---
const contactForm = document.getElementById('contact-form')
const formStatus = document.getElementById('form-status')

const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = window.EMAILJS_CONFIG || {}
if (!SERVICE_ID) console.error('EmailJS config missing - check config.js')

if (contactForm && typeof emailjs !== 'undefined') {
  emailjs.init(PUBLIC_KEY)

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const templateParams = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      message: contactForm.message.value,
    }

    formStatus.textContent = 'Sending...'
    formStatus.className = 'contact__form-status contact__form-status--sending'

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        formStatus.textContent = 'Success! Your message has been sent. I will get back to you soon.'
        formStatus.className = 'contact__form-status contact__form-status--success'
        contactForm.reset()
      })
      .catch(() => {
        formStatus.textContent =
          'Something went wrong. Please email me directly at mubasherahmed131@gmail.com.'
        formStatus.className = 'contact__form-status contact__form-status--error'
      })
  })
}
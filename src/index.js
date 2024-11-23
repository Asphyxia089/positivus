function toggleAccordion(element) {
	const item = element.parentNode
	const content = item.querySelector('.qablock__accordion-content')
	const icon = item.querySelector('.qablock__icon')

	if (item.classList.contains('active')) {
		item.classList.remove('active')
		icon.src = './img/plusicon.png'
	} else {
		document.querySelectorAll('.accordion-item').forEach(i => {
			i.classList.remove('active')
			i.querySelector('.qablock__icon').src = './img/plusicon.png'
		})

		setTimeout(() => {
			item.classList.add('active')
			icon.src = './img/minusicon.png'
		}, 10)
	}
}

const iconMenu = document.querySelector('.icon-menu')
const menuBody = document.querySelector('.menu__body')
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLinks => {
		menuLinks.addEventListener('click', onMenuLinkClick)
	})
	function onMenuLinkClick(e) {
		const menuLink = e.target
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				scrollY -
				document.querySelector('header').offsetHeight

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock')
				iconMenu.classList.remove('_active')
				menuBody.classList.remove('_active')
			}
			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			})
			e.preventDefault()
		}
	}
}
if (window.innerWidth <= 1051) {
	const slider = document.querySelector('.studiesblock__body')
	let isTouching = false
	let startX = 0
	let scrollLeft = 0

	slider.addEventListener('touchstart', e => {
		isTouching = true
		startX = e.touches[0].pageX
		scrollLeft = slider.scrollLeft
	})

	slider.addEventListener('touchmove', e => {
		if (!isTouching) return

		const moveX = e.touches[0].pageX
		const diffX = startX - moveX
		slider.scrollLeft = scrollLeft + diffX // Прокручиваем слайдер
	})

	slider.addEventListener('touchend', () => {
		isTouching = false
	})
}

const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			var bulletSVGs = [
				'<path d="M11.0099 2.05941L18 0L15.9604 7.0099L18 14L11.0099 11.9604L4 14L6.05941 7.0099L4 0L11.0099 2.05941Z" fill="white"/>',
				'<path d="M11.0099 2.05941L18 0L15.9604 7.0099L18 14L11.0099 11.9604L4 14L6.05941 7.0099L4 0L11.0099 2.05941Z" fill="white"/>',
				'<path d="M11.0099 2.05941L18 0L15.9604 7.0099L18 14L11.0099 11.9604L4 14L6.05941 7.0099L4 0L11.0099 2.05941Z" fill="white"/>',
			]
			return (
				'<span class="' +
				className +
				'">' +
				'<svg width="20" height="20">' +
				bulletSVGs[index] +
				'</svg>' +
				'</span>'
			)
		},
	},
})

/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Перечень слайдеров
// Проверяем, есть ли слайдер на стронице
if (document.querySelector('.main-home__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.main-home__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,

		/*
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/

		// Пагинация
		pagination: {
			el: '.main-home__pagination',
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.main-home__arrow-prev',
			nextEl: '.main-home__arrow-next',
		},

		// Брейкпоинты
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		// События
		on: {
		},
	});
}

document.querySelectorAll('.page__product-card').forEach(n => {
	let thumbsSwiper = new Swiper(n.querySelector('.images-product__thumbs'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Thumbs],
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 13,
		direction: 'vertical',
		speed: 800,
		allowTouchMove: true,
		preloadImages: true,
		//loop: true,
		//lazy: true,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.images-product__arrow-prev'),
			nextEl: n.querySelector('.images-product__arrow-next'),
		},
		// Пагинация
		pagination: {
			el: n.querySelector('.images-product__pagination'),
			clickable: true,
		},
		// Брейкпоинты
		breakpoints: {
			0: {
				direction: 'horizontal',
			},
			991.98: {
				direction: 'vertical',
			},
		},
		on: {
		}
	});
	let mainThumbsSwiper = new Swiper(n.querySelector('.images-product__slider'), {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Thumbs],
		thumbs: {
			swiper: thumbsSwiper
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 2,
		speed: 800,
		watchSlidesProgress: true,
		allowTouchMove: true,
		preloadImages: true,
		direction: 'horizontal',
		//loop: true,
		//lazy: true,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: n.querySelector('.images-product__arrow-prev'),
			nextEl: n.querySelector('.images-product__arrow-next'),
		},
		// Пагинация
		pagination: {
			el: n.querySelector('.images-product__pagination'),
			clickable: true,
		},
	});
});

let thumbsSwiper = new Swiper('.images-product__thumbs', {
	// Подключаем модули слайдера
	// для конкретного случая
	modules: [Navigation, Pagination, Thumbs],
	observer: true,
	observeParents: true,
	slidesPerView: 4,
	spaceBetween: 13,
	direction: 'vertical',
	speed: 800,
	allowTouchMove: true,
	preloadImages: true,
	//loop: true,
	//lazy: true,
	// Кнопки "влево/вправо"
	navigation: {
		prevEl: '.images-product__arrow-prev',
		nextEl: '.images-product__arrow-next',
	},
	// Пагинация
	pagination: {
		el: '.images-product__pagination',
		clickable: true,
	},
	// Брейкпоинты
	breakpoints: {
		0: {
			direction: 'horizontal',
		},
		991.98: {
			direction: 'vertical',
		},
	},
	on: {
	}
});
let mainThumbsSwiper = new Swiper('.images-product__slider', {
	// Подключаем модули слайдера
	// для конкретного случая
	modules: [Navigation, Pagination, Thumbs],
	thumbs: {
		swiper: thumbsSwiper
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 2,
	speed: 800,
	watchSlidesProgress: true,
	allowTouchMove: true,
	preloadImages: true,
	direction: 'horizontal',
	//loop: true,
	//lazy: true,
	// Кнопки "влево/вправо"
	navigation: {
		prevEl: '.images-product__arrow-prev',
		nextEl: '.images-product__arrow-next',
	},
	// Пагинация
	pagination: {
		el: '.images-product__pagination',
		clickable: true,
	},
});

if (document.querySelector('.images-materials ')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.images-materials ', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 2,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,

		/*
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/

		// Пагинация
		pagination: {
			el: '.materials-product-card__pagination',
			clickable: true,
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			450: {
				slidesPerView: 2,
				spaceBetween: 0,
				autoHeight: true,
			},
			767.98: {
				slidesPerView: 3,
			},
			991.98: {
				slidesPerView: 2,
			},
		},

		// События
		on: {
		},
	});
}

if (document.querySelector('.videos__slider ')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.videos__slider ', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 2,
		spaceBetween: 40,
		autoHeight: true,
		speed: 800,

		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//preloadImages: false,
		//lazy: true,

		/*
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/

		// Пагинация
		pagination: {
			el: '.videos__pagination',
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.videos__arrow-prev',
			nextEl: '.videos__arrow-next',
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1.1,
				spaceBetween: 15,
				autoHeight: true,
			},
			479.98: {
				slidesPerView: 1.1,
				autoHeight: true,
				spaceBetween: 15,
			},
			767.98: {
				slidesPerView: 2.1,
				spaceBetween: 20,
			},
			991.98: {
				slidesPerView: 2.1,
				spaceBetween: 20,
			},
			1300: {
				slidesPerView: 2,
			},
		},

		// События
		on: {
		},
	});
}
//скролл
function scroll() {

    let scrolls = document.querySelectorAll('.scroll');

    if (scrolls) {

        let speed = 2; // Скорость скролла.
        let left = 0;
        let top = 0;
        let drag = false;
        let coorX = 0;
        let coorY = 0;

        scrolls.forEach(scroll => {
            scroll.addEventListener('mousedown', function (e) {
                drag = true;
                coorX = e.pageX;
                coorY = e.pageY;
            });
            document.addEventListener('mouseup', function () {
                drag = false;
                left = scroll.scrollLeft;
                top = scroll.scrollTop;
            });
            scroll.addEventListener('mousemove', function (e) {
                if (drag) {
                    this.scrollLeft = left - (e.pageX - coorX) * speed;
                    this.scrollTop = top - (e.pageY - coorY) * speed;
                }
            });
        });

    }

};

scroll()

//========================================================================================================================================================

//избранное
const catalogFavourites = document.querySelectorAll('.catalog__favorites');

if (catalogFavourites) {
    catalogFavourites.forEach(item => {
        item.addEventListener("click", function (e) {
            item.classList.toggle("_active")
        });
    });
}

//========================================================================================================================================================

//фильтр

const catalogFilter = document.querySelectorAll('.filter-catalog__icons');

if (catalogFilter) {
    const catalogFilterBody = document.querySelector('.filter-catalog__body');
    const catalogFilterClose = document.querySelector('.filter-catalog__close');
    catalogFilter.forEach(item => {
        item.addEventListener("click", function (e) {
            catalogFilterBody.classList.toggle("_active")
            item.classList.toggle("_active")
        });
        catalogFilterClose.addEventListener("click", function (e) {
            catalogFilterBody.classList.remove("_active")
            item.classList.remove("_active")
        });
    });
}

//========================================================================================================================================================

//меню
const menuButtons = document.querySelectorAll('.menu__list');

if (menuButtons) {
    const menuItem = document.querySelectorAll('.menu__item');
    menuButtons.forEach(button => {
        button.addEventListener("mouseenter", function (e) {
            button.classList.add("_active");
        });
        button.addEventListener("mouseleave", function (e) {
            button.classList.remove("_active");
        });
    });
    menuItem.forEach(item => {
        item.addEventListener("mouseenter", function (e) {
            item.classList.add("_active");
        });
        item.addEventListener("mouseleave", function (e) {
            item.classList.remove("_active");
        });
    });
}

//========================================================================================================================================================

//Видео
const myVideos = document.querySelectorAll('.images-product__video-item');
if (myVideos) {
    myVideos.forEach(myVideo => {
        myVideo.addEventListener('click', function (e) {
            let parent = e.target.parentNode

            if (parent.classList.contains('_active')) {
                parent.classList.remove('_active')
            } else {
                parent.classList.add('_active')
            }
            if (myVideo.paused) {
                myVideo.play();
            } else {
                myVideo.pause();
            }
        });
    });

}

//========================================================================================================================================================


// Контейнер со всеми видео
const videosWrap = document.querySelector('.videos__body');

if (videosWrap) {
    // Обработчик клика
    const videoEventHandler = (e) => {
        if (!e.target.classList.contains('slide-video__item')) return false;
        const video = e.target,
            allVideos = document.querySelectorAll('.slide-video__item');

        const overlay = document.querySelectorAll('.slide-video__video-button');
        // Останавливаем все видео
        allVideos.forEach((source, index) => {
            if (source === video) return;
            source.classList.remove('isPlaying');
            source.pause();
            overlay[index].style.display = 'block';
        })
        // Если у видео есть класс isPlaying - тогда остановить его, если нет - запустить
        if (video.classList.contains('isPlaying')) {
            video.closest('div').querySelector('.slide-video__video-button').style.display = 'block';
            video.pause()
        } else {
            video.closest('div').querySelector('.slide-video__video-button').style.display = 'none';
            video.play()
        }
        video.classList.toggle('isPlaying')
    }

    // Event listener на контейнер со всеми видео
    videosWrap.addEventListener('click', (e) => videoEventHandler(e))
};

//========================================================================================================================================================

//Фильтр

let blogItems = document.querySelectorAll('.catalog__column');
if (blogItems.length > 0) {
    let blogFilters = document.querySelectorAll('.navigation-catalog__item');
    if (blogFilters.length > 0) {
        for (let index = 0; index < blogFilters.length; index++) {
            const blogFilter = blogFilters[index];
            blogFilter.addEventListener("click", function (e) {
                e.preventDefault();
                const blogFilterValue = blogFilter.dataset.filter;
                const blogFilterActive = document.querySelector('.navigation-catalog__item._active');
                blogFilterActive.classList.remove('_active');
                blogFilter.classList.add('_active');

                showBlogItems(blogFilterValue);
            });
        }
        function showBlogItems(filter) {
            for (let index = 0; index < blogItems.length; index++) {
                const blogItem = blogItems[index];
                if (filter === 'all' || !filter) {
                    blogItem.classList.remove('_hide');
                } else {
                    blogItem.classList.add('_hide');
                    if (blogItem.classList.contains('catalog__column_' + filter)) {
                        blogItem.classList.remove('_hide');
                    }
                }
            }
        }
    }
}
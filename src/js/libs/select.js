function select() {
	const optionMenus = document.querySelectorAll('.select__menu');

	optionMenus.forEach((optionMenu, i) => {
		const selectBtn = optionMenu.querySelector('.select__btn');
		const options = optionMenu.querySelectorAll('.select__option');
		const sBtntext = optionMenu.querySelector('.select__input');
		const optionMenusItem = optionMenus[i].closest(".select__menu");
		const selectTexts = optionMenusItem.querySelectorAll('.select__option-text');
		const filterRemoveAll = document.querySelector('.filter-catalog__remove');

		if (optionMenu) {
			selectBtn.addEventListener("click", function (e) {
				let elem_active = optionMenu.classList.contains("_active")
				optionMenus.forEach(opt => {
					opt.classList.remove('_active');
				})
				optionMenu.classList.toggle("_active", !elem_active)
			});
			options.forEach(option => {
				option.addEventListener("click", function (e) {
					if (e.target.classList.contains('.select__option-text') != null) {
						sBtntext.value = e.target.innerText;
					};
					options.forEach(el => { el.classList.remove('_active'); });
					option.classList.add("_active");
					optionMenu.classList.remove("_active")
				});
			});
			selectTexts.forEach(item => {
				item.addEventListener("click", (function (e) {
					item.classList.toggle("_active");
				}));
			});
			window.addEventListener('click', e => {
				const target = e.target
				if (!target.closest('.select__options') && !target.closest('.select__menu')) {
					optionMenu.classList.remove("_active")
				}
			})

			if (filterRemoveAll) {
				filterRemoveAll.addEventListener('click', function () {
					selectTexts.forEach(item => {
						item.classList.remove('_active')
					});
					selectCounts.textContent = 0;
					selectCounts.classList.remove('_active')
				});
			}

		}
	})
}

select()
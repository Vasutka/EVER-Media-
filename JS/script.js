const menuHeight = document.querySelector(".header-top").clientHeight;


document.querySelectorAll(".menu-element__link").forEach(element => {
    element.addEventListener("click", function (e) {
        e.preventDefault();

        
        if (hasClass(this, 'active')) {
            return;
        }

        const linkHref = this.getAttribute("href");
        const hrefElement = document.getElementById(linkHref.replace("#", ""));
        const paddingTop = parseInt(getComputedStyle(document.querySelector('#work')).paddingTop);
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: hrefElement.offsetTop - paddingTop - menuHeight
        });

        
        changeActiveMenuElement(this);
    });
});

/* Active link on scroll to section */
const options = {
    threshold: 0.3
}
const callback = function(entries) {
    entries.forEach(entry => {
        const sectionMenuLink = document.querySelector(`.menu-element__link[href='#${entry.target.id}']`);
        if (entry.isIntersecting && !hasClass(sectionMenuLink, 'active')) {
            changeActiveMenuElement(sectionMenuLink);
        }
    });
};
const observer = new IntersectionObserver(callback, options);
document.querySelectorAll(".observer-section").forEach(element => {
    observer.observe(element);
});

// Общие функции
/**
 * Меняет активный элемент в пунктах меню
 * @param element Ссылка в меню
 */
function changeActiveMenuElement(element) {
    document.querySelector(".menu-element__link.active").classList.remove('active');
    element.classList.add('active');
}

/**
 * Проверяет наличие класса у элемента
 * @param element
 * @param className
 */
function hasClass(element, className) {
    return element.classList.contains(className);
}




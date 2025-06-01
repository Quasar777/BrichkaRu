class HeaderOverlay {
    // Объект selectors - используем, чтобы в дальнейшем не обращаться к строкам напрямую 
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
    }

    // Классы состояний
    stateClasses = {
        isActive: "is-active",
        isLock: "is-lock",
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)

        if (!this.rootElement) {
            console.warn('HeaderOverlay: rootElement не найден!');
            return;
        }

        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.optionsInNavElements = this.rootElement.querySelectorAll(".header__menu-link")

        if (!this.overlayElement) {
            console.warn('HeaderOverlay: overlayElement не найден!');
        }

        if (!this.burgerButtonElement) {
            console.warn('HeaderOverlay: burgerButtonElement не найден!');
        }

        if (this.overlayElement && this.burgerButtonElement) {
            this.bindEvents();
        }

        
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    // Метод для привязки различных событий к DOM-элементам
    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)

        this.overlayElement.addEventListener("click", () => {
            this.onBurgerButtonClick();            
        });
    }
}

export default HeaderOverlay;
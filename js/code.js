class open {
    constructor(cards, exit, modal) {
        this.cards = document.querySelectorAll(cards)
        this.exit = document.querySelector(exit)
        this.modal = document.querySelector(modal)
    }

    OpenModal = () => {
        this.cards.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.modal.classList.add("active")
            })
        })
    }
    closeModal = () => {
        this.exit.addEventListener('click', () => {
            this.modal.classList.remove("active")
        })
    }

    init = () => {
        this.closeModal()
        this.OpenModal()

    }
}

const OpenCards = new open('.card_theme', ".close_modal", ".modal")
OpenCards.init()
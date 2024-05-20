class open {
    constructor(cards, exit, modal, title, contentModal) {
        this.cards = document.querySelectorAll(cards)
        this.exit = document.querySelector(exit)
        this.modal = document.querySelector(modal)
        this.title = document.querySelector(title)
        this.contentModal = document.querySelector(contentModal)
    }

    async insert(id) {
        const response = await fetch("../json/pesquisas.json")
        const pesquisas = await response.json()
        this.title.innerText = pesquisas.dados[id].title
        this.contentModal.innerText = pesquisas.dados[id].text
    }

    OpenModal = () => {
        this.cards.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.modal.classList.add("active")
                this.insert(index)
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

const OpenCards = new open('.card_theme', ".close_modal", ".modal", ".content_title_modal", ".content_text_modal")
OpenCards.init()
class responsive {
    constructor(links, header) {
        this.links = document.querySelectorAll(links)
    }
    justcallit = () => {
        console.log(this)
        console.log(this.links)
    }
    init = () => {
        this.justcallit()
    }

}
const headerResponsive = new responsive('.link')
headerResponsive.init()
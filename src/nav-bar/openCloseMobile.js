class OpenCloseMobileNav {
    static openNav(container) {
        // container.style.marginLeft = "50%";
        container.style.width = "100%";
    }
    static closeNav(container) {
        container.style.width = "0%";
    }
}

export default OpenCloseMobileNav;
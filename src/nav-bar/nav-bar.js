import { default as OpenCloseMobileNav } from './openCloseMobile';

class NavBar {
    constructor(navContainer, openNavBtns, addTaskBtns) {
        this.navContainer = navContainer;
        this.openNavBtns = openNavBtns;
        this.addTaskBtns = addTaskBtns;
        this.init();
    }
    init() {
        this.setOpenNavBtns(this.openNavBtns);
        this.setCloseNav(this.navContainer, this.addTaskBtns);
    }
    setOpenNavBtns(openNavBtns) {
        openNavBtns.forEach(element => {
            element.addEventListener('click', () => {
                OpenCloseMobileNav.openNav(this.navContainer);
            });
        });
    }
    setCloseNav(container, addTaskBtns) {
        addTaskBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                return false;
            })
        });
        container.addEventListener('click', (e) => {
            OpenCloseMobileNav.closeNav(this.navContainer);
            console.log('hi')
        });
    }
}

export default NavBar;
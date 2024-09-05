import { default as OpenCloseMobileNav } from './openCloseMobile';
import { default as AddTaskNav } from './add-btn-nav';
import { default as OpenCloseDialog } from '../options-menu/openCloseDialog';
// import { default as renderSearch } from './renderSearch';

class NavBar {
    constructor(modalRoot, modal, navContainer, openNavBtns, addTaskBtns, dialogElement, openDialogBtns) {
        this.navContainer = navContainer;
        this.openNavBtns = openNavBtns;
        this.addTaskBtns = addTaskBtns;
        this.addTaskNav = new AddTaskNav(modalRoot, modal, addTaskBtns)
        this.OpenCloseDialog = new OpenCloseDialog(dialogElement, openDialogBtns)
        this.init();
    }
    init() {
        this.setOpenNavBtns(this.openNavBtns);
        this.setCloseNav(this.navContainer, this.addTaskBtns);
    }
    // setSearchBtns(btns) {
    //     btns.forEach(btn => {
    //         btn.addEventListener('click', () => {
    //             renderSearch(this.doListTitle, this.doListElement)
    //         })
    //     })
    // }
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
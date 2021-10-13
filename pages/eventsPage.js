const {I}= inject();

module.exports ={
    elements: {
        applyFilters: {
            css:'button.apply-button'
        },
        hamburgerMenu:{
            css: 'button.PrimaryNav-module__hamburger--1y_LN'
        }
    },

    clickApplyFilters(){
        I.waitForClickable(this.elements.applyFilters);
        I.waitForElement(this.elements.applyFilters);
    }

}
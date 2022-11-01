
class Page {  

    click(locator){
        cy.get(locator).click({ force: true });
    }
    
    scrollIntoView(locator){
        cy.get(locator).scrollIntoView();
    }
    
    type(locator,text){
        cy.get(locator).type(text,{ force: true });
    }

    pressEnter(locator){
        cy.get(locator).type('{enter}');
    }
    
    getUrl(){
        return cy.url();
    }

    isdisplayed(locator){
        cy.get(locator).should('be.visible');
    }

    checkElement(locator,text) {
        (cy.get(locator)).should('have.text', text);
    }

    urlChecking(text){
        cy.url().should('include', text); 
    }

    tabdealing(locator,text){
        cy.get(locator).should($locator => {
            expect($locator.attr('href'), 'href').to.equal(text)
          })  
    }

    changetargets(locator,url1,url2){
        cy.get(locator).should($locator => {
            expect($locator.attr('href'), 'href').to.equal(url1)
            expect($locator.attr('target'), 'target').to.equal('_blank')
            $locator.attr('target', '_self')
          }).click()
          cy.location('pathname').should('equal', url2)
    }


}
module.exports = new Page()
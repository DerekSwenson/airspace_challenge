describe('This will test the login component of the Airspace Code Challenge website', function (){
    
    beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    })

    it('Successfully login a user, then click logout', () => {

        cy.get('input[name="username"]').type('tomsmith')
        cy.get('input[name="password"]').type('SuperSecretPassword!')
        cy.get('.radius').click()

        cy.location('pathname').should('eq', '/secure')

        cy.get('#flash.flash.success').should('be.visible').should('have.class', 'flash success').should('contain.text', 'You logged into a secure area!')

        cy.get('.secondary.radius').click()

        cy.get('#flash.flash.success').should('be.visible').should('have.class', 'flash success').should('contain.text', 'You logged out of the secure area!')

        cy.location('pathname').should('eq','/login')
    })

    it('Test an incorrect username and incorrect password', () => {

        cy.get('input[name="username"]').type('BadUsername')
        cy.get('input[name="password"]').type('BadPassword')
        cy.get('.radius').click()

        cy.get('#flash.flash.error').should('be.visible').should('have.class', 'flash error').should('contain.text', 'Your username is invalid!')

        cy.location('pathname').should('eq','/login')
    })

    it('Test an incorrect username with correct password', () => {

        cy.get('input[name="username"]').type('BadUsername')
        cy.get('input[name="password"]').type('SuperSecretPassword!')
        cy.get('.radius').click()

        cy.get('#flash.flash.error').should('have.class', 'flash error').should('contain.text', 'Your username is invalid!')

        cy.location('pathname').should('eq','/login')
    })

    it('Test a correct username with incorrect password', () => {

        cy.get('input[name="username"]').type('tomsmith')
        cy.get('input[name="password"]').type('BadPassword')
        cy.get('.radius').click()

        cy.get('#flash.flash.error').should('have.class', 'flash error').should('contain.text', 'Your password is invalid!')

        cy.location('pathname').should('eq','/login')
    })

    it('Test a correct username with no password', () => {

        cy.get('input[name="username"]').type('tomsmith')
        cy.get('.radius').click()

        cy.get('#flash.flash.error').should('have.class', 'flash error').should('contain.text', 'Your password is invalid!')

        cy.location('pathname').should('eq','/login')
    })

    it('Test an incorrect username with no password', () => {

        cy.get('input[name="username"]').type('BadUsername')
        cy.get('.radius').click()

        cy.get('#flash.flash.error').should('have.class', 'flash error').should('contain.text', 'Your username is invalid!')

        cy.location('pathname').should('eq','/login')
    })

    it('Test no username with incorrect password', () => {

        cy.get('input[name="password"]').type('BadPassword')
        cy.get('.radius').click()

        cy.get('#flash.flash.error').should('have.class', 'flash error').should('contain.text', 'Your username is invalid!')

        cy.location('pathname').should('eq','/login')
    }) 

    it('Test no username with correct password', () => {

        cy.get('input[name="password"]').type('SuperSecretPassword!')
        cy.get('.radius').click()

        cy.get('#flash.flash.error').should('have.class', 'flash error').should('contain.text', 'Your username is invalid!')

        cy.location('pathname').should('eq','/login')
    }) 

    it('Test no username and no password', () => {

        cy.get('.radius').click()

        cy.get('#flash.flash.error').should('have.class', 'flash error').should('contain.text', 'Your username is invalid!')

        cy.location('pathname').should('eq','/login')
    }) 

    it('Test that Elemental Selenium link will open in a new tab by making an assertion', () => {

        cy.get('a[href="http://elementalselenium.com/"]').should('have.attr', 'target', '_blank')
        
    })


})
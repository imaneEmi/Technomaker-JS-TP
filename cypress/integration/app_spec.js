const { describe } = require("mocha")

describe('Test the form', function () {
    it('visits the form', function () {
        cy.visit('/find-universities-by-country')
    })

    it('fills the form', function () {
        cy.get('input')
            .type('Morocco')
            .should('have.value', 'Morocco')
    })

    it('submits the form', function () {
        cy.get('button')
            .click()
        cy.url().should('include', '/universities')
        cy.contains('Morocco')
    })
})

describe('Test form with wrong value ', function () {
    it('submits form with wrong value', function () {
        cy.visit('/find-universities-by-country')
        cy.get('input')
            .type('uk')
        cy.get('button').click()
        cy.contains('No data found for the given country!')

    })
})

describe('Get all universities ', function () {
    it('gets all universities', function () {
        cy.visit('/universities-of-the-world')
        cy.url().should('include','/universities-of-the-world')
        cy.contains('India')
        cy.contains('Canada')
        cy.contains('Morocco')

    })
})

describe('Visit wrong url ', function () {
    it('visits wrong url', function () {
        cy.visit({url:'/Myuniversity',
        failOnStatusCode:false})
        cy.contains('404')

    })
})
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-file-upload';
require('cypress-xpath')
require('@shelex/cypress-allure-plugin');

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.Commands.add("searchItems", (search) => {
    const {iconSearch,inputSearch,inputValue,sendForm,expectUrl}=search;
    cy.xpath(`${iconSearch}`).click();
    cy.xpath(`${inputSearch}`).type(inputValue);
    cy.xpath(sendForm).click();
    cy.locationExpect(expectUrl);
});

Cypress.Commands.add("loopAddItems", () => {
    for (let index = 1; index <= 7; index++) {
        cy.log('Click on the product');
        cy.get(`#center_column > ul > li:nth-child(${index}) > div > div.left-block > div > a.product_img_link`).click({force : true});
        cy.get('#add_to_cart > .exclusive').click();
        cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span').click();
        cy.go('back')    
    }
});

Cypress.Commands.add("SelectItem", (selectItem) => {
    const {item,numbersItem}=selectItem;
    numbersItem.forEach(element => {
        cy.xpath(`${item}${element}`).click();
    });
});

Cypress.Commands.add("deleteItems", () => {
    cy.get('#product_1_1_0_0 > td.cart_delete.text-center').click();
    cy.get('#product_2_7_0_0 > td.cart_delete.text-center').click();
    cy.get('#product_3_13_0_0 > td.cart_delete.text-center').click();
    cy.get('#product_4_16_0_0 > td.cart_delete.text-center').click();
    cy.get('#product_5_19_0_0 > td.cart_delete.text-center').click();
    cy.get('#product_6_31_0_0 > td.cart_delete.text-center').click();
    cy.get('#product_7_34_0_0 > td.cart_delete.text-center').click();
});


Cypress.Commands.add("locationExpect", (hashExpect) => {
    cy.location().should((loc) => {
        expect(`${loc.toString()}`).to.eq(`${hashExpect}`)
    });
});

Cypress.Commands.add("login", (login) => {

    login.xpachClickSearch.forEach(xpath => {
        return(
            cy.xpath(xpath).click()
        )
    });

    cy.xpath(login.xpathInputEmail).type(login.email);
    cy.xpath(login.xpathInputPassword).type(login.password);
    cy.xpath(login.xpathClick).click();
    cy.locationExpect(login.hashExpect);
});
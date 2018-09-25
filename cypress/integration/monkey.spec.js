var Chance = require('chance');
var chance = new Chance(0); // Use 0 as seed always

describe('Los Estudiantes under monkeys', function() {
    beforeEach(function () {
        cy.visit('/');
        cy.contains('Cerrar').click();
    });

    it('Visits Los Estudiantes and survives monkey testing', function() {
        // cy.wait(1000);
        randomEvent(150);
    })
})

function getRandomInt(min, max) {
    return chance.integer({ min: min, max: max });
};

function randomLink(monkeysLeft) {
    if (monkeysLeft > 0) {
        cy.get('a').then($items => {
            var randomItem = $items.get(getRandomInt(0, $items.length - 1));
            if (!Cypress.dom.isHidden(randomItem)) {
                cy.wrap(randomItem).click({ force: true });
                monkeysLeft -= 1;
            }
            // cy.wait(1000);
            randomLink(monkeysLeft);
        });
    }
}

function randomTextInput(monkeysLeft) {
    if (monkeysLeft > 0) {
        cy.get('input').then($items => {
            var randomItem = $items.get(getRandomInt(0, $items.length - 1));
            if (!Cypress.dom.isHidden(randomItem)) {
                cy.wrap(randomItem).type('This is a monkey', { force: true });
                monkeysLeft -= 1;
            }
            // cy.wait(1000);
            randomTextInput(monkeysLeft);
        });
    }
}

function randomButton(monkeysLeft) {
    if (monkeysLeft > 0) {
        cy.get('button').then($items => {
            var randomItem = $items.get(getRandomInt(0, $items.length - 1));
            if (!Cypress.dom.isHidden(randomItem)) {
                cy.wrap(randomItem).click({ force: true });
                monkeysLeft -= 1;
            }
            // cy.wait(1000);
            randomButton(monkeysLeft);
        });
    }
}

function randomEvent(monkeysLeft) {
    if (monkeysLeft > 0) {
        var action = getRandomInt(1, 3);
        if (action === 1) {
            randomLink(1);
        } else if (action === 2) {
            randomButton(1);
        } else {
            randomTextInput(1);
        }
        // cy.wait(1000);
        randomEvent(monkeysLeft-1);
    }
}
describe('Search tests', function () {
    beforeEach(function () {
        cy.visit('/');
        cy.contains('Cerrar').click();
    });

    it('Search for an invalid teacher', function () {
        cy.get('form[role=search] input').type('Inexistent teacher', {force: true});
        
        cy.get('form[role=search] .Select-noresults').should(function ($alert) {
            expect($alert).to.have.text('No se encontraron profesores ni materias');
        });
    });

    it('Search for an existing teacher', function () {
        cy.get('form[role=search] input').type('Mario Linares', {force: true});

        cy.get('form[role=search] .Select-option').should(function ($alert) {
            expect($alert).to.have.text('Mario Linares Vasquez - Ingeniería de Sistemas');
        });
    })
});

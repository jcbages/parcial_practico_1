describe('Login tests', function () {
    beforeEach(function () {
        cy.visit('/');
        cy.contains('Cerrar').click();
        cy.contains('Ingresar').click();
    });

    it('Fails to login with bad credentials', function () {
        cy.get('.cajaLogIn input[name=correo]').type('fake@email.com');
        cy.get('.cajaLogIn input[name=password]').type('123456');
        cy.get('.cajaLogIn .logInButton').click();

        cy.get('.cajaLogIn .aviso').should(function ($alert) {
            expect($alert).to.have.text(
                'Upss! El correo y la contraseña que ingresaste ' +
                'no figuran en la base de datos. Intenta de nuevo por favor.'
            );
        });
    });

    it('Login successfully with valid credentials', function () {
        cy.get('.cajaLogIn input[name=correo]').type('jcbages@outlook.com');
        cy.get('.cajaLogIn input[name=password').type('QAZwsx123');
        cy.get('.cajaLogIn .logInButton').click();

        cy.get('#cuenta');
    });
});

describe('Teachers tests', function () {
    beforeEach(function () {
        cy.visit('/');
        cy.contains('Cerrar').click();

        cy.get('#sample_select').select('Ingeniería de Sistemas y Computación');
        cy.wait(1000);
        cy.contains('Alfabético').click();
    });

    it('Show teachers from an undergrad degree', function () {
        cy.contains('Alvaro Andres Gomez D`Alleman');
        cy.contains('Andres Dario Moreno Barbosa');
        cy.contains('Andres Roberto Gomez Vargas');
        cy.contains('Carlos Andres Lozano Garzon');
    });

    it('Go to a teacher profile from home screen', function () {
        cy.get('.profesor a').first().click();
        cy.get('.infoProfesor');
    });

    it('Go to a teacher profile from other teacher profile', function () {
        cy.get('.profesor a').first().click();
        cy.get('.infoProfesor');
        
        cy.get('.profesor a').first().click({force: true});
        cy.get('.infoProfesor');
    });

    it('Filter teacher comments by course', function () {
        cy.get('.profesor a').first().click();
        cy.get('.infoProfesor');

        cy.get('.materias input[name="id:ISIS1209"]').click();
        cy.wait(2000);

        cy.get('.calificacion .lineBreak').first().should(function ($item) {
            expect($item).to.have.text(
                'Álvaro es un profesor que entiende muy bien la diferencia entre ' +
                'aprender y aprehender. Esto se ve reflejado en la forma en la que ' +
                'trata a sus estudiantes, y las metodologías que usa para que el ' +
                'estudiante utilicé otras herramientas para entender lo que está ' +
                'sucediendo en el tablero. Además, regala dulces muy ricos por participar.' +
                'Pros: Es un excelente profesor\nSabe mucho del tema\nUsa una metodología ' +
                'didáctica\nResuelve muchas dudas fuera de clase\nEntiende que la clase no ' +
                'solo es la nota\nDa dulcesCons: A veces hace chistes malos'
            );
        })
    });
});

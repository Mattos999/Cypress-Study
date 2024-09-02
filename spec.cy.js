describe('template spec', () => {
  it('passes', () => {
    //Ir ao site
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    //Clicar em Cadastrar
    cy.contains('a', 'Cadastrar').click();
    //preencher o Formulário para cadastro
    cy.get('input[name = "nome"]').type('Fulano');
    cy.get('input[name = "email"]').type('test@gmail.com');
    cy.get('input[name = "password"]').type('test12345');
    cy.get('input[name = "confirm_password"]').type('test12345');
    //Se cadastrar
    cy.contains('button', 'Cadastrar').click();
    //Logar
    //Preencher dados de Login
    cy.get('input[name = "email"]').type('test@gmail.com');
    cy.get('input[name = "password"]').type('test12345');
    //Clicar em Entrar
    cy.contains('button', 'Entrar').click();
  })
})

describe('template spec', () => {
  it('passes', () => {
    //Ir ao site
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    //Clicar em Cadastrar
    cy.contains('a', 'Cadastrar').click();
    //preencher o Formulário para cadastro
    cy.get('input[name = "nome"]').type('Carlos Matos');
    cy.get('input[name = "email"]').type('carlos.matos.nac@gmail.com');
    cy.get('input[name = "password"]').type('Matos150615');
    cy.get('input[name = "confirm_password"]').type('Matos150615');
    //Se cadastrar
    cy.contains('button', 'Cadastrar').click();
    //Logar
    //Preencher dados de Login
    cy.get('input[name = "email"]').type('carlos.matos.nac@gmail.com');
    cy.get('input[name = "password"]').type('Matos150615');
    //Clicar em Entrar
    cy.contains('button', 'Entrar').click();
  })
})
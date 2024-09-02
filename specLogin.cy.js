describe('template spec', () => {
  it('passes', () => {
    //Ir ao site
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.contains('a', 'Fazer login').click();
    //Logar
    //Preencher dados de Login
    cy.get('input[name = "email"]').type('carlos.matos.nac@gmail.com');
    cy.get('input[name = "password"]').type('Matos150615');
    //Clicar em Entrar
    cy.contains('button', 'Entrar').click();
  })
})
describe('template spec', () => {
  it('passes', () => {
    //Ir ao site
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.contains('a', 'Fazer login').click();
    //Logar
    //Preencher dados de Login
    cy.get('input[name = "email"]').type('test@gmail.com');
    cy.get('input[name = "password"]').type('test12345');
    //Clicar em Entrar
    cy.contains('button', 'Entrar').click();
  })
})

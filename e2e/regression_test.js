describe('Regression test on HNG Boilerplate', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Verify home page has a logo image', () => {
    cy.get('img[alt="Hgn boiler plate logo"]').should('be.visible');
  });

  it('Verify home page has functional navigation links', () => {
    cy.get('a[href="/register"]').should('have.attr', 'href', '/register');
    cy.get('a[href="/pricing"]').should('have.attr', 'href', '/pricing');
  });

  it('Verify user is able to register', () => {
    cy.visit('/register');
    cy.get('input[name="first_name"]').type('ria'); 
    cy.get('input[name="last_name"]').type('edwin'); 
    cy.get('input[name="email"]').type('ria@mailinator.com');
    cy.get('input[name="password"]').type('ValidPassword123!');
    cy.get('button.bg-primary').contains('Create Account').click();
  });

  it('Verify user cannot sign up with duplicate email', () => {
    cy.visit('/register');
    cy.get('input[name="first_name"]').type('ria'); 
    cy.get('input[name="last_name"]').type('edwin'); 
    cy.get('input[name="email"]').type('ria@mailinator.com');
    cy.get('input[name="password"]').type('ValidPassword123!');
    cy.get('button.bg-primary').contains('Create Account').click();
    cy.contains('Account with the specified email exists').should('be.visible');
  });

  it('Verify user cannot sign up with invalid email format', () => {
    cy.visit('/register');
    cy.get('input[name="first_name"]').type('ria'); 
    cy.get('input[name="last_name"]').type('edwin'); 
    cy.get('input[name="email"]').type('ria.com');
    cy.get('input[name="password"]').type('ValidPassword123!');
    cy.get('button.bg-primary').contains('Create Account').click();
  });

  it('Verify user cannot sign up with weak password', () => {
    cy.visit('/register');
    cy.get('input[name="first_name"]').type('ria'); 
    cy.get('input[name="last_name"]').type('edwin'); 
    cy.get('input[name="email"]').type('ria@mailinator.com');
    cy.get('input[name="password"]').type('1111');
    cy.get('button.bg-primary').contains('Create Account').click();
    cy.contains('Password must be at least 8 characters long').should('be.visible');
  });

  it('Verify user can sign up with a new Google account', () => {
    cy.visit('/register');
    cy.get('button.inline-flex').contains('Continue with Google').click();
  });

  it('Verify sign up with empty email', () => {
    cy.visit('/register');
    cy.get('input[name="password"]').type('ValidPassword123!');
    cy.get('button.bg-primary').contains('Create Account').click();
    cy.contains('Field is required').should('be.visible');
  });

  it('Verify sign up with missing password', () => {
    cy.visit('/register');
    cy.get('input[name="email"]').type('test@mailinator.com');
    cy.get('button.bg-primary')
      .click();
    cy.contains('Password is required').should('be.visible');
  });
  it('Verify login with valid credentials', () => {
    cy.visit('/login'); 
    
    cy.get('input[name="email"]').type('rialuxury@gmail.com'); 
    cy.get('input[name="password"]').type('Edwin1@kels'); 
    cy.get('button.bg-primary').contains('Login').click(); 
    
  });
});

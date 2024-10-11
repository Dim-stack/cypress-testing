// cypress/support/commands.js

// Custom command to select elements by data-test attribute
Cypress.Commands.add("getByData", (dataTestAttribute) => {
    return cy.get(`[data-test="${dataTestAttribute}"]`);
  });
  
  // Custom command to select elements by ID
  Cypress.Commands.add("getById", (id) => {
    return cy.get(`#${id}`);
  });
  
  // Custom command to select elements by class
  Cypress.Commands.add("getByClass", (className) => {
    return cy.get(`.${className}`);
  });
  
  // Custom command to select elements by role
  Cypress.Commands.add("getByRole", (role) => {
    return cy.get(`[role="${role}"]`);
  });
  
  // Custom command to select elements by tag name
  Cypress.Commands.add("getByTag", (tagName) => {
    return cy.get(tagName);
  });
  
  // Custom command to select elements by a specific attribute
  Cypress.Commands.add("getByAttribute", (attribute, value) => {
    return cy.get(`[${attribute}="${value}"]`);
  });
  
  // New custom command for aria attributes
  Cypress.Commands.add("getByAria", (ariaAttribute) => {
    return cy.get(
      `[aria-controls="${ariaAttribute}"], [aria-owns="${ariaAttribute}"], [aria-expanded="${ariaAttribute}"], [aria-haspopup="${ariaAttribute}"], [aria-labelledby="${ariaAttribute}"], [aria-hidden="${ariaAttribute}"]`
    ).first(); // Always select the first matching element
  });
  
  // Example for getting by aria-label
  Cypress.Commands.add("getByAriaLabel", (label) => {
    return cy.get(`[aria-label="${label}"]`);
  });

  Cypress.Commands.add("getByLabel", (label) => {
    return cy.get(`[label="${label}"]`);
  });
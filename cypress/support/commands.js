Cypress.Commands.add("getByData", (dataTestAttribute) => {
    return cy.get(`[data-test="${dataTestAttribute}"]`);
  });
  

  Cypress.Commands.add("getById", (id) => {
    return cy.get(`#${id}`);
  });
  

  Cypress.Commands.add('getByClass', (className, options = {}) => {
    return cy.get(`.${className}`, options);
  });
  

  Cypress.Commands.add("getByRole", (role) => {
    return cy.get(`[role="${role}"]`);
  });
  

  Cypress.Commands.add("getByTag", (tagName) => {
    return cy.get(tagName);
  });
  

  Cypress.Commands.add("getByAttribute", (attribute, value) => {
    return cy.get(`[${attribute}="${value}"]`);
  });
  

  Cypress.Commands.add("getByAria", (ariaAttribute) => {
    return cy.get(
      `[aria-controls="${ariaAttribute}"], [aria-owns="${ariaAttribute}"], [aria-expanded="${ariaAttribute}"], [aria-haspopup="${ariaAttribute}"], [aria-labelledby="${ariaAttribute}"], [aria-hidden="${ariaAttribute}"]`
    ).first();
  });
  

  Cypress.Commands.add("getByAriaLabel", (label) => {
    return cy.get(`[aria-label="${label}"]`);
  });

  Cypress.Commands.add("getByLabel", (label) => {
    return cy.get(`[label="${label}"]`);
  });
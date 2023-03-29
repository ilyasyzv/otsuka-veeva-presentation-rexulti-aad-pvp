describe('External', () => {
  it('check scores', () => {
    cy.visit('https://otsuka-us.com/who-we-are');

    cy.lighthouse(
      {
        accessibility: 60,
        'best-practices': 60,
        seo: 60,
      },
      {
        formFactor: 'desktop',
        screenEmulation: {
          mobile: false,
          disable: false,
          width: Cypress.config('viewportWidth'),
          height: Cypress.config('viewportHeight'),
          deviceScaleRatio: 1,
        },
      },
    );

    // cy.pa11y();
  });
});

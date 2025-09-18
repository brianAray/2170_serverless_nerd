# Website Behavior Testing with Cypress

Create a comprehensive end-to-end testing suite using Cypress to test the behavior and functionality of a website of your choice. This activity will help you learn automated testing by writing behavior-driven tests that simulate real user interactions and verify that web applications work as expected.

You don't have to fully test every aspect of the webpage, do enough to get comfortable with the cypress.

## Requirements

- Set up a Cypress testing environment
- Choose a target website for testing (e.g., e-commerce site, social media platform, news website, or personal portfolio)
- Write behavior tests that cover:
  - Navigation and page loading
  - Form submissions and user inputs
  - Interactive elements (buttons, dropdowns, modals)
  - Search functionality
  - User authentication flows (if applicable)
  - Responsive design elements
- Implement different types of assertions
- Use Cypress commands and best practices
- Generate test reports

## Test Categories to Implement

### 1. Basic Navigation Tests
- Verify page titles and URLs
- Test navigation menu functionality
- Check that links work correctly
- Validate page loading times

### 2. User Interface Tests
- Test form validation and submission
- Verify button clicks and interactions
- Check responsive design on different viewports
- Test image loading and display

### 3. Functional Behavior Tests
- Search functionality testing
- Shopping cart operations (for e-commerce sites)
- User registration/login flows
- Content filtering and sorting

### 4. Error Handling Tests
- Test 404 error pages
- Validate form error messages
- Check network failure scenarios
- Test invalid input handling

## Starter Code

This starter code will help you set up your Cypress testing environment and provide examples of basic test structures.

### Basic Test Structure (cypress/e2e/website-tests.cy.js)
```javascript
describe('Website Behavior Tests', () => {
  // Before each test, visit the target website
  beforeEach(() => {
    // Replace with your chosen website URL
    cy.visit('https://example.com')
  })

  // Basic page loading test
  it('should load the homepage successfully', () => {
    cy.url().should('include', 'example.com')
    cy.title().should('not.be.empty')
    cy.get('body').should('be.visible')
  })

  // Navigation test example
  it('should navigate through main menu items', () => {
    // Test navigation menu using class selector
    cy.get('.navbar').should('be.visible')
    cy.contains('About').click()
    cy.url().should('include', '/about')
    cy.get('h1').should('contain', 'About')
  })

  // Form interaction test example
  it('should handle contact form submission', () => {
    cy.get('form').within(() => {
      cy.get('input[name="name"]').type('Test User')
      cy.get('input[name="email"]').type('test@example.com')
      cy.get('textarea[name="message"]').type('This is a test message')
      cy.get('button[type="submit"]').click()
    })
    
    // Verify success message using text content
    cy.contains('Thank you for your message').should('be.visible')
  })

  // Search functionality test
  it('should perform search operations', () => {
    cy.get('input[placeholder*="Search"]').type('cypress testing{enter}')
    cy.get('.search-results').should('be.visible')
    cy.get('.result-item').should('have.length.greaterThan', 0)
  })

  // Responsive design test
  it('should work on mobile viewport', () => {
    cy.viewport('iphone-x')
    cy.get('.hamburger-menu').click()
    cy.get('.mobile-nav').should('be.visible')
  })

  // Error handling test
  it('should handle 404 pages gracefully', () => {
    cy.visit('/non-existent-page', { failOnStatusCode: false })
    cy.contains('404').should('be.visible')
    cy.contains('Home').click()
    cy.url().should('not.include', '404')
  })
})
```

## Getting Started Instructions

1. **Install Cypress**
   ```bash
   npm init -y
   npm install --save-dev cypress
   ```

2. **Initialize Cypress**
   ```bash
   npx cypress open
   ```

4. **Write your first test following the examples above**

5. **Run tests**
   ```bash
   npx cypress run
   ```

## Best Practices to Follow

- Use data attributes (`data-cy`) for element selection instead of CSS classes
- Write descriptive test names that explain the expected behavior
- Use Page Object Model for complex applications
- Implement proper wait strategies (avoid `cy.wait()` with fixed times)
- Test both happy path and edge cases
- Keep tests independent and atomic
- Use meaningful assertions that verify actual user experience
- Organize tests logically with `describe` and `context` blocks
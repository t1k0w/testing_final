import { SELECTORS } from '../selectors';
import BasePage from './BasePage';

class FormPage extends BasePage {
  fillFirstName(name) {
    cy.get(SELECTORS.firstName).type(name);
  }

  fillLastName(lastName) {
    cy.get(SELECTORS.lastName).type(lastName);
  }

  setEmail(email) {
    cy.get(SELECTORS.userEmail).type(email);
  }

  selectGender(index) {
    cy.get(SELECTORS.gender.replace('{index}', index)).check({ force: true });
  }

  setMobileNumber(mobileNumber) {
    cy.get(SELECTORS.userNumber).type(mobileNumber);
  }

  setDateOfBirth(date) {
    cy.get(SELECTORS.dateOfBirthInput).click();
    cy.get('.react-datepicker__year-select').select('1930');
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();
  }

  setSubject(subject) {
    cy.get(SELECTORS.subjectsContainer).click({ force: true });
    cy.get(`${SELECTORS.subjectsContainer} input`).type(subject);
    cy.get(`${SELECTORS.subjectsContainer} .subjects-auto-complete__menu`).contains(subject).click();
  }

  selectHobby(index) {
    cy.get(SELECTORS.hobbiesCheckbox.replace('{index}', index)).check({ force: true });
  }

  uploadPicture(filePath) {
    cy.get(SELECTORS.uploadPicture).selectFile(filePath);
  }

  setCurrentAdress(currentAddress) {
    cy.get(SELECTORS.currentAddress).type(currentAddress);
  }

  selectState(state) {
    cy.get(SELECTORS.stateInput).click({ force: true });
    cy.get(SELECTORS.stateOption(state)).click();
  }

  selectCity() {
    cy.get('#react-select-4-input').click({ force: true });
    cy.get('.css-26l3qy-menu').contains('Delhi').click();
  }
}

export default new FormPage();
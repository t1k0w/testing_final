export const SELECTORS = {
    firstName: '#firstName',
    lastName: '#lastName',
    userEmail: '#userEmail',
    gender: '#gender-radio-{index}', // index: 1 - Male, 2 - Female, 3 - Other
    userNumber: '#userNumber',
    dateOfBirthInput: '#dateOfBirthInput',
    subjectsContainer: '#subjectsContainer',
    hobbiesCheckbox: '#hobbies-checkbox-{index}', // index: 1 - Sports, 2 - Reading, 3 - Music
    uploadPicture: '#uploadPicture',
    currentAddress: '#currentAddress',
    stateInput: '#react-select-3-input',
    stateOption: (stateName) => `.css-26l3qy-menu div[id*="react-select-3-option"]:contains('${stateName}')`,
    cityInput: '#react-select-4-input',
    cityOption: (cityName) => `.css-14jk2my-menu div[id*="react-select-4-option"]:contains('${cityName}')`
  };
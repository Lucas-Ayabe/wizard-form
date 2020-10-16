/**
 * Wrapper to document.querySelector method.
 *
 * @param {string} query
 * @returns {HTMLElement|null}
 */
const getElement = (query) => document.querySelector(query);

/**
 * Wrapper to document.querySelectorAll method.
 *
 * @param {string} query
 * @returns {NodeListOf<HTMLElement>}
 */
const getElements = (query) => document.querySelectorAll(query);

const wizardElement = getElement('.wizard');

if (wizardElement) {
    var wizard = new Wizard(wizardElement);
    wizard.init();
}

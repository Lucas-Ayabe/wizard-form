class Wizard {
    /**
     * Initializes the Wizard by passing the element that will be the Wizard in
     * the DOM.
     *
     * @param {HTMLElement} element
     */
    constructor(element) {
        if (!element) {
            throw new Error('Wizard element not found.');
        }

        /**
         * @var {number}
         */
        this.index = 0;

        /**
         * @var {HTMLElement}
         */
        this.wizard = element;

        /**
         * @var {HTMLElement}
         */
        this.steps = this.wizard.querySelector('.steps');

        /**
         * @var {HTMLElement}
         */
        this.stepCounter = this.wizard.querySelector('.step-counter');

        /**
         * @var {HTMLElement}
         */
        this.prev = this.wizard.querySelector('[data-prev]');

        /**
         * @var {HTMLButtonElement}
         */
        this.next = this.wizard.querySelector('[data-next]');

        if (!(this.steps && this.prev && this.next)) {
            throw new Error(
                'Required elements not found. Are needed: wizard .steps, wizard > [data-prev], wizard > [data-next].'
            );
        }

        /**
         * @var {number}
         */
        this.stepsCount = this.steps.querySelectorAll('.step').length || 0;

        /**
         * @var {NodeListOf<HTMLElement>}
         */
        this.indicators = this.stepCounter.querySelectorAll('.number');

        /**
         * @var {number}
         */
        this.indicatorsCount = this.indicators.length || 0;

        if (this.stepsCount !== this.indicatorsCount) {
            throw new Error(
                'The steps must be in the same quantity as the indicators'
            );
        }

        /**
         * @var {string}
         */
        this.nextHTML = this.next.innerHTML;

        this.moveToNextStep = this.moveToNextStep.bind(this);
        this.moveToPreviousStep = this.moveToPreviousStep.bind(this);
    }

    /**
     * Moves to the given index step.
     *
     * @param {number} index
     * @returns {Wizard}
     */
    move(index) {
        if (index >= 0 && index < this.stepsCount) {
            const length = this.steps.getBoundingClientRect().width * index;
            this.steps.style.transform = `translate3d(-${length}px, 0, 0)`;
        }

        return this;
    }

    changeIndicatorsTo(index) {
        if (index >= 0 && index < this.indicatorsCount) {
            this.indicators.forEach((indicator) => {
                indicator.classList.remove('-active');
            });

            this.indicators[index].classList.add('-active');
        }

        return this;
    }

    /**
     * Moves to the next step.
     */
    moveToNextStep() {
        this.next.setAttribute('type', 'button');

        if (this.index < this.stepsCount - 1) {
            this.prev.dataset.prev = 'visible';
            this.index++;
            this.move(this.index);
            this.changeIndicatorsTo(this.index);
        } else {
            this.next.setAttribute('type', 'submit');
        }

        if (this.index > this.stepsCount - 2) {
            this.next.innerHTML = this.next.dataset.next;
        }

        return this;
    }

    /**
     * Moves to the previous step.
     */
    moveToPreviousStep() {
        if (this.index > 0) {
            this.index--;
            this.move(this.index);
            this.changeIndicatorsTo(this.index);
            this.next.innerHTML = this.nextHTML;
        }

        if (this.index === 0) {
            this.prev.dataset.prev = 'hidden';
        }

        return this;
    }

    /**
     * Bind the events to init the wizard.
     *
     * @returns {Wizard}
     */
    init() {
        this.next.addEventListener('click', this.moveToNextStep);
        this.prev.addEventListener('click', this.moveToPreviousStep);

        return this;
    }
}

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

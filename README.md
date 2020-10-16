# Wizard Form

A simple wizard form that have a number step indicator, prev and next controls and animations. A vanilla javascript plugin.

## Instalation

To install this plugin, download the wizard-form.js and the wizard-form.css files.

Import they in your HTML. Ex:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Wizard Form</title>
        <link rel="stylesheet" href="wizard-form.css" />
        <!-- Your personal styles -->
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <script src="./wizard-form.js"></script>
        <!-- Your personal scripts -->
        <script src="./script.js"></script>
    </body>
</html>
```

## Using

Use the following HTML structure:

```html
<!-- Only the wizard class is required. -->
<form class="wizard [ stack card container text-center ]">
    <h2>Wizard Form</h2>

    <div class="step-counter">
        <!-- 
            -active class is required to init with the first step indicator active.
         -->
        <span class="number -active">1</span>
        <span class="number">2</span>
        <span class="number">3</span>
    </div>

    <div class="content">
        <div class="steps">
            <fieldset class="step stack">
                <legend>Basic data</legend>

                <!-- The code of this step of your form ... -->
            </fieldset>

            <fieldset class="step stack">
                <legend>Credencials</legend>

                <!-- The code of this step of your form ... -->
            </fieldset>

            <fieldset class="step stack">
                <legend>Finally</legend>

                <!-- The code of this step of your form ... -->
            </fieldset>
        </div>
    </div>

    <div class="controls">
        <!-- 
            The classes here are only for styling, they are not required.
            The type button is required.
            The data-prev="hidden" atribute is required
        -->
        <button
            type="button"
            data-prev="hidden"
            class="button -primary -outline"
        >
            Previous
        </button>

        <!-- 
            The classes here are only for styling, they are not required.
            The type button is required.
            The data-next atribute is required
        -->
        <button type="button" data-next="Send" class="button -primary">
            Next
        </button>
    </div>
</form>
```

<strong>Note: </strong> you still need to style the form, so that the plugin works in a more expected way.

Use the `wizard` class in your form that will be the component container.
Insert this code in the place that will have the progress indicators:

```html
<form class="wizard">
    <div class="step-counter">
        <span class="number -active">1</span>
        <span class="number">2</span>
        <span class="number">3</span>
    </div>
</form>
```

Now is here where the magic occours. Create a wrapper to your steps with the `content` class, then add the wrapper responsible for doing the magic behind the step change with the `steps` class, and finally for each step of your form use a wrapper with the `step` class (the content inside the `step` can be anything).

```html
<form class="wizard">
    <div class="step-counter">
        <span class="number -active">1</span>
        <span class="number">2</span>
        <span class="number">3</span>
    </div>

    <div class="content">
        <div class="steps">
            <div class="step">
                <!-- ... -->
            </div>
            <div class="step">
                <!-- ... -->
            </div>
            <div class="step">
                <!-- ... -->
            </div>
        </div>
    </div>
</form>
```

<strong>Note: </strong> The number of `step` elements must be the same of the `number` elements of the `step-counter` wrapper.

To finish add the `controls` class to a wrapper and add one button with the `data-prev` atribute with the "hidden" value so that the form starts without the back button to improve usability, and add one more button with the `data-next` atribute, the value of the `data-next` atribute represents the text of the submit button that will appear in the last step.

```html
<form class="wizard">
    <div class="step-counter">
        <span class="number -active">1</span>
        <span class="number">2</span>
        <span class="number">3</span>
    </div>

    <div class="content">
        <div class="steps">
            <div class="step">
                <!-- ... -->
            </div>
            <div class="step">
                <!-- ... -->
            </div>
            <div class="step">
                <!-- ... -->
            </div>
        </div>
    </div>

    <div class="controls">
        <button type="button" data-prev="hidden">Previous</button>
        <button type="button" data-next="Send form">Next</button>
    </div>
</form>
```

<strong>Note: </strong> the type button is required to not submit the form when the step is changed.

## Demo

The demo code is hosted in: https://wizard-form-component.netlify.app/

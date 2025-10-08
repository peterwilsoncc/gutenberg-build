var __webpack_exports__ = {};

;// ./packages/block-editor/build-module/utils/fit-text-utils.js
/**
 * Shared utility functions for fit text functionality.
 * Uses callback-based approach for maximum code reuse between editor and frontend.
 */

/**
 * Generate CSS rule for single text element.
 *
 * @param {string} elementSelector CSS selector for the text element
 * @param {number} fontSize        Font size in pixels
 * @return {string} CSS rule string
 */
function generateCSSRule(elementSelector, fontSize) {
  return `${elementSelector} { font-size: ${fontSize}px !important; }`;
}

/**
 * Find optimal font size using simple binary search between 5-600px.
 *
 * @param {HTMLElement} textElement     The text element
 * @param {string}      elementSelector CSS selector for the text element
 * @param {Function}    applyStylesFn   Function to apply test styles
 * @return {number} Optimal font size
 */
function findOptimalFontSize(textElement, elementSelector, applyStylesFn) {
  const alreadyHasScrollableHeight = textElement.scrollHeight > textElement.clientHeight;
  let minSize = 5;
  let maxSize = 600;
  let bestSize = minSize;
  while (minSize <= maxSize) {
    const midSize = Math.floor((minSize + maxSize) / 2);
    applyStylesFn(generateCSSRule(elementSelector, midSize));
    const fitsWidth = textElement.scrollWidth <= textElement.clientWidth;
    const fitsHeight = alreadyHasScrollableHeight || textElement.scrollHeight <= textElement.clientHeight;
    if (fitsWidth && fitsHeight) {
      bestSize = midSize;
      minSize = midSize + 1;
    } else {
      maxSize = midSize - 1;
    }
  }
  return bestSize;
}

/**
 * Complete fit text optimization for a single text element.
 * Handles the full flow using callbacks for style management.
 *
 * @param {HTMLElement} textElement     The text element (paragraph, heading, etc.)
 * @param {string}      elementSelector CSS selector for the text element
 * @param {Function}    applyStylesFn   Function to apply CSS styles (pass empty string to clear)
 */
function optimizeFitText(textElement, elementSelector, applyStylesFn) {
  if (!textElement) {
    return;
  }
  applyStylesFn('');
  const optimalSize = findOptimalFontSize(textElement, elementSelector, applyStylesFn);
  const cssRule = generateCSSRule(elementSelector, optimalSize);
  applyStylesFn(cssRule);
}

;// ./packages/block-editor/build-module/utils/fit-text-frontend.js
/**
 * Frontend fit text functionality.
 * Automatically detects and initializes fit text on blocks with the has-fit-text class.
 */

/**
 * Internal dependencies
 */


/**
 * Counter for generating unique element IDs.
 */
let idCounter = 0;

/**
 * Get or create a unique style element for a fit text element.
 *
 * @param {string} elementId Unique identifier for the element.
 * @return {HTMLElement} Style element.
 */
function getOrCreateStyleElement(elementId) {
  const styleId = `fit-text-${elementId}`;
  let styleElement = document.getElementById(styleId);
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = styleId;
    document.head.appendChild(styleElement);
  }
  return styleElement;
}

/**
 * Generate a unique identifier for a fit text element.
 *
 * @param {HTMLElement} element The element to identify.
 * @return {string} Unique identifier.
 */
function getElementIdentifier(element) {
  if (!element.dataset.fitTextId) {
    element.dataset.fitTextId = `fit-text-${++idCounter}`;
  }
  return element.dataset.fitTextId;
}

/**
 * Initialize fit text functionality for a single element.
 *
 * @param {HTMLElement} element Element with fit text enabled.
 */
function initializeFitText(element) {
  const elementId = getElementIdentifier(element);
  const applyFitText = () => {
    const styleElement = getOrCreateStyleElement(elementId);
    const elementSelector = `[data-fit-text-id=\"${elementId}\"]`;

    // Style management callback
    const applyStylesFn = css => {
      styleElement.textContent = css;
    };
    optimizeFitText(element, elementSelector, applyStylesFn);
  };

  // Initial sizing
  applyFitText();

  // Watch for parent container resize
  if (window.ResizeObserver && element.parentElement) {
    const resizeObserver = new window.ResizeObserver(applyFitText);
    resizeObserver.observe(element.parentElement);
  }
}

/**
 * Initialize fit text on all elements with the has-fit-text class.
 */
function initializeAllFitText() {
  const elements = document.querySelectorAll('.has-fit-text');
  elements.forEach(initializeFitText);
}
window.addEventListener('load', initializeAllFitText);


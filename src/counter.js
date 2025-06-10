export function setupCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;

    // Update the element with the current count
    element.innerHTML = `count is ${counter}`;

    // Show notification and "blow up" for multiples of 10
    if (counter % 10 === 0 && counter !== 0) {
      alert(`Boom! Counter reached ${counter}, a multiple of 10!`);

      // Blow up effect example: reset the counter and apply styling
      element.style.color = 'red';
      element.style.fontSize = '2em';
      element.style.transition = 'all 0.5s ease';

      // Reset counter after a short visual effect
      setTimeout(() => {
        element.style.color = '';
        element.style.fontSize = '';
        setCounter(0); // Reset counter to 0
      }, 1000); // 1-second delay for the effect
    }
  };

  // Increment the counter on click
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}

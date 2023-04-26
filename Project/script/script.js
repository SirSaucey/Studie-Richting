document.addEventListener('DOMContentLoaded', () => {
  fetch('script/data.json')
    .then(response => response.json())
    .then(data => {
      const options1 = data[0].options;
      const options2 = data[0].grades[0].options;

      // Create HTML for the options in 2e graad column
      const options1HTML = options1.map(option => `
        <li class="option ${option.className}" data-title="${option.title}">
          <h3>${option.title}</h3>
          <p>${option.subtitle}</p>
        </li>
      `).join('');

      // Create HTML for the options in 3e graad column
      const options2HTML = options2.map(option => `
        <li class="option ${option.className}" data-title="${option.title}">
          <h3>${option.title}</h3>
          <p>${option.subtitle}</p>
        </li> 
      `).join('');

      // Add the options HTML to the respective columns
      document.getElementById('options1').innerHTML = options1HTML;
      document.getElementById('options2').innerHTML = options2HTML;

      // Add hover effect to options
      document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('mouseover', () => {
          // Change color of all elements with the same class
          const className = option.getAttribute('class').split(' ')[1];
          document.querySelectorAll(`.${className}`).forEach(el => {
            el.style.color = '#c3004a'; // change the color to #c3004a
          });
        });

        option.addEventListener('mouseout', () => {
          // Reset color of all elements with a class
          document.querySelectorAll('[class]').forEach(el => {
            el.style.color = ''; // reset the color to its original value
          });
        });
      });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('script/data.json')
    .then(response => response.json())
    .then(data => {
      const options1 = data[0].options;
      const options2 = data[0].grades[0].options;

      // Create HTML for the options in 2e graad column
      const options1HTML = options1.map(option => `
      <li class="option" data-title="${option.title}">
        <h3>${option.title}</h3>
        <p>${option.subtitle}</p>
      </li>
      `).join('');

      // Create HTML for the options in 3e graad column
      const options2HTML = options2.map(option => `
      <li class="option" data-title="${option.title}">
        <h3>${option.title}</h3>
        <p>${option.subtitle}</p>
      </li> 
      `).join('');

      // Add the options HTML to the respective columns
      document.getElementById('options1').innerHTML = options1HTML;
      document.getElementById('options2').innerHTML = options2HTML;

      // Add hover effect to options
      // Add hover effect to options
    const optionElements = document.querySelectorAll('.option');
    optionElements.forEach(option => {
      option.addEventListener('mouseover', () => {
      option.querySelector('h3').style.color = '#c3004a';
      option.querySelectorAll('li').forEach(li => {
        li.style.color = '#c3004a';
        li.style.fontWeight = 'normal';
      });
      const borderElement = option.querySelector('.border');
      if (borderElement) {
        borderElement.style.border = '2px solid #c3004a';
      }

    // Find related options and update their colors
    const relatedOptions = option.dataset.related ? document.querySelectorAll(`[data-related="${option.dataset.related}"]`) : [];
    relatedOptions.forEach(relatedOption => {
      relatedOption.querySelector('h3').style.color = '#c3004a';
      relatedOption.querySelector('p').style.color = '#c3004a';
      relatedOption.querySelectorAll('li').forEach(li => {
        li.style.color = '#c3004a';
        li.style.fontWeight = 'normal';
      });
      const relatedBorderElement = relatedOption.querySelector('.border');
      if (relatedBorderElement) {
        relatedBorderElement.style.border = '2px solid #c3004a';
      }
    });
  });

  option.addEventListener('mouseout', () => {
    option.querySelector('h3').style.color = 'black';
    option.querySelector('p').style.color = 'black';
    option.querySelectorAll('li').forEach(li => {
      li.style.color = 'black';
      li.style.fontWeight = 'bold';
    });
    const borderElement = option.querySelector('.border');
    if (borderElement) {
      borderElement.style.border = 'none';
    }

    // Find related options and update their colors
    const relatedOptions = option.dataset.related ? document.querySelectorAll(`[data-related="${option.dataset.related}"]`) : [];
    relatedOptions.forEach(relatedOption => {
      relatedOption.querySelector('h3').style.color = 'black';
      relatedOption.querySelectorAll('li').forEach(li => {
        li.style.color = 'black';
        li.style.fontWeight = 'bold';
      });
      const relatedBorderElement = relatedOption.querySelector('.border');
      if (relatedBorderElement) {
        relatedBorderElement.style.border = 'none';
          }
        });
      });
    });
  });
});
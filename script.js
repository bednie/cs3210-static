// Define the template using Mustache.js
const template = `
    <ul>
        {{#data}}
        <li>City: {{name}}, State/Region: {{state}}, Country: {{country}}</li>
        {{/data}}
    </ul>
`;

// Get the 'output' div element
const output = document.getElementById('output');

// Fetch JSON data from the file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Render the data using the template
        const rendered = Mustache.render(template, { data: data });
        output.innerHTML = rendered;
    })
    .catch(error => console.error('Error:', error));

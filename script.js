const data = {
    title: "Welcome to CS3210 Template Engine Lab",
    content: "This is a simple template engine demonstration.",
    author: "Dr.Red",
};

function renderTemplate(template, data) {
    for (const key in data) {
        const regex = new RegExp('{{' + key + '}}', 'g');
        template = template.replace(regex, data[key]);
    }
    return template;
}

const template = `
    <h3>{{title}}</h3>
    <p>{{content}}</p>
    <p>Author: {{author}}</p>
`;

const app = document.getElementById('app');
app.innerHTML = renderTemplate(template, data);

// Define a template using Mustache.js
var template = `
    <ul>
        {{#data}}
        <li>Name: {{name}}, Age: {{age}}, City: {{city}}</li>
        {{/data}}
    </ul>
`;

// Get the 'output' div element
var output = document.getElementById('output');

// Fetch JSON data from the file
fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Render the data using the template
        var rendered = Mustache.render(template, { data: data });
        output.innerHTML = rendered;
    })
    .catch(function(error) {
        console.error('Error:', error);
    });

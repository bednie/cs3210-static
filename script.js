const staticData = {
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

const combinedTemplate = `
    <h3>{{title}}</h3>
    <p>{{content}}</p>
    <p>Author: {{author}}</p>
    <div id="jsonData">
        <ul>
            {{#people}}
            <li>Name: {{name}}, Age: {{age}}, City: {{city}}</li>
            {{/people}}
        </ul>
    </div>
`;

const app = document.getElementById('app');

// First render the static data
app.innerHTML = renderTemplate(combinedTemplate, staticData);

// Then fetch and render the JSON data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const jsonContainer = document.getElementById('jsonData');
        jsonContainer.innerHTML = Mustache.render(`
            <ul>
                {{#data}}
                <li>Name: {{name}}, Age: {{age}}, City: {{city}}</li>
                {{/data}}
            </ul>
        `, { data: data });
    })
    .catch(error => console.error('Error:', error));

// Define the template using Mustache.js
const template = `
    <table>
        <thead>
            <tr>
                <th>City</th>
                <th>State/Region</th>
                <th colspan="2">Country</th>
            </tr>
        </thead>
        <tbody>
            {{#data}}
            <tr>
                <td>{{name}}</td>
                <td>{{state}}</td>
                <td>{{country}}</td>
                <td class="flag">{{flag}}</td>
            </tr>
            {{/data}}
        </tbody>
    </table>
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

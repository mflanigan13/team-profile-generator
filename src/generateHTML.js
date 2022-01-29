// generate html page 
const generateTeamPage = function (team) {
    // create Manager card
    const generateManager = function (manager) {
        return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-secondary">
                <h3 class="text-white">${manager.name}</h3>
                <h4 class="text-white">Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
    }

    // create Engineer card
    const generateEngineer = function (engineer) {
        return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-secondary">
                <h3 class="text-white">${engineer.name}</h3>
                <h4 class="text-white">Engineer</h4><i class="fas fa-glasses"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
    }

    // create Intern card 
    const generateIntern = function (intern) {
        return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-secondary">
                <h3 class="text-white">${intern.name}</h3>
                <h4 class="text-white">Intern</h4><i class="fas fa-user-graduate"></i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
    };

    // push array to page 
    const html = [];
    html.push(
        team.filter(employee => employee.getRole() === 'Manager')
            .map(manager => generateManager(manager))
            .join('')
    )
    html.push(
        team.filter(employee => employee.getRole() === 'Engineer')
            .map(engineer => generateEngineer(engineer))
            .join('')
    )
    html.push(
        team.filter(employee => employee.getRole() === 'Intern')
            .map(intern => generateIntern(intern))
            .join('')
    )

    return html.join('')
}

// export to index
module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-info">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
            ${generateTeamPage(team)}  
            </div>
        </div>
    </div>
    <footer><p>Made with ❤ by <a href="https://github.com/mflanigan13">Mallorie Flanigan</a></p></footer>
</body>
</html>
`
}
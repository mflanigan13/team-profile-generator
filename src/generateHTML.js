const generateTeam = (team) => {
    generateManager();
    generateEngineer();
    generateIntern();
}



module.exports = team => {
    return `
    
    <div>${generateTeam(team)}</div>

    `
}
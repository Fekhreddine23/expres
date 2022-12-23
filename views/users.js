const {users} = require('../database/data.json');

module.exports = `
  <table>
    <tr>
      <th>Pseudo</th>
      <th>Age</th>
      <th>Email</th>
    </tr>
    ${users.map(({ pseudo, age, email, color }) => `
      <tr style="color:${color}">
        <td>${pseudo}</td>
        <td>${age} ans</td>
        <td>${email}</td>
      </tr>
    `).join('')}
  </table>
`;
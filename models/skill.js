const skills = [
  {id: 1, name: 'HTML',       unit_learned: '1'},
  {id: 2, name: 'CSS',        unit_learned: '1'},
  {id: 3, name: 'Javascript', unit_learned: '1'},
  {id: 4, name: 'jQuery',     unit_learned: '1'},
  {id: 5, name: 'node.js',    unit_learned: '2'},
  {id: 6, name: 'express',    unit_learned: '2'}
];

module.exports = {
  getAll,
  getOne
};

function getAll() {
  return skills;
}

function getOne(name) {
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  console.log(`getOne: name = '${name}'`)
  return skills.find(skill => skill.name === name);
}
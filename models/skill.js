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
  getOne,
  create,
  deleteOne
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

function create(skill) {
  console.log(skill);
  // Add the id
  skill.id = Date.now() % 1000000;
  skills.push(skill);
  console.log(skills);
}

function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}
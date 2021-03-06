const fetchPerson = () => {
  return fetch("https://randomuser.me/api")
    .then(x => x.json())
    .then(x => x.results[0].name);
};

const fetchLocation = () => {
  return fetch("https://randomuser.me/api")
    .then(x => x.json())
    .then(x => x.results[0].location);
};

const fetchEmployee = url => {
  return fetch(`http://dummy.restapiexample.com/api/v1/${url}`)
    .then(x => x.json())
    .then(x => x[0]);
};

module.exports = { fetchPerson, fetchEmployee, fetchLocation };

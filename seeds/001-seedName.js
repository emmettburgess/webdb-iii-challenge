exports.seed = function(knex, Promise) {
    return knex('cohorts')
      .truncate()
      .then(function () {
        return knex('cohorts').insert([
          {name: 'WEB19'},
          {name: 'DS2'},
          {name: 'UX5'}
        ]);
      });
  };
const users = [
  { lastName: 'Петров', firstName: 'Алексей', middleName: 'Анатольевич' },
  { lastName: 'Бобров', firstName: 'Андрей', middleName: 'Иванович' },
];

const getFullname = users.map((person, key) => ({
  ...person,
  key,
  fullName: `${person.lastName} ${person.firstName}  ${person.middleName}`,
}));

// [{ firstName: 'Brian', lastName: 'Troncone', fullName: 'Brian Troncone' }, {firstName: 'Todd', lastName: 'Motto', fullName: 'Todd Motto' }]
console.log(getFullname);

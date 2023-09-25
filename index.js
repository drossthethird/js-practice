const names = [
  'John Smith',
  'Emma Johnson',
  'Michael Brown',
  'Olivia Davis',
  'William Wilson',
  'Sophia Martinez',
  'James Anderson',
  'Ava Thomas',
  'David Taylor',
  'Isabella Garcia',
  'Joseph Miller',
  'Mia Rodriguez',
  'Daniel Martinez',
  'Emily Clark',
  'Alexander Rodriguez',
  'Charlotte Lee',
  'Matthew Lewis',
  'Amelia Walker',
  'Benjamin Hernandez',
  'Harper Young',
];

console.log(names);

for (let nameIndex = 0; nameIndex < names.length; nameIndex++) {
  const name = names[nameIndex];
  const domain = 'gmail.com';
  console.log(name);
  const [fname, lname] = name.split(' ');
  // console.log(nameArray)
  const email = `${fname}.${lname}@${domain}`;
  console.log(email);
}

// for (let x = 10; x >=0; x=x-2){
//   console.log(x)
// }

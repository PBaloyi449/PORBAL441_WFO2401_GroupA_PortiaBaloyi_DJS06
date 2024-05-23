// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

//1. ForEach Basics
// Log each name and each province
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

// Log each name with a matching province
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

//2. Uppercase Transformation
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

//3. Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

//4. Alphabetically Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

//5. Filtering the Cape Provinces
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(nonCapeProvinces.length);

//6. Determining if the name contains an "s"
const hasSArray = names.map(name => name.includes('S'));
console.log(hasSArray);

//7. Creating Object Mapping
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);
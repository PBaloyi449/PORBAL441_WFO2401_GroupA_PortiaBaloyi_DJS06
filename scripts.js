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

//Advanced Exercises (Single console.log Execution)
//1. Logging each product name
console.log(products.map(product => product.product).join(', '));

//2. Filter out products with names longer than 5 characters.
console.log(products.filter(product => product.product.length <= 5));

//3. Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
const total = products
  .filter(product => {
    const priceStr = String(product.price).trim();
    return priceStr !== '' && !isNaN(priceStr);
  })
  .reduce((sum, product) => sum + parseFloat(product.price), 0);
console.log(total);

//4. Concatenate Product Names
const concatenatedNames = products.reduce((acc, product) => acc + product.product + ' ', '').trim();
console.log(concatenatedNames);

//5. Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y.
const validProducts = products
  .filter(product => product.price.trim() !== '' && !isNaN(product.price))
  .map(product => ({ ...product, price: parseFloat(product.price) }));

const highestProduct = validProducts.reduce((max, product) => (product.price > max.price ? product : max), validProducts[0]);
const lowestProduct = validProducts.reduce((min, product) => (product.price < min.price ? product : min), validProducts[0]);

console.log(`Highest: ${highestProduct.product}. Lowest: ${lowestProduct.product}.`);

//6. Recreating the products object with keys 'name' and 'cost', maintaining their original values
const transformedProducts = products.map(product => ({ name: product.product, cost: product.price }));
console.log(transformedProducts);





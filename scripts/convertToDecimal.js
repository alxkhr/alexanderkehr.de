const input = process.argv[2];
const converted = input.replace(/./g, (c) => `&#${c.charCodeAt(0)};`);
console.log(converted);

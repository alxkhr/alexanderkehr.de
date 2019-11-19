const s = process.argv[2];
const mod = parseInt(process.argv[3], 10);
const converted = s.replace(/./g, function(c) {
  return String.fromCharCode(c.charCodeAt(0) + mod);
});
console.log(converted);

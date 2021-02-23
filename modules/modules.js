var path = require("path")
var util = require("util")
var v8 = require("v8")

console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.parse(__filename)["ext"])

var nombre = "ga"
var apellido = "lez"
var texto = util.format("Student: %s, %s", nombre, apellido)
console.log(texto)

console.log(v8.getHeapCodeStatistics())
console.log(v8.getHeapStatistics())

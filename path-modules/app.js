const path = require("path");

//! getting filename
console.log(path.basename("/user/files/index.txt"));

//! getting directory name
console.log(path.dirname("/user/files/index.txt"));

//! getting extention name
console.log(path.extname("/user/files/index.txt"))

//!join paths(works across different OS)
console.log(path.join("user","files","index.txt"))

//!getting absolute path
console.log(path.resolve("user","files","index.txt"))

//!getting current filename 
console.log(__filename)

//!getting current directory name 
console.log(__dirname)



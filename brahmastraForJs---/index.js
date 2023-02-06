// splitting code in multiple files and each file is called modules
//--> increase maintability
// --> increase reusability
// --> increase abstraction

// no module system in ES5
// types of module systems
// 1. CommonJS // node.js
// 2. AMD  // run in browser
// 3. ES6 Modules  
// 4. UMD  // browser / node.js


// <---- commonjs ----->
// in node.js --> see after learning node.js


// es6 modules

import { Circle } from './circle.js'; // import --> import a module

const c = new Circle(10);
c.draw();

// ES6 tooling-->   --> for making es6 code work in browser
// 1. Babel --> transpiler  --> transpiler is combination of translator and compiler
// 2. Webpack --> module bundler --> to bundle all modules into one file


// npm is the tool for installing node packages // third party packages
//  babel-cli -> command line interface   (then it will compile the js code)
// babel-core  -> core file wrer all the logic is implemented
// babel-preset-env -> to convert es6 code to basic js code

//  npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev (run this command in terminal to install these packages)
// babel -->
/
// webback 
// to install webpack -->npm i -g webpack-cli@2.0.14 (g --> global)
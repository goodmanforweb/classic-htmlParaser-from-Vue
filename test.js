import convertHtmlStr2AST from './dist/parser/index.js';
import fs from 'fs';
console.log(87870)
const ast = convertHtmlStr2AST(`
<p>
nited States of America,<span>good<</span>
</p>`);

// try {
//     fs.writeFileSync('./ast.js', JSON.stringify(ast, null, 4));
// } catch (error) {
//     console.log(error);
// }


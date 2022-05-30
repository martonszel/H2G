const getFileExtension = filename => {
    // your code here
}

console.log(getFileExtension('data.txt')); // 'txt'
console.log(getFileExtension('component.test.js')); // 'js'
console.log(getFileExtension('README')); // false
console.log(getFileExtension('.git')); // false
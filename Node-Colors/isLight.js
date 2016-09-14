function isLight(luminosity) {
    var r = process.argv[2];
    var g = process.argv[3];
    var b = process.argv[4];
    var luminosity = 0.2126*r + 0.7152*g + 0.0722*b
    
    if (luminosity > 155) {
        return 'light';
    } else {
        return 'dark';
    }
}

console.log(isLight(luminosity))

// Write a separate program that takes a color and returns 'light' if the luminosity is greater than 155 and 'dark' otherwise.
// At this point, you can just copy the luminosity function from the last step into a new file. You'll require it as a module in Part III.
// $ node islight.js 255 239 213 light $ node islight.js 50 15 25 dark

//alternative:
/*
Calculate the luminosity value from the given rgb
var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;

Calculate whether this is light or dark
var islight = luminosity > 155;

Print the result to the console
console.log( islight ? 'light' : 'dark' );
*/

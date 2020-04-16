//Using Anonymous Function
let TitleCase = function(s){
    return s.replace(
        /\w\S*/g,
        function(p) {
            return p.charAt(0).toUpperCase() + p.substr(1).toLowerCase();
        }
    );
}
console.log(TitleCase("hello world"))

//Using Arrow Function
let str = "guvi geeks"

console.log(str.split(' ').map(s => s[0].toUpperCase() + s.substr(1).toLowerCase()).join(' '))

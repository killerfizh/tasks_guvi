var library = [{
title : "JavaScript",
price : 500,
readers : [{
  name : "Person 1",
  count : 300
},
{
  name : "Person 2",
  count : 400
}
],
authorDetails : {
  name : "Raj",
  age : 40
}
},
{
  title : "Nodejs",
  price : 600,
  readers :[],
  authorDetails : {
    name : "Raj",
    age : 40
  }
}
]
console.log(library[0].price) //price of javascript book
console.log(library[1].authorDetails.age) //age of nodejs author
console.log(library[0].readers.length) //number of readers in javascript in console
console.log(library[0].readers[1].count) //count value of person 2

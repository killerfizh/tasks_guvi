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
library[0].readers[1].count = 500 //1a

Object.assign(library[0].authorDetails, { email : "email1@gmail.com" }) //1b

Object.assign(library[1].authorDetails, { email : "email2@gmail.com" })

library[1].readers[0] = "reader1" //1c

library[2] = {
  title : "SQL"
}                  //1d
console.log(typeof library[1].authorDetails.age)

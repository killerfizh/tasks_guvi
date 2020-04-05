var Calci = {
add(a,b){
  return a+b;
},
sub(a,b){
  return a-b;
},
mul(a,b){
  return a*b;
},
div(a,b){
  return a/b;
}
}
var a = 0;
alert("press f three times to exit")
while(a != 'f' || b != 'f' || c != 'f')
{
  a = window.prompt("Enter a number")
  p = Number(a)
  b = window.prompt("Enter a sign")
  c = window.prompt("Enter another number")
  q = Number(c)

if (b=='+')
{
  res = Calci.add(p,q)
  alert(res)
}
else if(b=='-')
{
  res = Calci.sub(p,q)
  alert(res)
}
else if(b=='*')
{
  res = Calci.mul(p,q)
  alert(res)
}
else if(b=='/')
{
  res = Calci.div(p,q)
  alert(res)
}
}

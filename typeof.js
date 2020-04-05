var person = {
	first_name : 'john',
	last_name : 'jacob',
};
var task = [
	typeof 1,
	typeof null,
	typeof undefined,
	typeof 0.50,
	typeof 'k',
	typeof 'hello',
	typeof person,
	];
for (let type of task)
{
	console.log(type);
}
console.log(typeof task);

// Задание 1

// 1) 
// Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
// 2)
// Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.


let obj = {name: 'artur'};
let jsonObj = JSON.stringify(obj);
let jsonName = JSON.parse(jsonObj);

let user = {name: 'artem'};
let jsonUser = JSON.stringify(user);
localStorage.user = jsonUser;
let newUser = localStorage.user;
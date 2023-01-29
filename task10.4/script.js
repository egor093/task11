// Задание 4
// Реализовать функционал мини таск-менеджера.
// Функционально должно работать так: https://ucarecdn.com/a2aeaed4-...
// Затем стилизовать (написать CSS) на свое усмотрение.
// ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
// 1) Описать в html форму с полем input и кнопкой отправки формы. Под формой предусмотреть пустой список ul.
// 2) На событие отправки формы добавлять в список ul элемент li со значением инпута. Сам инпут при этом очищать.
// 3) Внутри добавляющегося li перед текстом должен также добавляться чекбокс.
// Для добавления элемента внутрь в начало используйте метод element.prepend(element).
// 4) При отметке чекбокса задача должна перечеркиваться (становиться выполненной) и перемещаться вниз списка. Если отметку снять - перечеркивание убирается и задача помещается в начало списка.
// Отмеченный чекбокс - js-свойство .checked
// Перечеркнутый текст - CSS-свойство text-decoration: line-through
// 5) К каждой задаче добавить кнопку для удаления, реализовать само удаление.
// Для удаления элементов используется метод element.remove().
// 6) Пропишите CSS, чтобы ваш таск-менеджер выглядел получше: уберите маркеры у списка, оформите кнопки.

const inp = document.querySelector('input');
const ul = document.querySelector('ul');
const noteAll = document.querySelector('.noteAll');
const form = document.querySelector('form');
let tasks = [];
 
if (localStorage.tasks) {
    tasks = JSON.parse(localStorage.tasks);
}

for(let task of tasks){
    let li = document.createElement('li');   
    li.innerText = task;
    let ul = document.querySelector('ul');
    ul.appendChild(li);
}

form.addEventListener('submit',(event) => {
    event.preventDefault();

    tasks.push(inp.value);
    localStorage.tasks = JSON.stringify(tasks);

    let li = document.createElement('li');   
    li.innerText = inp.value; 
    const check = document.createElement('input');
    check.type = 'checkbox';
    li.prepend(check);
    ul.append(li);
    inp.value = '';

    check.addEventListener('click', () => {
        if(check.checked){
            li.style.textDecoration = 'line-through';
            ul.append(li);
        } else{
            li.style.textDecoration = '';
            ul.prepend(li);
        }
});

noteAll.addEventListener('click', () => {
    let allLi = document.querySelectorAll('li');
    allLi.forEach(li => li.style.textDecoration = 'line-through')
});
});




let i =1;
const input = document.getElementById('todoInput');
function addTodo() {
	const ul = document.getElementById('todoList');
	const li = document.createElement('li');
	const hint = document.getElementById('hint');
	if (input.value.trim() === ''){
		hint.textContent = "Ты парнокопытное?";
		return;
	}
	hint.textContent ='';
	ul.appendChild(li);
	let str = input.value;
	str=str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
	li.textContent = str;
	const deleteButton = document.createElement('button');
	li.appendChild(deleteButton);
	deleteButton.textContent = 'X';
	deleteButton.onclick = function(){
		ul.removeChild(li);
	}
	input.value = '';
	addButton.textContent = `Это твоя ${i} задача!`;
	i++;
}

input.addEventListener('keydown',
	function(event){
		if(event.key === 'Enter')
			addTodo();
	}
);
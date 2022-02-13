document.addEventListener('DOMContentLoaded', function(){
	const button = document.querySelector('#submit');
	button.disabled = true;
	const input = document.querySelector('#task');

	input.onkeyup = ()=>{
		if (input.value.length > 0) {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
	};
	input.onblur = ()=>{
		if (input.value.length > 0) {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
	};

	document.querySelector('form').onsubmit = () =>{
		const task = document.querySelector("#task");
		const li = document.createElement('li');
		li.innerHTML = task.value;
		const list = document.querySelector('#tasks');
		list.append(li);
		task.value = '';
		// document.querySelector("#task").value = '';
		button.disabled = true;
		return false;
	};
});
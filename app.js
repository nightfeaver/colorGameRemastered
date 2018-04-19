console.log('connected');

var colors = ['rgb(255, 0, 0)',
				'rgb(255, 255, 0)',
				'rgb(0,255, 0)',
				'rgb(0,255, 255)',
				'rgb(0, 0, 255)',
				'rgb(255, 0, 255)'
				];

var squares = document.querySelectorAll('.square');
console.log(squares);

squares.forEach(function(element,index) {
element.style.backgroundColor=colors[index];
element.addEventListener('click',doSomething) 
});

function doSomething() {
	alert('something selected');
}
console.log('connected');
// change to test github deployment

var colors;
var targetColor;
var pickedColor;
var selectedSquare;
var squares = document.querySelectorAll('.square');
console.log(squares);

setUp();

function setUp() {
	squares.forEach(function(element,index) {
		element.style.backgroundColor=setColors();
		element.addEventListener('click',doSomething) 
	});
	targetColor=squares[Math.floor(Math.random()*squares.length+1)].style.backgroundColor;
	document.getElementById('masthead').style.backgroundColor='black';
	document.getElementById('displayColor').innerHTML=targetColor;
	document.getElementById('reset').addEventListener('click',setUp);
	document.getElementById('reset').addEventListener('mouseover',function() {
		document.getElementById('reset').style.color='yellow'
	});
	document.getElementById('reset').addEventListener('mouseout',function() {
		document.getElementById('reset').style.color='white'
	});
}

function setColors() {
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return 'rgb('+r+' '+g+' '+b+')';

}

function doSomething() {
	
	pickedColor=this.style.backgroundColor;
	selectedSquare=this;
	console.log('target color is '+targetColor);
	console.log(pickedColor);
	if(pickedColor===targetColor) {
		document.getElementById('colorMessage').innerHTML='Correct';
		correct();
	} else {
		document.getElementById('colorMessage').innerHTML='Wrong';
		incorrect(this);
	}
}

function incorrect(square) {
	square.style.backgroundColor='black';
}

function correct() {
	squares.forEach(function(element) {
element.style.backgroundColor=targetColor; 
});
	document.getElementById('masthead').style.backgroundColor=targetColor;
}



// alert(this.style.backgroundColor);
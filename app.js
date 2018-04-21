var numColors=6;
var targetColor;
var pickedColor;
var selectedSquare;
var squares = document.querySelectorAll('.square');

setUp();

function setUp() {
	configureSquares();
	configureMasthead();
}

function configureSquares() {
	squares.forEach(function(square,index) {
		if(index<numColors) {
			square.style.backgroundColor=setColors();
			square.style.display='block';
		};
		if(index>=numColors) {square.style.display='none';};
		square.addEventListener('click',checkAnswer) 
	});
	targetColor=squares[Math.floor(Math.random()*numColors)].style.backgroundColor;
}	

function setColors() {
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return 'rgb('+r+', '+g+', '+b+')';
}

function configureMasthead() {
	document.getElementById('masthead').style.backgroundColor='black';
	document.getElementById('displayColor').innerHTML=targetColor;
	document.getElementById('newColor').addEventListener('click',setUp);
	document.getElementById('newColor').addEventListener('mouseover',function() {
		document.getElementById('newColor').style.color='purple'
	});
	document.getElementById('newColor').addEventListener('mouseout',function() {
		document.getElementById('newColor').style.color='blue'
	});
		document.querySelector('.hard').addEventListener('click',hard);
		document.querySelector('.easy').addEventListener('click',easy);
}

function easy() {
	console.log('easy');
	if(numColors==3) {console.log('already set');return};
	document.querySelector('.easy').classList.add('selected');
	document.querySelector('.hard').classList.remove('selected');
	numColors=3;
	setUp();
}

function hard() {
	console.log('hard');
	if(numColors==6) {console.log('already set');return};
	document.querySelector('.hard').classList.add('selected');
	document.querySelector('.easy').classList.remove('selected');
	numColors=6;
	setUp();
}

function checkAnswer() {
	pickedColor=this.style.backgroundColor;
	selectedSquare=this;
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
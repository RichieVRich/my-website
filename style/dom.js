	let counter = 0;
window.onload=function(){
	var heart = document.getElementById('heart');
	var background = document.querySelector('*'); 
	var text = document.getElementById('type');
	var type = document.getElementsByClassName('a');
	var h1 = document.querySelector('h1');

	background.style.backgroundColor = "black";
	console.log(type);
	type[0].style.width = '100%';

	heart.addEventListener('click', storytime);
	
	function storytime(){
		counter++;
	console.log(counter);
		if( counter < 10){
			reanimate();

		}else{
			console.log('do nothign');
		}

	};
	function reanimate(){
		h1.style.animation = "none";
		setTimeout( myfun,100);
	};

	function myfun(){
		console.log('====myfun' , counter);
		h1.style.animation = "typing .75s steps(30,end),blink-caret .5s step-end infinite";
		switch(counter){
			case 1:
				type[0].innerHTML = "Hello all";
				heart.style.animation = "rainbow 10s linear 0s infinite";
				background.style.backgroundColor = 'maroon';
				break;
			case 2:
				text.innerHTML = "This was a test run";
				background.style.backgroundColor = '#965f00';
				break;
			default:
				break;


		};
	};
	


}// window onload function

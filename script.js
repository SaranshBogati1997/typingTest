const timer = document.getElementById('timer');
const total = document.getElementById('totalScore');
const words = document.getElementById('sampleWord');
const msg = document.querySelector('.correctOrWrong');
const input = document.getElementById('inputWords');

const sample =['baby','feel','so','good','six','words',
'you','never','understood','let','you','five'
,'fingers','tear','nine','there',"rambunctious",
"succeed",
"cars",
"periodic",
"representative",
"fluffy",
"natural",
"bare",
"bright",
"moldy",
"overrated",
"wriggle",
"shame",
"tramp",
"bell",
"disappear",
"sisters",
"bear",
"filthy",
"mourn",
"dangerous",
"uttermost",
"prevent",
"colorful"
];

var level = {
	easy: 5,
	medium: 3,
	hard: 2
};

let levelTime = level.medium;

let score=0;
let time = levelTime;
let isPlaying;
window.addEventListener('load',start);
input.addEventListener('input',check);



function countdown(){
	if(time>0){
		time--;
	}
	else if(time == 0){
		isPlaying = false;
		msg.style.visibility = 'visible';
		msg.innerHTML = 'Game Over';
		
}
timer.innerHTML = time;
}

function check(){
	if(match()){
		time = levelTime + 1;
		score++;
		showWords(sample);
		isPlaying = true;
		input.value ='';
		msg.style.visibility='hidden';
	}else{
		isPlaying=false;
		msg.innerHTML = 'Game Over';


	}
	total.innerHTML =score;

}
function match(){
	if(input.value === words.innerHTML){
		
		return true;
		
	}else{
		return false;
	}
}


function showWords(sample){
let random = Math.floor(Math.random() * sample.length);
words.innerHTML = sample[random];
}

function start(){
	document.getElementById('gg').innerHTML = levelTime;
	total.innerHTML = 0;
	setInterval(countdown,1000);
	showWords(sample);
	if(!isPlaying){
		msg.innerHTML = 'Game Over';
	}
}





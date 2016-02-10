var questions = [
	["What is 3 + 5", 2, 16, 8, 1, "C"],
	["What is 5 - 2", 3, 7, 9, 1, "A"],
	["What is 4 * 7", 22, 28, 25, 40, "B"],
	["What is 4 / 4", 16, 8, 4, 1, "D"],
	["What is 7 - 5", 4, 3, 2, 5, "C"],
	["What is 6 * 4", 24, 26, 30, 40, "A"],
	["What is 5 + 7", 2, 1, 4, 12, "D"]
];
var score = 0;
var correctAns = 0;
var scoreInFuntion;
var done = 0;
var doneProcess;
var body = document.getElementById("container");
var index = 0;
var checked; 
var username = "";
var choices = document.getElementsByName("choices");
var asd = document.getElementById("asd");
function setUsername(){
	username = document.getElementById("username").value;
	var dropdown = '<li><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'+username+' <span class="caret"></span></a>'+
              '<ul class="dropdown-menu">'+
                '<li><a href="index.html">Logout</a></li>'+
              '</ul>'+
            '</li>';
	document.getElementById("change").innerHTML = dropdown;
}
function checkAnswer(){
	if (checked == questions[index][5]) {
		correctAns++
		scoreInFuntion = 100 / questions.length;
        score = score + scoreInFuntion;
	}
	index++
	question();
}
function findChecked(){
for (var i = 0; i < choices.length; i++) {
	if (choices[i].checked) {
		checked = choices[i].value;
	}}
checkAnswer();
}
function enableButton(){
	document.getElementById("sb").removeAttribute("disabled");
}
function processBar(){
	doneProcess = 100 / questions.length;
	done = doneProcess + done;
}
function question(){
	if (index != questions.length) {

		asd.innerHTML = '<div class="progress">'+
  '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="'+done+'" aria-valuemin="0" aria-valuemax="100" style="width: '+done+'%" id="pbar">'+
    '<span class="sr-only">'+done+'% Complete</span>'+
  '</div>'+
'</div>';
	body.innerHTML = '<div id="row">'+
	'<h2 id="ques">Q'+'<sup>'+(index+1)+'</sup>'+': '+questions[index][0]+'</h2><div class="container">'+
	'<label for="ch1" onclick="enableButton()">A.</label>'+
	'  <input type="radio" onclick="enableButton()" name="choices" id="ch1" value="A">  '+
	'<label for="ch1" onclick="enableButton()"> '+questions[index][1]+'</label>'+'<br>'+
	'<label for="ch2" onclick="enableButton()">B.</label>'+
	'  <input type="radio" onclick="enableButton()" name="choices" id="ch2" value="B">  '+
	'<label for="ch2" onclick="enableButton()"> '+questions[index][2]+'</label>'+'<br>'+
	'<label for="ch3" onclick="enableButton()">C.</label>'+
	'  <input type="radio" onclick="enableButton()" name="choices" id="ch3" value="C">  '+
	'<label for="ch3" onclick="enableButton()"> '+questions[index][3]+'</label>'+'<br>'+
	'<label for="ch4" onclick="enableButton()">D.</label>'+
	'  <input type="radio" onclick="enableButton()" name="choices" id="ch4" value="D">  '+
	'<label for="ch4" onclick="enableButton()"> '+questions[index][4]+'</label></div>'+'<br>'+
	'<input type="button" value="Submit" onclick="processBar();findChecked();" class="btn btn-default" id="sb" disabled></div>';
} else {
	asd.innerHTML = '<div class="progress">'+
  '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="'+done+'" aria-valuemin="0" aria-valuemax="100" style="width: '+done+'%">'+
    '<span class="sr-only">'+done+'% Complete</span>'+
  '</div>'+
'</div>';
	body.innerHTML = '<div id="container2"><h2 id="h2">Your Score Is: '+score.toFixed(2)+'%</h2>'+
	'<h2>Correct Answer: '+correctAns+' / '+questions.length+'</h2></div>'
}
}
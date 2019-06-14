var count = 0;
var pic_array = new Array("./pic/1.png","./pic/2.png","./pic/3.png");
var test_array = new Array();
var num = 0;
var colorcount = 0;

var picpic = new Array("./pic/1.png","./pic/2.png","./pic/3.png");
var number = -1;

function sample(){
	var elements = document.getElementsByClassName("main");
	var p = document.createElement('p');
	p.textContent = 'Hello World';
	document.body.appendChild(p);
}
function getDate(){
	var today = new Date();
    var p = document.createElement('p');
    p.textContent = today;
    document.body.appendChild(p);
}
function sampletest(){
	var today = new Date();
	var cre = document.createElement("li");

	var main = document.getElementById("list");
	/* 属性を設定する 例　idをlist1にする*/
	cre.setAttribute("id", "list1");
	/* 中身を入れる */
	cre.innerHTML = today;
	/* 親要素にcreを追加する。*/

	main.appendChild(cre);

	/* 直前に配置する(追加する要素, どこの要素の前に追加するか)
	main.insertBefore(cre, child); */

	/*ボタンを無効化する。*/
	var bu = document.getElementById("button1");
	bu.disabled = "true";
}
function counter(){
	count++;
	console.log(count);
	var button = document.getElementById("test");
	button.innerHTML = count;
	return count;
}
function show(){
	if(num == 2){
		num = 0;
	}else{
		num ++;
    }
    document.getElementById("img1").src = pic_array[num];

}
function slide(ele, abc){
	/* arguments[0]に要素が代入される*/
	/* arguments[1]以降に写真のパスが代入されている。*/

	/*　id要素のsrc属性にarguments[]代入する */
	document.getElementById(ele.id).src = arguments[num + 1];
	num++;
	/* 格納されている写真の数に達したら最初に戻す。*/
	if(num >= (arguments.length - 1)){
		num = 0;
	}
}
function coloreffect() {
	var colorlist = new Array("red", "orange", "yellow", "green", "skyblue", "blue", "purple");
	document.getElementById("colored").style.background = colorlist[colorcount];
	colorcount++;
	if (colorcount == colorlist.length){
		colorcount = 0;
	}
}
function slideshow_timer(){
	if (number == 2){
		number = 0;
	}
	else {
		number++;
	}
	document.getElementById("img").src = picpic[number];
	setTimeout("slideshow_timer()",3000);
}
function testDate(){
	var date = new Date();
	document.getElementById("time").innerHTML = date;
}
















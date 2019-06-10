function sample() {
	var elements = document.getElementsByClassName("main");
	var p = document.createElement('p');
	p.textContent = 'Hello World';
	document.body.appendChild(p);

}

function getDate() {
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
	/*
	main.appendChild(cre);
	*/
	/* 直前に配置する(追加する要素, どこの要素の前に追加するか)*/
	main.insertBefore(cre, child);
	
	/*ボタンを無効化する。*/
	var bu = document.getElementById("button1");
	bu.disabled = "true";
}
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
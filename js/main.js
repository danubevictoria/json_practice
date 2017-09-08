var request = new XMLHttpRequest();

request.open('GET', 'https://codepen.io/timivey/pen/emQZYY.js', true);

request.onload = function () {
	var data = JSON.parse(this.response);
	var name_list = document.getElementById('name_list');

	for (var i = 0; i < data.length; i++) {
		var name = document.createElement('li');
		name_list.appendChild(name);

		name.innerHTML = data[i].name;
	}
};

request.send();
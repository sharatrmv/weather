window.onload = function() {
        		var now = new Date();
        		var monthNames = [
        			'January',
        			'February',
        			'March',
        			'April',
        			'May',
        			'June',
        			'July',
        			'August',
        			'September',
        			'October',
        			'November',
        			'December'
        		];

        		//var today = monthNames[now.getMonth()]+' '+now.getDate() + ', ' + now.getFullYear();
        		//document.getElementById('date').innerHTML = today;
        		

				// var request = new XMLHttpRequest();
				// request.open('GET', 'http://api.weatherapi.com/v1/current.json?key=80459ed7788149fc947145857220603&q=Bangalore&aqi=no');
				// request.send();
				// request.onload = ()=>{
				//     console.log(JSON.parse(request.response));
				// 	//console.log(JSON.parse(request.response.location.name));
				// 				  // do something with myJson
				// }
				// var myJson =JSON.parse(request.response);
				// console.log(myJson.location.name);        		// Completed
        	fetch('http://api.weatherapi.com/v1/current.json?key=80459ed7788149fc947145857220603&q=Bangalore&aqi=no')
				.then(response =>{
				    return response.json();
				}).then(data =>{
				    console.log(data);
				    console.log(data.location.name);
				    document.getElementById('place').innerHTML = data.location.name;
				    document.getElementById('current-cond').innerHTML = data.current.condition.text
				    document.getElementById('temp-val').innerHTML = data.current.temp_f
				    document.getElementById('temp-val').innerHTML = data.current.temp_f
				    var localtime = new Date(data.location.localtime)

				    var today = monthNames[localtime.getMonth()]+' '+localtime.getDate() + ', ' + localtime.getFullYear();
        			document.getElementById('date').innerHTML = today;
				})

			

        	}



var FEN;
//var FEN2 = '1k6/6p1/2P1KpNP/3P1p2/6pp/4Q3/3BP2n/5R2';
		
		function WebSocketAPI() {
			var interval;
			var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRpbmVsQHN0dWQubnRudS5ubyIsInNjb3BlcyI6WyJURU5BTlRfQURNSU4iXSwidXNlcklkIjoiN2QzZjZmNjAtMGRhZS0xMWU4LWIxMGUtMDNlOTQ2MTEwOWNhIiwiZmlyc3ROYW1lIjoiQW5kaW5lIiwibGFzdE5hbWUiOiJMdWljayIsImVuYWJsZWQiOnRydWUsInByaXZhY3lQb2xpY3lBY2NlcHRlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6IjdkM2UwZmQwLTBkYWUtMTFlOC1iMTBlLTAzZTk0NjExMDljYSIsImN1c3RvbWVySWQiOiIxMzgxNDAwMC0xZGQyLTExYjItODA4MC04MDgwODA4MDgwODAiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTUzNDkyNDM5OCwiZXhwIjoxNTQzOTI0Mzk4fQ.LyYHLdn-iUn9FDqN5x-Kou8iejdaY7QF1z_cbzlE_vE7DtXzytBHUbUKf6EDNjyzOc3Ra6NPbIM6iy61nyM92Q";//"refreshToken":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRpbmVsQHN0dWQubnRudS5ubyIsInNjb3BlcyI6WyJSRUZSRVNIX1RPS0VOIl0sInVzZXJJZCI6IjdkM2Y2ZjYwLTBkYWUtMTFlOC1iMTBlLTAzZTk0NjExMDljYSIsImlzUHVibGljIjpmYWxzZSwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJqdGkiOiI2NGQxZTgxNy0wODI5LTQ3MzUtODVjMy1hNjhiNzVkOGJkYzkiLCJpYXQiOjE1MzQ5MjQzOTgsImV4cCI6MTU3MDkyNDM5OH0.9SzTvW5mHWowQZMW_vmu-zBvk0R6w3fkZ61yriAYOxyx6MV9Rxr1qqa8TEvIzWjSeGcPBxoyweX4qqoLWruD2A";
            var entityId = "f2423ad0-2c2c-11e8-9a77-c3b186e30863";
            var webSocket = new WebSocket("wss://demo.thingsboard.io/api/ws/plugins/telemetry?token=" + token);
           

            webSocket.onopen = function () {
                var object = {
                    tsSubCmds: [
                        {
                            entityType: "DEVICE",
                            entityId: entityId,
                            scope: "LATEST_TELEMETRY",
                            cmdId: 10
                        }
                    ],
                    historyCmds: [],
                    attrSubCmds: []
                };
                var data = JSON.stringify(object);
                webSocket.send(data);
            
            };

            
			webSocket.onmessage = function (event) {
                var received_msg = event.data;
				
				
                // Parse JSON message
                var received_obj = JSON.parse(event.data);


                // Check if object contains the data
		   
		if (received_obj.data.FEN) {
                           
			//document.getElementById("tx1").innerHTML = (received_obj.data.FEN[0][1]);
			FEN = (received_obj.data.FEN[0][1]);	
			console.log(FEN);
			setFEN();
			
		

		
                }             

			};	
			

            webSocket.onclose = function (event) {
               //alert("Connection is closed!");
            };
        }


interval = setInterval(WebSocketAPI, 2000);


var FEN;
//var FEN2 = '1k6/6p1/2P1KpNP/3P1p2/6pp/4Q3/3BP2n/5R2';
		
		function WebSocketAPI() {
			var interval;
			var token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRpbmVsQHN0dWQubnRudS5ubyIsInNjb3BlcyI6WyJURU5BTlRfQURNSU4iXSwidXNlcklkIjoiN2QzZjZmNjAtMGRhZS0xMWU4LWIxMGUtMDNlOTQ2MTEwOWNhIiwiZmlyc3ROYW1lIjoiQW5kaW5lIiwibGFzdE5hbWUiOiJMdWljayIsImVuYWJsZWQiOnRydWUsImlzUHVibGljIjpmYWxzZSwidGVuYW50SWQiOiI3ZDNlMGZkMC0wZGFlLTExZTgtYjEwZS0wM2U5NDYxMTA5Y2EiLCJjdXN0b21lcklkIjoiMTM4MTQwMDAtMWRkMi0xMWIyLTgwODAtODA4MDgwODA4MDgwIiwiaXNzIjoidGhpbmdzYm9hcmQuaW8iLCJpYXQiOjE1MjE1NDM0MzEsImV4cCI6MTUzMDU0MzQzMX0.P3UKQ9FwGEJdunEMp8BilUl7T5dVb5vPpAGyKVWW63h6Z_RTXM6v54Z2engnjIGCsWkBU2jASelmOsnUNXEG9Q";
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


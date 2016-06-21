flag=0;

function xhrTest(res, n, time, count){
	
	var xhrRes = new XMLHttpRequest();
	xhrRes.open("GET", res, true);
	xhrRes.setRequestHeader( "If-Modified-Since", "Sat, 1 Jan 2000 00:00:00 GMT" ); // IE "compability"
	xhrRes.send();
	
	xhrRes.onreadystatechange = function() {
		if (xhrRes.readyState == 4 && xhrRes.status == 200) {
			count--;
			if(!count) flag=1;
			
			console.log(xhrRes.responseText);
			if(!flag)
			{
				setTimeout(
					function(){
						for(var i=0;i<n;i++)
							xhrTest(res,n);
					},time);
			}
			
				
		}
	}
}

function stressTest(res, n, time, count)
{	
	
	for(var i=0;i<n;i++)
		xhrTest(res, n, time, count);
	
}
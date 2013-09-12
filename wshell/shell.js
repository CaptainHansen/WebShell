/*
 * Copyright (c) 2013 Stephen Hansen (www.hansencomputers.com)
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE. 
 */

$(document).ready(function(){
	$('#cmd').keydown(function(event){
		if(event.keyCode == 13){
			run_query();
		}
	});
});

function run_query(){
	easyj = new EasyJax('do.php','EXEC',function(data,pdat){
//		if(data.dberr != undefined){
//			$('#results').prepend("<div style=\"color: red;\">"+pdat.cmd+"<br>"+data.dberr+"</div><hr>");
//		} else {
			var color = 'red';
			if(data.retval == 0) color = 'green';
			
			var html = "<div style=\"color: "+color+";\">"+pdat.cmd+" -> "+data.retval+"</div>";
			html += "<div style=\"font-family: Courier; padding-top: 10px;\">"+data.results+"</div>";
			html += "<hr>";
			$('#results').prepend(html);
//		}
	});
	easyj.set_send_data('cmd',$('#cmd').val());
	
	easyj.submit_data();
}

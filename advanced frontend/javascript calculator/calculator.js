$(document).ready(function(){
	var arr = [];
	var eql = false;
	$('button.1').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('1');
		}
	});
	$('button.2').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('2');
		}
	});
	$('button.3').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('3');
		}
	});
	$('button.4').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('4');
		}
	});
	$('button.5').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('5');
		}
	});
	$('button.6').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('6');
		}
	});
	$('button.7').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('7');
		}
	});
	$('button.8').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('8');
		}
	});
	$('button.9').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('9');
		}
	});
	$('button.zero').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('0');
		}
	});
	$('button.decimal').on('click', function(){
		if(eql == true){
		$('#current').empty();
		eql = false;
		}else if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
		}else{
		$('#current').append('.');
		}
	});
	$('button.Clear').on('click', function(){
		$('#current').empty();
		$('#oplist').empty();
		arr = [];
		eql = false;
	});
	$('button.multiply').on('click', function(){
		if($('#current').text() != ''){
		arr.push($('#current').text());
		arr.push('X');
		$('#oplist').text(arr.join(''));
		$('#current').empty();
		}
	});
	$('button.divide').on('click', function(){
		if($('#current').text() != ''){
		arr.push($('#current').text());
		arr.push('/');
		$('#oplist').text(arr.join(''));
		$('#current').empty();
		}
	});
	$('button.subtract').on('click', function(){
		if($('#current').text() != ''){
		arr.push($('#current').text());
		arr.push('-');
		$('#oplist').text(arr.join(''));
		$('#current').empty();
		}
	});
	$('button.add').on('click', function(){
		if($('#current').text() != ''){
		arr.push($('#current').text());
		arr.push('+');
		$('#oplist').text(arr.join(''));
		$('#current').empty();
		}
	});
	$('button.ClearEntry').on('click', function(){
		if($('#current').text() != ''){
			$('#current').empty();
			eql = false;
		}else{
			arr.pop();
			arr.pop();
			$('#oplist').text(arr.join(''));
			eql = false;
		}
	});
	$('button.equals').on('click', function(){
		if($('#current').text() != ''){
		arr.push($('#current').text());
		}
		if($('#current').text() == '' || $('#current').text() == ''){
			arr.pop();
		}
			$('#current').empty();
			$('#oplist').empty();
			var str = arr.join('');
			str = str.replace(/X/g, '*');
			$('#current').text(eval(str));
			arr = [];
			eql = true;
			if($('#current').text().length >= 12){
			$('#current').text('       error');
			alert('error: character limit is 12, please clear to continue.');
			}
	});
});

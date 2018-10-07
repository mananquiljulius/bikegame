$('#go').click(function(){

	function checkIfComplete() {
		if (isComplete == false) {
			isComplete = true;
		}
		else if (placer == 2) {
			placer = 3;
			place = ' 3rd';
		}
		else if (placer == 3) {
			placer = 4;
			place = ' 4th';
		}
		else {
			placer = 2;
			place = ' 2nd';
		}
	}


	let bikeWidth = $('#bike1').width();

	let raceTrackWidth = $(window).width() - bikeWidth;

	let raceTime1 = Math.floor( (Math.random() * 10000) + 1 );
	let raceTime2 = Math.floor( (Math.random() * 10000) + 1 );
	let raceTime3 = Math.floor( (Math.random() * 10000) + 1 );
	let raceTime4 = Math.floor( (Math.random() * 10000) + 1 );

	let isComplete = false;
	let place = ' 1st You Win';
	let placer = 1;

	$('#bike1').animate ({
		left: raceTrackWidth

	}, raceTime1,function() {

		checkIfComplete();

		$('#raceInfo1 span').text(place);
	});

	$('#bike2').animate ({
		left: raceTrackWidth

	}, raceTime2,function() {

		checkIfComplete();

		$('#raceInfo2 span').text(place);
	});

	$('#bike3').animate ({
		left: raceTrackWidth

	}, raceTime3,function() {

		checkIfComplete();

		$('#raceInfo3 span').text(place);
	});

	$('#bike4').animate ({
		left: raceTrackWidth

	}, raceTime4,function() {

		checkIfComplete();

		$('#raceInfo4 span').text(place);
	});
});

$('#reset').click(function(){
	$('.bike').css('left', '0');
	$('.raceInfo span').text('');
})
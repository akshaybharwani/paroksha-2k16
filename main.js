$(document).ready(function () {
	'use strict';
	var elOffset = $("#main-page2").offset(),
		$document = $(document);
	
	//$document.scroll(function () {
	//	if ($document.scrollTop() >= elOffset.top) {
	//		$("#main-title-p").html("EVENTS").slideUp('slow');
	//	}
	//});
	
	
	$document.scroll(function () {
		if ($document.scrollTop() >= elOffset.top) {
			$("#main-title-p").animate({"html": "EVENTS"}, 1000);
			//$("#title2").css("background-color", "yellow");
			//$("#title2 p").html("SECOND");
		}// else {
			//$("#title2").css("background-color", "blue");
			//$("#title2 p").html("AKSHAY");
			//}
	});
	
	console.log(this);
});
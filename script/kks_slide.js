$(document).ready(function(){
		

	var pofile_no = 0;
	var rolling_p = null;

	pofile_next = function(){
		if (pofile_no < $(".slide_box .port").length-1){
			pofile_no++
		} else {
			pofile_no = 0
		}
		$(".slide_box .port").fadeOut(500);
		$(".slide_box .port:eq(" + pofile_no + ")").fadeIn(500);
		//rolling_psetTimeout("pofile_next()",50000);

	};

	$(".slide_box .next").click(function(){
		clearTimeout(rolling_p);
		pofile_next();
	});
	
	$(".slide_box .prev").click(function(){
		clearTimeout(rolling_p);
		if (pofile_no > 0){
			pofile_no--
		}else{
			pofile_no = $(".slide_box .port").length-1
		}
		$(".slide_box .port").fadeOut(500);
		$(".slide_box .port:eq(" + pofile_no + ")").fadeIn(500);
		//rolling_psetTimeout("pofile_next()",50000);
	});

});
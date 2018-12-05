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
		rolling_p = setTimeout("pofile_next()",50000);

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
		rolling_p = setTimeout("pofile_next()",50000);
	});

	$(".slide_box .bottom_list li").mouseover(function(){
		if (pofile_no != $(".slide_box .bottom_list li").index($(this))){
			clearTimeout(rolling_p);
			pofile_no=$(".slide_box .bottom_list li").index($(this));
			$(".slide_box .bottom_list li").hide();
			$(".slide_box .bottom_list li:eq("+visualno+")").show();
			$(".slide_box .pht").fadeOut(500);
			$(".slide_box .pht:eq("+visualno+")").fadeIn(500);
			rolling_p = setTimeout("pofile_next()",5000);
		};
	});

	

});
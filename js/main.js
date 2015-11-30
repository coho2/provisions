$(document).ready(function() {
		$("#navBtn").click(function(){
		$("nav").slideToggle();
		$(this).toggleClass("navActive"); // "this" refers to parent, so this case, navBtn
		

	}); //end click function

var clickCount = 0;
	var sliderTotal = $("ul.gallery-slider li").size(); 	//alert(sliderTotal)

	function checkArrows(target) {
		console.log(target);
		if (target <=0) {
			$("#slider-previous").hide();
			} else if (target > 0 && target < sliderTotal-1) {
				$("#slider-previous").show();
				$("#slider-next").show();
			}
			else if (target >= sliderTotal-5) {
				$("#slider-next").hide();

			}
		}; //checkArrows

	checkArrows(clickCount);	

	


	$("#slider-next").click(function() {
		//console.log("click test, slider next");
		if (clickCount >= sliderTotal-1) {

		} else {
			$("ul.gallery-slider").animate({
				"margin-left" : "-=500px"
			}); //animate method end
			clickCount++;
			checkArrows(clickCount);
		}; // end if

	}); //click method end

	$("#slider-previous").click(function() {
		//console.log("click test, slider prev");
		if (clickCount <=0) {

		} else {
		$("ul.gallery-slider").animate({
			"margin-left" : "+=500px"
		}); //animate end
		clickCount--;
		checkArrows(clickCount);
		}; //end if
	}); //click method end

}); //end ready
 $(document).ready(function(){
	 
	 // MIXITUP (STICKY MENU)
	 
	 $("js--services-section").waypoint(function(direction){
		 if (direction == "down") {
			 $("nav").addClass("sticky");
		 } else {
			 $("nav").removeClass("sticky");
		 }
	 });
	 
	 // MIXITUP (PRTFOLIO SECTION)
	var mixer = mixitup('.row');
 });


"use strict";
var div = document.getElementById("aaa");
div.onscroll = function () {
	console.log(document.getElementById("aaa").scrollTop);
var header = document.getElementById("header");
var drawer_icon = document.querySelector(".mdl-layout__drawer-button i");
    if (document.getElementById("aaa").scrollTop >= 370 ) {
        header.style.backgroundColor = "#3D1C05";
        drawer_icon.style.color = "#3D1C05";
    } 

    else {
         header.style.backgroundColor = "transparent";
         drawer_icon.style.color = "white";
    }
};

var inputs_with_calendars = document.getElementsByClassName("mdl-textfield__input--date-picker");
for (var i = 0; i < inputs_with_calendars.length; i++) {
inputs_with_calendars[i].value = GetCurrDate();
var div_parent =  inputs_with_calendars[i].parentNode;
for (var j = 1; j < div_parent.childNodes.length; j+=2) {
if (div_parent.childNodes[j].className.includes("calendar-picker")) {
inputs_with_calendars[i].onclick = function(){
var div_parent =  this.parentNode;
        for (var j = 1; j < div_parent.childNodes.length; j+=2) {
if (div_parent.childNodes[j].className.includes("calendar-picker")) {
	if(div_parent.childNodes[j].firstChild == null){
	WorkWithCalendar(div_parent.childNodes[j], this);
}
break;
}
}
};
}
}
}


function initMap() {
  // The location of MyCoffee cafe
  var mycoffee = {lat: 48.460394, lng: 35.046892};
  // The map, centered at MyCoffee cafe
  var map = new google.maps.Map(
      document.getElementById('mdl-map--mycoffee-geomarker'), {zoom: 16, center: mycoffee});
  // The marker, positioned at MyCoffee cafe
  var marker = new google.maps.Marker({position: mycoffee, map: map});
};

function WorkWithCalendar(div_for_calendar, target){
	console.log(div_for_calendar);
		var calendar = jsCalendar.new(div_for_calendar, GetCurrDate(), {
			language: "en",
			zeroFill: false,
			monthFormat: "month YYYY",
			dayFormat: "D",
			firstDayOfTheWeek: 1,
			navigator: true,
			navigatorPosition: "both"

		});

		calendar.onDateClick(function(event, date){
		var target_day=date.getDate();
		var target_month=date.getMonth()+1;
		var target_year=date.getFullYear();
		var target_date=target_day + "/" + target_month + "/" + target_year;
        target.value=target_date;
        var div_parent =  target.parentNode;
        for (var j = 1; j < div_parent.childNodes.length; j+=2) {
if (div_parent.childNodes[j].className.includes("calendar-picker")) {
	while(div_parent.childNodes[j].firstChild){
div_parent.childNodes[j].removeChild(div_parent.childNodes[j].firstChild);
	}

}
}
		});


};

function GetCurrDate(){
		var curr_date=new Date();
		var curr_day=curr_date.getDate();
		var curr_month=curr_date.getMonth()+1;
		var curr_year=curr_date.getFullYear();
		var target_date = curr_day + "/" + curr_month + "/" + curr_year;
		return target_date;

}




//var oUrlStart = 'http://www.toepfer.com.ar/ToepferTruckv20/Service.svc/';
var oUrlStart = 'http://localhost:59054/Service.svc/';
//var oUrlStart = 'http://localhost/ToepferTruckv20/Service.svc/';
//var oUrlStart = 'http://BAI-PC-29036/ToepferTruckv20/Service.svc/';

//var oUrlStart = 'http://www.jm2.com.ar/Service.svc/'
var Interval = 60000;

var oMovileIn = 'X';



function DateTimeToNumber(today) {
  //  today = new Date();
    Year = today.getFullYear();
    Month = today.getMonth();
    Day = today.getDate();
    Hours = today.getHours();
    Minutes = today.getMinutes();
    Seconds = today.getSeconds();


    Month = check00(Month);
    Day = check00(Day);
    Hours = check00(Hours);
    Minutes = check00(Minutes);
    Seconds = check00(Seconds);

    return parseInt(Year + Month + Day + Hours + Minutes+Seconds);
}

function check00(i) {
    if (i < 10) { i = "0" + i; } return i; 
  }
   

function ExitApp() {
//    if (isphone() == true) {
//        navigator.notification.beep(2);
//        navigator.notification.vibrate(3000);
//    }
    navigator.app.exitApp();
}


function isphone() {
    var app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    if (app) {
        return true;
    } else {
        return false;
    }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function showin(ref) {
    document.getElementById(ref).style.opacity = '1';
}


function bodyonload() {
    document.addEventListener("deviceready", onDeviceReady, false);
    showin("controles");

    //              showin("mainStatusLine");
}

function onDeviceReady() {
    // AÃ±ade una funciÃ³n 'callback' al evento 'backbutton'
    document.addEventListener("backbutton", onBackKeyDown, false);
    oMovileIn = device.uuid;
}

function onBackKeyDown() {
    //    alert("onBackKeyDown");
    //    alert($.mobile.activePage.attr('id'));
    navigator.app.exitApp();

}



function show(object) {
    document.getElementById(object).style.visibility = "visible";
}

function hide(object) {
    document.getElementById(object).style.visibility = "hidden";
}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

		
	
    
 
    function getQueryVariable(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0; i < vars.length; i++) {
       var pair = vars[i].split("=");
       if(pair[0] == variable) {
           return pair[1];
       }
   }
   return false;
}

function IsNumeric(expression) {
    return (String(expression).search(/^\d+$/) != -1);
}
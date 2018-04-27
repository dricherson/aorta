/* 
  ------------------------------------
  PVII Menu CSS Express Drop-Down Menu
  by Project Seven Development
  www.projectseven.com
  ------------------------------------
 */
function $(d){
    return document.getElementById(d);
}

function viewCartFunc (){
    document.viewCart.cmd.value = "_cart";
    document.viewCart.business.value = "ZHKRFTH8CW88U" ;
    document.viewCart.display.value = "1" ;
    document.viewCart.submit() ;
}

function HideContent(d) {
    var elem, vis;
    elem = $( d );
    vis = elem.style;
    // if the style.display value is blank we try to figure it out here
    if(vis.display==''&&elem.offsetWidth!=undefined&&elem.offsetHeight!=undefined)
        vis.display = (elem.offsetWidth!=0&&elem.offsetHeight!=0)?'block':'none';
    vis.display = 'none';
}

function ShowContent(d) {
    HideAll();
    var elem, vis;
    elem = $( d );
    vis = elem.style;
    // if the style.display value is blank we try to figure it out here
    if(vis.display==''&&elem.offsetWidth!=undefined&&elem.offsetHeight!=undefined)
        vis.display = (elem.offsetWidth!=0&&elem.offsetHeight!=0)?'block':'none';
    vis.display = 'block';
}

function ReverseContentDisplay(d) {
    if(d.length < 1)
    {
        return;
    }
    if($(d).style.display == "none")
    {
        $(d).style.display = "block";
    }
    else
    {
        $(d).style.display = "none";
    }
}

function HideAll(){
    /* Replace by traversing the displayed divs and closing them*/
    HideContent('intro');
    HideContent('eventImages');
    HideContent('locationImages');
    HideContent('eventInfo');
    HideContent('calendar');
    HideContent('aorta_mission');
    HideContent('aorta_board');
    HideContent('aorta_contact');
    HideContent('comingsoon');
    HideContent('ArtGrants');
    HideContent('artgrantform');
    HideContent('volunteerform');
    HideContent('Maps');
    HideContent('Maps');
    /*
    HideContent('mattCoaching');
    HideContent('mattMemo');
    HideContent('mattScholarship');
    HideContent('mattHTCM');
    HideContent('merchandise');
    HideContent('trophies');
    HideContent('teamregform');
    HideContent('BowlResults');
    HideContent('CurrentTeams');
    HideContent('Sponsors');
    HideContent('tshirtOrder');
    HideContent('longSleeveOrder');
    HideContent('sweatShirtOrder');
    HideContent('hoodieOrder');
    HideContent('passOrder');
    HideContent('buttonOrder');
    HideContent('sponsorshipform');
    */
}



function P7_ExpMenu(){ //v1.1.0.2 by PVII-www.projectseven.com
    if(navigator.appVersion.indexOf("MSIE")==-1){
        return;
    }
    var listItem;
    var menuBarHoverClass='p7hvr';
    var menuBarId='p7menubar';
    var regexFilter=/\s*p7hvr/;
    var elem;
    var className;
    var listItemCount;
    var i,nn='';
    for(i=0;i<10;i++){
        elem=$(menuBarId+nn);
        //g=document.getElementById(menuBarId+nn);
        if(elem){
            listItem=elem.getElementsByTagName("LI");
            if(listItem){
                for(listItemCount=0;listItemCount<listItem.length;listItemCount++){
                    listItem[listItemCount].onmouseover=function(){
                        className=this.className;
                        cl=(className)?className+' '+menuBarHoverClass:menuBarHoverClass;
                        this.className=cl;
                    };
                    listItem[listItemCount].onmouseout=function(){
                        className=this.className;
                        this.className=(className)?className.replace(regexFilter,''):'';
                    };
                }
            }
        }nn=i+1;
    }
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime, message) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var messageSpan = clock.querySelector('.clockMessage');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    messageSpan.innerHTML = message;
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var schedule = [
    ['April 20 2018', 'May 01 2018', 'Until A.O.R.T.A. 2018 tickets go on sale at <a href="http://www.burnertickets.com/">BurnerTickets</a>'],
    ['May 02 2018', 'August 24 2018', 'Until <a href="https://www.facebook.com/events/866728863513899/">A.O.R.T.A. 2018!!!</a>']
];

function initCountDown(){
    // iterate over each element in the schedule
    for(var i=0; i<schedule.length; i++){
      var startDate = schedule[i][0];
      var endDate = schedule[i][1];
      var message = schedule[i][2];

      // put dates in milliseconds for easy comparisons
      var startMs = Date.parse(startDate);
      var endMs = Date.parse(endDate);
      var currentMs = Date.parse(new Date());

      // if current date is between start and end dates, display clock
      if(endMs > currentMs && currentMs >= startMs ){
          initializeClock('clockdiv', endDate, message);
      }
    }
}
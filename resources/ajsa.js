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
    HideContent('mattImages');
    HideContent('mattCoaching');
    HideContent('mattMemo');
    HideContent('mattScholarship');
    HideContent('mattHTCM');
    HideContent('bowlInfo');
    HideContent('merchandise');
    HideContent('trophies');
    HideContent('teamregform');
    HideContent('ajsa_mission');
    HideContent('ajsa_board');
    HideContent('ajsa_contact');
    HideContent('comingsoon');
    HideContent('BowlResults');
    HideContent('CurrentTeams');
    HideContent('Scholarships');
    HideContent('Sponsors');
    HideContent('Maps');
    HideContent('tshirtOrder');
    HideContent('longSleeveOrder');
    HideContent('sweatShirtOrder');
    HideContent('hoodieOrder');
    HideContent('passOrder');
    HideContent('buttonOrder');
    HideContent('scholorshipform');
    HideContent('volunteerform');
    HideContent('sponsorshipform');
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

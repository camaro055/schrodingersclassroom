// JavaScript Document
<!--
function MM_callJS(jsStr) { //v2.0
  return eval(jsStr)
}

function load()
{
	ajaxpage('include/average_rating.php?id=<?php echo $id; ?>', 'average_rating');
	ajaxpage('include/rating.php?id=<?php echo $id; ?>', 'rateWindow');
}

function star(n) {
	var n,i,y,x;
	img_name = new Array;
	img_src = "images/rate_star_small.jpg";
	img_src2 = "images/rate_star_small_mo.gif";
	
	document.rateform.rate.value = n;
	
	if (n<5) {
		y = n+1;
	} else {
		y = 0;
	}
	
	for (i=1; i<=n; i++) {
		img_name[i] = "Star"+i;
		document[img_name[i]].src=img_src;	
	}
		
	if (y>0) {
		for (x=y; x<=5; x++) {
			img_name[x] = "Star"+x;
			document[img_name[x]].src=img_src2;	
		}
	}
}

function submit_form() {
	var id,rate

	rate = document.rateform.rate.value;
	id = document.rateform.id.value;
	
	ajaxpage('include/average_rating.php?rating='+rate+'&id='+id+'&new=1', 'average_rating');
	ajaxpage('include/rating.php?inactive=1&rate='+rate, 'rateWindow');


}

function doButtons1() {
	document['add_image'].src="/mediaplayer/images/mediaplayer_add_this_icon_mo.gif";
}

function doButtons2() {
	document['add_image'].src="/mediaplayer/images/mediaplayer_add_this_icon.gif";
}


function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//-->

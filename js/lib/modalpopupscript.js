
(function(popupmodal){
	popupmodal.fn.visualLightbox=function(visual){
	 var Getpopup=null,var1=["select","object","embed"],var2=null,var3=null,var4=0,var5=50,var6,var7,var8=null,var9=[];
	if(!document.getElementsByTagName){
		return
	}
	visual=popupmodal.extend({
		animate:true,
		autoPlay:true,
		borderSize:39,
		containerID:document,
		enableSlideshow:true,
		googleAnalytics:false,
		descSliding:true,
		imageDataLocation:"south",
		shadowLocation:"",
		closeLocation:"",
		initImage:"",
		loop:true,
		overlayDuration:0.2,
		overlayOpacity:0.7,
		prefix:"",
		classNames:"vlightbox",
		resizeSpeed:7,
		showGroupName:false,
		slideTime:4,
		strings:{
			closeLink:"",
			loadingMsg:"loading",
			nextLink:"",
			prevLink:"",
			startSlideshow:"",
			stopSlideshow:"",
			numDisplayPrefix:"",
			numDisplaySeparator:"/"
		},
		openByHover:false,
		enableRightClick:false,
		featBrowser:true,
		breathingSize:10,
		startZoom:false,
		floating:true
	},visual);
	if(visual.animate){
	   var var10=Math.max(visual.overlayDuration,0);visual.resizeSpeed=Math.max(Math.min(visual.resizeSpeed,10),1);
	   var var11=(11-visual.resizeSpeed)*0.15
	}else{
	   var var10=0;var var11=0
	}
	   var var12=visual.enableSlideshow;visual.overlayOpacity=Math.max(Math.min(visual.overlayOpacity,1),0);
	   var var13=visual.autoPlay;
	   var var14=popupmodal(visual.containerID);
	   var var15=visual.classNames;var16();
	   var var17=var14.length&&var14.get(0)!=document?var14.get(0):document.getElementsByTagName("body").item(0);
	if(var17.childNodes.length){
	   popupmodal(var17.childNodes[0]).before(popupmodal("<div></div>"));var17=var17.childNodes[0]
	}
	function modalpopup1(param1,param2,param3){
	   (popupmodal("#"+param1).unbind())[param2](param3)
	}

	if(!document.getElementById(modalpopup2("overlay"))){
	   var variable1=document.createElement("div");variable1.setAttribute("id",modalpopup2("overlay"));variable1.style.display="none";var17.appendChild(variable1);
	   var variable2=document.createElement("div");variable2.setAttribute("id",modalpopup2("lightbox"));variable2.style.display="none";var17.appendChild(variable2);
	   var variable3=document.createElement("div");variable3.setAttribute("id",modalpopup2("imageDataContainer"));variable3.className=modalpopup2("clearfix");
	   var variable4=document.createElement("table");variable4.setAttribute("id",modalpopup2("outerImageContainer"));variable4.cellSpacing=0;variable2.appendChild(variable4);
	   var variable5=variable4.insertRow(-1);
	   var variable6=variable5.insertCell(-1);variable6.className="tl";
	   var variable7=variable5.insertCell(-1);variable7.className="tc";
	   var variable8=variable5.insertCell(-1);variable8.className="tr";
	   var variable9=variable4.insertRow(-1);
	   var variable10=variable9.insertCell(-1);variable10.className="ml";
	   var variable11=variable9.insertCell(-1);variable11.setAttribute("id",modalpopup2("lightboxFrameBody"));
	   var variable12=variable9.insertCell(-1);variable12.className="mr";
	   var variable13=variable4.insertRow(-1);
	   var variable14=variable13.insertCell(-1);variable14.className="bl";
	   var variable15=variable13.insertCell(-1);variable15.className="bc";
	   var variable16=variable13.insertCell(-1);variable16.className="br";
	   if(visual.imageDataLocation=="north"){
		variable11.appendChild(variable3)
	   }
	   var variable17=document.createElement("div");variable17.setAttribute("id",modalpopup2("imageData"));variable3.appendChild(variable17);
	   var variable18=document.createElement("div");variable18.setAttribute("id",modalpopup2("imageDetails"));variable17.appendChild(variable18);
	   var variable19=document.createElement("div");variable19.setAttribute("id",modalpopup2("caption"));variable18.appendChild(variable19);variable19.style.display="none";
	   var variable20=document.createElement("span");variable20.setAttribute("id",modalpopup2("numberDisplay"));variable18.appendChild(variable20);
	   var variable21=document.createElement("span");variable21.setAttribute("id",modalpopup2("detailsNav"));variable18.appendChild(variable21);
	   var variable22=document.createElement("a");variable22.setAttribute("id",modalpopup2("prevLinkDetails"));variable22.setAttribute("href","javascript:void(0);");variable22.innerHTML=visual.strings.prevLink;variable21.appendChild(variable22);
	   var variable23=document.createElement("a");variable23.setAttribute("id",modalpopup2("slideShowControl"));variable23.setAttribute("href","javascript:void(0);");variable21.appendChild(variable23);
	   var variable24=document.createElement("a");variable24.setAttribute("id",modalpopup2("closeLink"));variable24.setAttribute("href","javascript:void(0);");variable24.innerHTML=visual.strings.closeLink;
	   if(visual.closeLocation=="nav"){
		variable21.appendChild(variable24)
	   }else{
	   var variable25=document.createElement("div");variable25.setAttribute("id",modalpopup2("close"));if(visual.closeLocation=="top"){variable8.appendChild(variable25)}else{variable17.appendChild(variable25)}variable25.appendChild(variable24)
	   }
	   var variable26=document.createElement("a");variable26.setAttribute("id",modalpopup2("nextLinkDetails"));variable26.setAttribute("href","javascript:void(0);");variable26.innerHTML=visual.strings.nextLink;variable21.appendChild(variable26);
	   var variable27=document.createElement("div");variable27.setAttribute("id",modalpopup2("imageContainerMain"));variable11.appendChild(variable27);
	   var variable28=document.createElement("div");variable28.setAttribute("id",modalpopup2("imageContainer"));variable27.appendChild(variable28);
	   var variable29=document.createElement("img");variable29.setAttribute("id",modalpopup2("lightboxImage"));variable28.appendChild(variable29);
	   if(!visual.enableRightClick){
			var variable30=document.createElement("div");variable30.setAttribute("id",modalpopup2("hoverNav"));variable30.style.background="white";variable30.style.opacity=0;variable30.style.filter="alpha(opacity=0)";variable28.appendChild(variable30)
	   }
	   var variable31=document.createElement("a");variable31.setAttribute("id",modalpopup2("prevLinkImg"));variable31.setAttribute("href","javascript:void(0);");variable27.appendChild(variable31);
	   var variable32=document.createElement("a");variable32.setAttribute("id",modalpopup2("nextLinkImg"));variable32.setAttribute("href","javascript:void(0);");variable27.appendChild(variable32);
	   var variable33=document.createElement("div");variable33.setAttribute("id",modalpopup2("loading"));variable28.appendChild(variable33);
	   var variable34=document.createElement("a");variable34.setAttribute("id",modalpopup2("loadingLink"));variable34.setAttribute("href","javascript:void(0);");variable34.innerHTML=visual.strings.loadingMsg;variable33.appendChild(variable34);
	   if(visual.imageDataLocation!="north"){
	     variable11.appendChild(variable3)
	   }
	   var variable35=document.createElement("div");variable35.setAttribute("id",modalpopup2("shadow"));(visual.shadowLocation?document.getElementById(modalpopup2(visual.shadowLocation)):variable15).appendChild(variable35)
	} 
	var variable36=new ag(function(param2){q(param2)},400,function(){P()},300);
	function modalpopup3(){
	    modalpopup1(modalpopup2("overlay"),"click",P);
		if(visual.openByHover){
		   aX("lightbox").unbind().hover(function(){variable36.start()},function(){variable36.stop()})
		   }else{
		   modalpopup1(modalpopup2("lightbox"),"click",P)
		   }
		   modalpopup1(modalpopup2("prevLinkDetails"),"click",Z);
		   modalpopup1(modalpopup2("slideShowControl"),"click",v);
		   modalpopup1(modalpopup2("closeLink"),"click",P);
		   modalpopup1(modalpopup2("nextLinkDetails"),"click",aE);
		if(!visual.enableRightClick){
		   modalpopup1(modalpopup2("hoverNav"),"mousemove",A);modalpopup1(modalpopup2("hoverNav"),"mouseout",T)
		   }
		   modalpopup1(modalpopup2("prevLinkImg"),"click",Z);
		   modalpopup1(modalpopup2("nextLinkImg"),"click",aE);
		   modalpopup1(modalpopup2("loadingLink"),"click",P)
	}   
	if(visual.initImage!=""){
	   q("#"+visual.initImage)
	}
	function modalpopup4(param2){
		if(param2.tagName.toLowerCase()!="a"){
		  param2=popupmodal("A:first",param2)
		}
		  return popupmodal(param2).attr("href")
	}
	function M(param2){
		if(/^a$/i.test(param2.tagName)){
		  return popupmodal(param2).attr("title")||param2.title
		}
		  return popupmodal(">div:first",param2).html()
	}
	function var16(){
		popupmodal("."+var15.replace(/\,/g,",."),var14).each(function(){
			if(modalpopup4(this)){
			  if(visual.openByHover){
			    popupmodal(this).hover(function(){variable36.start(this)},function(){variable36.stop(this)})
			  }else{
			    popupmodal(this).click(function(param2){param2.preventDefault();q(this);return false})
			  }
			}
		})
	}
	var var30="";
	if(var30){
		var R=popupmodal("<div></div>");R.css({position:"absolute",right:"0px",bottom:"0px",padding:"2px 3px","background-color":"#EEE","z-index":10});popupmodal(variable28).append(R);
		var Q=popupmodal(document.createElement("A"));Q.css({color:"#555",font:"11px Arial,Verdana,sans-serif",padding:"3px 6px",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"});Q.attr({href:"http://"+var30.toLowerCase()});Q.html(var30);Q.bind("contextmenu",function(param2){
			return false
		});
		R.append(Q)
	}
	var q=this.start=function(param2){
		n();
		param2=popupmodal(param2);
		var4=param2.get(0);
		aX("overlay").css({height:"100%",left:i().x+"px"});
		if(visual.descSliding){
			aX("imageDataContainer").hide()
		}
		aX("lightboxImage").hide().attr({src:""});
		if(visual.startZoom){
			aX("imageContainer").css({width:param2.width()+"px",height:param2.height()+"px"});if(!document.all){aX("outerImageContainer").css({opacity:0.1})}aX("lightbox").css({left:param2.offset().left-visual.borderSize+"px",top:param2.offset().top-visual.borderSize+"px",width:param2.width()+visual.borderSize*2+"px",height:"auto"})
		}else{
		aX("overlay").css({opacity:0}).show().fadeTo(var10*1000,visual.overlayOpacity);aX("lightbox").css({left:0,width:"100%"})
		}
		modalpopup3();
		aX("lightbox").show();
		var9=[];
		var8=null;
		var3=0;
		popupmodal("."+(param2.attr("className")||param2.get(0).className),var14).each(function(){
			if(modalpopup4(this)){
				var9.push({link:modalpopup4(this),title:M(this)});if(this==param2.get(0)){var3=var9.length-1}
			}
		});
		if(var9.length>1){
			var8=param2.attr("className")
		}if(visual.featBrowser){
			popupmodal(window).resize(ai)
		}if(visual.floating){
			popupmodal(window).scroll(ai)
		}popupmodal(window).resize(G);popupmodal(window).scroll(G);g(var3)
	};
	function g(param2){
		Getpopup=param2;aR();U();H();
		if(!visual.startZoom){
			aX("lightboxImage").hide()
		}
		aX("prevLinkImg").hide();aX("nextLinkImg").hide();
		if(visual.descSliding){
			aX("imageDataContainer").hide()
		}
		var6=new Image();
		var6.onload=function(){
			var9[Getpopup].link=var6.src;var9[Getpopup].width=var6.width;var9[Getpopup].height=var6.height;aD(false)
		};
		if(visual.startZoom&&!aX("lightboxImage").attr("src")){
			var9[Getpopup].width=320;var9[Getpopup].height=240;aD(false,true)
		}
		var6.src=var9[Getpopup].link;
		if(visual.googleAnalytics){
			urchinTracker(var9[Getpopup].link)
		}
	}
	function aD(param1,be){
		var a3=var9[Getpopup].width;var bc=var9[Getpopup].height;var bf=f();var a7=a3/bc;
		if(visual.featBrowser){
			var a0=bf.winWidth/bf.winHeight;var a5=(a3+visual.borderSize*2+visual.breathingSize*2)/(bc+visual.borderSize*2+visual.breathingSize*2+var5);
			if(a5>a0){
				var bb=bf.winWidth-visual.borderSize*2-visual.breathingSize*2;var a6=Math.round(bb/a7)
			}else{
				var a6=bf.winHeight-visual.borderSize*2-visual.breathingSize*2-var5;var bb=Math.round(a6*a7)
			}if(a3>bb||bc>a6){
				a3=bb;bc=a6
			}
		}
		var a1,param2,a4,a2;a4=(a3+visual.borderSize*2);a2=(bc+var5+visual.borderSize*2);var a9=i();
		if(visual.openByHover){
			param2=Math.min(Math.max(popupmodal(var4).offset().left+popupmodal(var4).width()/2-a4/2,a9.x),a9.x+bf.winWidth-a4);a1=Math.min(Math.max(a(var4).offset().top+popupmodal(var4).height()/2-a2/2,a9.modalpopup1),a9.modalpopup1+bf.winHeight-a2)
		}else{
			a1=a9.modalpopup1+(bf.winHeight-a2)/2;param2=a9.x
		}
		a2=Math.max(a2,parseInt(aX("lightbox").height()));
		if(a2>bf.winHeight){
			a1=Math.max(Math.min(aX("lightbox").offset().top,a9.modalpopup1),a9.modalpopup1+bf.winHeight-a2)
		}
		var bd=visual.openByHover?a4+"px":(/mobile.+safari/i.test(navigator.userAgent)?bf.winWidth+"px":"100%");var bh=aX("imageContainer");
		if(param1==true){
			bh.css({height:bc+"px",width:a3+"px"});if(visual.floating){h(aX("lightbox"),param2,a1,bd)}else{aX("lightbox").css({top:a1+"px",left:param2+"px"})}
		}else{
			var a8=aX("lightboxImage");bh.stop(true,false);a8.stop(true,false);var param3;
			if(visual.startZoom&&a8.attr("src")){
				param3=a8;param3.attr({id:modalpopup2("lightboxImage2")})
				}
			else{
				a8.remove()
			}
			if(!be){
				a8=popupmodal(var6);a8.hide();a8.attr({id:modalpopup2("lightboxImage")});bh.append(a8)
			}
			var bg=a7/(bh.width()/bh.height());
			if(!be){
				if(visual.startZoom){
					if(param3){
						aX("lightboxImage2").stop(true,true)
					}
					var ba=param3?120:100;
					if(param3){
						param3.css({width:(1>bg?"auto":(param3.width()/param3.parent().width())*100+"%"),height:(1>bg?(param3.height()/param3.parent().height())*100+"%":"auto"),left:0,top:0})
					}
					a8.css({opacity:0,display:"block",position:"absolute",width:(1>bg)?ba+"%":"auto",height:(1>bg)?"auto":ba+"%",left:(100-ba*(1>bg?1:bg))/2+"%",top:(100-ba*(1>bg?1/(bg):1))/2+"%"})
				}if(visual.startZoom){
					aV()
				}
			}L(param2,a1,a3,bc,bd,bg,be)
		}if(aX("imageDataContainer").css("position")!="absolute"){
			aX("imageDataContainer").css({width:a3+"px"})
		}if(visual.enableRightClick){
			aX("lightboxImage").mousemove(A);aX("lightboxImage").mouseout(T)
		}
	}
	function L(a6,a1,a4,a5,a0,a7,a2){
		var a3=aX("imageContainer");var param3=aX("lightboxImage");var param1=aX("lightbox");
		if(!a2){
			var param2=aX("lightboxImage2")
		}
		if(visual.startZoom){
			param3.fadeTo(var11*1000,1);if(!document.all){aX("outerImageContainer").fadeTo(var11*1000,1)}
		}
		h(param1,a6,a1,a0);
		if(visual.startZoom&&!a2){
			param2.animate(popupmodal.extend({opacity:0},a7<1?{height:"120%",top:"-10%",left:(100-120/a7)/2+"%"}:{width:"120%",left:"-10%",top:(100-a7*120)/2+"%"}),{queue:false,duration:var11*1000,complete:function(){popupmodal(this).remove()}});param3.animate(popupmodal.extend({left:0,top:0},a7<1?{width:"100%"}:{height:"100%"}),{queue:false,duration:var11*1000})
		}
		a3.animate({width:a4+"px",height:a5+"px"},{queue:false,duration:var11*1000,complete:!a2?function(){aU()}:null})
	}
	function h(a0,a1,param3,param2){
		a0.stop(true,false);
		var param1={top:param3,left:a1};
		if(param2!=a0.get(0).style.width){
			param1.width=param2
		}
		a0.animate(param1,{queue:false,duration:var11*1000})
	}
	function H(){
	clearTimeout(var7);var param2=aX("loading");param2.show();param2.css({visibility:"hidden"});var7=setTimeout(function(){aX("loading").css({visibility:"visible"})},300)
	}
	function aV(){
		clearTimeout(var7);
		aX("loading").hide()
	}
	function aU(){
		aV();
		if(visual.startZoom){
			aX("overlay:hidden").css({opacity:0}).show().fadeTo(var10*1000,visual.overlayOpacity);aN()
		}else{
		aX("lightboxImage").css({opacity:0}).show().fadeTo(500,1,function(){aN()})
		}E()
	}
	function x(){
		aX("caption").html((var9[Getpopup].title||"").replace(/\n/g,"<br>"));
		if(var9[Getpopup].title){
			aX("caption").show()
		}else{
			aX("caption").hide()
		}
		/*if(var9.length<2){
			$('#numberDisplay').css('display','none');
		}else {
		$('#numberDisplay').css('display','block');
		}*/
		if(var9.length<2){
			$('#imageDetails').css('display','none');
		}else {
		$('#imageDetails').css('display','block');
		}
		
		if(var9.length>1){
			var param2=visual.strings.numDisplayPrefix+" "+parseInt(Getpopup+1)+" "+visual.strings.numDisplaySeparator+" "+var9.length;if(visual.showGroupName&&var8){param2+=" "+visual.strings.numDisplaySeparator+" "+var8}aX("numberDisplay").text(param2);aX("slideShowControl").css({display:var12?"":"none"})
		}
	}
	function aN(){
		x();
		if(visual.descSliding){
			aX("imageDataContainer").animate({height:"show",opacity:"show"},650,null,function(){C()})
		}else{
		C()
		}
	}
	function C(){
		var param2=1/var9.length;var5=var5*(1-param2)+aX("imageDataContainer").height()*param2;
		if(var9.length>1){
			aX("prevLinkImg").show();aX("nextLinkImg").show();
			if(var12){
				if(var13){
					ac()
				}else{
					aA()
				}
			}
		}else{
			aX("prevLinkImg").hide();
			aX("nextLinkImg").hide()
			}j()
	}
	function ac(){
		if(aX("lightbox:hidden").length){
			return
		}
		U();
		var13=true;
		var2=setTimeout(function(){
			aE()
		},visual.slideTime*1000);
		aX("slideShowControl").text(visual.strings.stopSlideshow);aX("slideShowControl").addClass("started")
	}
	function aA(){
		var13=false;U();
		aX("slideShowControl").text(visual.strings.startSlideshow);
		aX("slideShowControl").removeClass("started")
	}
	function v(){
		if(var13){
			aA()
		}else{
		ac()
		}
	}
	function U(){
		if(var2){
			var2=clearTimeout(var2)
		}
	}
	function aE(){
		if(var9.length>1){
			U();
			if(!visual.loop&&((Getpopup==var9.length-1&&var3==0)||(Getpopup+1==var3))){
				P();
				return
			}
			if(Getpopup==var9.length-1){
				ax(0)
			}else{
				ax(Getpopup+1)
			}
		}
	}
	function ax(param2){
		if(visual.descSliding){
			aX("imageDataContainer").animate({height:"hide",opacity:"hide"},650,null,function(){g(param2)})
			}else{
			g(param2)
			}
	}
	function Z(){
		if(var9.length>1){if(Getpopup==0){ax(var9.length-1)}else{ax(Getpopup-1)}}
	}
	function aJ(){
		if(var9.length>1){ax(0)}
	}
	function ar(){
		if(var9.length>1){ax(var9.length-1)}
	}
	function j(){
		document.onkeydown=aj
	}
	function aR(){
		document.onkeydown=""
	}
	function aj(param2){
		if(param2==null){
			keycode=event.keyCode
		}else{
			keycode=param2.which
		}
		key=String.fromCharCode(keycode).toLowerCase();
		if(key=="x"||key=="variable32"||key=="param2"||keycode==27){
			P()
		}else{
			if(key=="p"||key=="%"){Z()}else{if(key=="n"||key=="'"){aE()}else{if(key=="f"){aJ()}else{if(key=="variable22"){ar()}else{if(key=="variable20"){if(var9.length>0&&visual.enableSlideshow){v()}}}}}}
		}
	}
	function E(){
		var param3=var9.length-1==Getpopup?0:Getpopup+1;(new Image()).src=var9[param3].link;var param2=Getpopup==0?var9.length-1:Getpopup-1;(new Image()).src=var9[param2].link
	}
	function P(param2){
		if(param2){
			var param3=popupmodal(param2.target).attr("id");if(modalpopup2("closeLink")!=param3&&modalpopup2("lightbox")!=param3&&modalpopup2("overlay")!=param3){return}
		}
		aX("imageContainer").stop(true,false);aX("lightboxImage").stop(true,false);var6.onload=null;aR();U();aX("lightbox").hide();X();if(visual.overlayOpacity){aX("overlay").fadeOut(var10*1000)}else{aX("overlay").hide()}popupmodal(window).unbind("resize",ai);popupmodal(window).unbind("scroll",ai);popupmodal(window).unbind("resize",G);popupmodal(window).unbind("scroll",G)
	}
	function A(param2){
		if(param2.pageX-aX("imageContainer").offset().left<aX("imageContainer").width()/2){
			aX("prevLinkImg").addClass("hover");aX("nextLinkImg").removeClass("hover")
		}else{
		aX("prevLinkImg").removeClass("hover");aX("nextLinkImg").addClass("hover")
		}
	}
	function T(){
		aX("prevLinkImg").removeClass("hover");
		aX("nextLinkImg").removeClass("hover")
	}
	function ai(){
		aD(true)
	}
	function G(){
		aX("overlay").css({left:i().x+"px",top:0,width:"100%",height:O()[1]+"px"})
	}
	function X(){
		var a0;var param3=var1;
		for(var param1=0;param1<param3.length;param1++){
			a0=document.getElementsByTagName(param3[param1]);
			for(var param2=0;param2<a0.length;param2++){
				popupmodal(a0[param2]).css({visibility:"visible"})
			}
		}
	}
	function n(){
		var param2=var1;
		for(var param3=0;param3<param2.length;param3++){
			popupmodal(param2[param3]).css({visibility:"hidden"})
		}
	}
	function i(){
		var param2,param3;
		if(self.pageYOffset||self.pageXOffset){
			param2=self.pageXOffset;param3=self.pageYOffset
		}else{
			if(document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)){
				param2=document.documentElement.scrollLeft;param3=document.documentElement.scrollTop
			}
			else{
				if(document.body){
					param2=document.body.scrollLeft;param3=document.body.scrollTop
				}
			}
		}return{x:param2,modalpopup1:param3}
	}
	function f(){
		var param3,param2;
		if(self.innerHeight){
			param3=self.innerWidth;param2=self.innerHeight
		}else{
			if(document.documentElement&&document.documentElement.clientHeight){
				param3=document.documentElement.clientWidth;param2=document.documentElement.clientHeight
			}else{
				if(document.body){
					param3=document.body.clientWidth;param2=document.body.clientHeight
				}
			}
		}return{
		winWidth:param3,winHeight:param2
		}
	}
	function O(){
		var param2=document.body,a0=document.documentElement,param3=0,param1=0;
		if(a0){
			param3=Math.max(param3,a0.scrollWidth,a0.offsetWidth);param1=Math.max(param1,a0.scrollHeight,a0.offsetHeight)
		}
		if(param2){
			param3=Math.max(param3,param2.scrollWidth,param2.offsetWidth);param1=Math.max(param1,param2.scrollHeight,param2.offsetHeight);
			if(window.innerWidth){
				param3=Math.max(param3,window.innerWidth);
				param1=Math.max(param1,window.innerHeight)
			}
		}
		return[param3,param1]
	}
	function modalpopup2(param2){
		return visual.prefix+param2
	}
	function aX(param2){
		return popupmodal("#"+modalpopup2(param2))
	}
	function ag(a3,param2,a1,param1){
		var a2,param3,a0;
		this.start=function(a4){
			if(a0){
				clearTimeout(a0)
			}
			a0=0;
			if(!a4||(a4==a2)){
				return
			}
			if(a2){
				if(param3){clearTimeout(param3)}else{a1(a2)}param3=0
			}
			a2=a4;
			param3=setTimeout(function(){
				param3=0;
				a3(a4)
			},param2)
		};
		this.stop=function(a4){
			if(!a2||a4&&(a2!=a4)){
				return
			}
			if(param3){
				clearTimeout(param3)
			}
			param3=0;
			if(!a0){
				a0=setTimeout(function(){
					a0=0;
					a1(a4||a2);a2=0
				},param1)
			}
		}
	}
    return this
	}
})(jQuery);
var show=new Object({
	init:function() {
		var selfthis=this;
		this.oWrapall=$('.infoWrapper'); 
		this.offBtn=$(".offButton"); 
		this.aLilili=$(".lilili");
		this.flaggggg=true;
		this.augEle = document.getElementsByClassName('aug')[0];
		this.sepEle = document.getElementsByClassName('sep')[0];
		this.octEle = document.getElementsByClassName('oct')[0];
		this.showAugEle=$(".showAug");
		this.showSepEle=$(".showSep");
		this.showOctEle=$(".showOct");
		this.oMonth=$(".month li");
		this.oAall=$(".showWra a");

		this.augEle.onclick = function() {
		    selfthis.yearClassAllChange(this);
		    selfthis.flagFalse();
		    return selfthis.change("block","none","none","1","0","0");
		}
		this.sepEle.onclick = function() {
		    selfthis.yearClassAllChange(this);
		    selfthis.flagFalse();
		    return selfthis.change("none","block","none","0","1","0");
		}
		this.octEle.onclick = function() {
		    selfthis.yearClassAllChange(this);
		    selfthis.flagFalse();
		    return  selfthis.change("none","none","block","0","0","1");
		}
		this.oAall.click(function() {
		    for(var i=1;i<=9;i++) {
		        if(this.name==i) {
		            selfthis.oWrapChange(selfthis.oWrapall.eq(i-1));
		        }
		    }
		});
		this.offBtn.click(function() {
		    selfthis.suosuo(selfthis.oWrapall);
		});
		this.showUs(selfthis);

	},
	yearClassAllChange:function(obj) {
	    this.oMonth.removeClass("yearNew");
	    this.oMonth.addClass("year");
	    obj.getElementsByTagName('li')[0].className="yearNew";
	},
	flagFalse:function() {
    	if(this.flaggggg==false) {
        	$(".rightBox").css("background-color","#333");
        	$(".aboutUs").animate({"opacity":"0"},function() {
            	$(".aboutUs").css("display","none")
	            this.flaggggg=true;
	        });
    	}
	},
	change:function(a,b,c,d,e,f) {
	    this.showAugEle.css("display",a);
	    this.showSepEle.css("display",b);
	    this.showOctEle.css("display",c);
	    this.showAugEle.animate({"opacity":d});
	    this.showSepEle.animate({"opacity":e});
	    this.showOctEle.animate({"opacity":f});
	},
	oWrapChange:function(obj) {
	    obj.css("display","block");
	    obj.animate({"opacity":"1", "left":"0","top":"0","bottom":"0","right":"0"});
	},
	suosuo:function(obj) {
	    obj.animate({"opacity":"0", "left":"0","top":"50%","bottom":"50%","right":"0"},function() {
	        obj.css("display","none").css("left","50%").css("top","0").css("bottom","0").css("right","50%");
	    });
	},
	showUs:function(selfthis) {
		this.aLilili.click(function() {
		    if(selfthis.flaggggg==true) {
		        $(".rightBox").css("background-color","#1f1f1f");
		        $(".aboutUs").css("display","block").animate({"opacity":"0.9"},200,function() {
		            selfthis.flaggggg=false;
		        });
		    }
		    if(selfthis.flaggggg==false) {
		        $(".rightBox").css("background-color","#333");
		        $(".aboutUs").animate({"opacity":"0"},200,function() {
		            $(".aboutUs").css("display","none")
		            selfthis.flaggggg=true;
		        });
		    }
		});
	},
});

show.init();

//ISSUES					
//-jumps to original position								FIXED
//-userbox css not alwaays same height
//-settings unfinished
//-make extension ON/OFF state logic
//-plugin dissapears bug
//-	parent::func
//- function:   //*[starts-with(text(),'01001')]
//- function : //
//- function : last 

// var isExtensionOn = false;
// chrome.extension.sendMessage({ cmd: "setOnOffState", data: { value: isExtensionOn } });

//GET VARIABLE
//chrome.extension.sendMessage({ cmd: "isAutoFeedMode" }, function (response) {
//    if (response == true) {
 

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXX 		UI		UI		UI	   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 
 var PLUGIN = (function(){
	 var STATE = true;	 
		
	if(STATE){	 	 
	
	var HTMLdocument = document.getElementsByTagName('html')[0];	
	var PLGcontainer = document.createElement('div');
	var SVGcontent = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	var SVGcircleSettings = document.createElementNS("http://www.w3.org/2000/svg", "path");
	var SVGcircleHelp = document.createElementNS("http://www.w3.org/2000/svg", "path");
	var SVGcircleOff = document.createElementNS("http://www.w3.org/2000/svg", "path");
	var SVGg = document.createElementNS("http://www.w3.org/2000/svg", "g");
	var BUTTON_SVGsettings = document.createElementNS("http://www.w3.org/2000/svg", "path");
	var BUTTON_SVGhelp = document.createElementNS("http://www.w3.org/2000/svg", "path");
	var BUTTON_SVGoff = document.createElementNS("http://www.w3.org/2000/svg", "path");
	var SVG_circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

	PLGcontainer.id = 'svgContainer';
	document.getElementsByTagName('html')[0].appendChild(PLGcontainer);

	SVGcontent.id = 'svgXpth';
	SVGcircleSettings.id = 'settings';
	SVGcircleHelp.id = 'help';
	SVGcircleOff.id = 'off';

	BUTTON_SVGsettings.id = 'settingsID';
	BUTTON_SVGhelp.id = 'helpID';
	BUTTON_SVGoff.id = 'offID';
	SVG_circle.id = 'dragHolder';

	SVGcircleSettings.setAttributeNS(null,'class','circle');
	SVGcircleHelp.setAttributeNS(null,'class','circle');
	SVGcircleOff.setAttributeNS(null,'class','circle');
	BUTTON_SVGsettings.setAttributeNS(null,'class','settings');
	BUTTON_SVGhelp.setAttributeNS(null,'class','help');
	BUTTON_SVGoff.setAttributeNS(null,'class','off');
	SVG_circle.setAttributeNS(null,'class','centerSymbol');

	PLGcontainer.style.position = 'fixed';
	PLGcontainer.style.left = '45%';
	PLGcontainer.style.top = '70%';
	PLGcontainer.style.zIndex = 5000;
	PLGcontainer.setAttribute('tabindex','0');
	SVGcircleSettings.setAttributeNS(null,"d", "M27 97 A 52.5 52.5 0 0 1 75 23");
	SVGcircleHelp.setAttributeNS(null,"d", "M123 97 A 52.5 52.5 0 0 0 75 23");
	SVGcircleOff.setAttributeNS(null,"d", "M27 97 A 52.5 52.5 0 0 0 123 97");
	SVGcontent.setAttributeNS(null, "viewBox", "0 0.5 150 150");

	BUTTON_SVGsettings.setAttributeNS(null,"d", "M483.9,105.7c-2.4-9.9-14.9-13.4-22.1-6.1l-58.9,58.9c-13.0,13.0-34.2,13.0-47.3,0	l-27.0-27.0c-13.0-13.0-13.0-34.2,0-47.3l58.1-58.1c7.3-7.3,3.7-19.8-6.3-22.1 		c-13.7-3.2-28.3-4.4-43.3-3.2c-64.5,5.1-123.9,65.6-127.9,130.2c-1.5,24.5,3.4,47.6,13.0,68.1 L16.2,375.8c-9.2,7.9-14.8,19.4-15.3,31.6c-0.5,12.2,4.0,24.0,12.5,32.7l34.9,35.5 		c8.6,8.8,20.5,13.5,32.8,13.1c12.3-0.3,23.9-5.9,31.9-15.2l178.3-206.6 c19.9,8.8,42.2,13.4,65.7,11.9c65.0-4.0,125.5-63.9,130.2-128.9 C488.8,134.6,487.4,119.7,483.9,105.7z");
	BUTTON_SVGhelp.setAttributeNS(null,"d", "M324.4,502.4c0-7.7-1.4-15.0-4.2-22.0c-2.8-6.9-6.9-12.9-12.2-18.0c-5.3-5.1-11.4-9.1-18.3-12.2c-6.9-3.0-14.2-4.5-22.0-4.5s-15.0,1.5-22.0,4.5	c-6.9,3.0-12.9,7.1-18.0,12.2c-5.1,5.1-9.0,11.1-11.9,18.0c-2.8,6.9-4.2,14.2-4.2,22.0c0,7.7,1.4,15.0,4.2,22.0c2.8,6.9,6.8,12.9,11.9,18.0c5.1,5.1,11.1,9.1,18.0,12.2			c6.9,3.0,14.2,4.5,22.0,4.5s15.0-1.5,22.0-4.5c6.9-3.0,13.0-7.1,18.3-12.2c5.3-5.1,9.3-11.1,12.2-18.0C323.0,517.5,324.4,510.2,324.4,502.4z M271.8,420.4h-4.8			c-13.0-1.6-23.7-7.5-32.1-17.7c-8.3-10.1-11.9-21.8-10.7-34.8c2.4-22.4,8.0-44.1,16.8-65.1c8.7-21.0,20.0-39.6,33.9-55.9c4.4-5.7,9.3-10.9,14.6-15.6c5.3-4.6,10.6-9.2,15.9-13.7			c13.4-11.4,23.7-21.6,30.9-30.6s10.7-19.9,10.7-33.0c0-11.4-2.3-20.8-7.0-28.1c-4.6-7.3-10.4-13.1-17.1-17.4c-6.7-4.2-13.7-7.3-21.1-9.1c-7.3-1.8-13.8-2.7-19.5-2.7h-1.2			c-11.4,0-20.8,1.5-28.1,4.5s-13.5,7.3-18.6,12.8c-5.1,5.5-9.3,12.1-12.8,19.8s-7.0,16.1-10.7,25.0c-4.8,12.6-10.8,21.5-17.7,26.6s-13.8,8.0-20.8,8.8c-7.7,1.6-15.7,1.0-23.8-1.8c-8.1-3.2-14.6-7.9-19.5-14.0c-4.4-5.3-7.9-12.1-10.4-20.5			c-2.4-8.3-1.6-18.6,2.4-30.9c2.4-7.7,6.7-18.8,12.8-33.3s15.4-28.6,27.8-42.5 s28.4-25.9,48.0-36.1s44.0-15.0,73.4-14.6c19.5,0.4,38.8,3.9,57.8,10.7s36.0,16.6,51.1,29.6c15.0,13.0,27.3,29.0,36.7,48.0c9.3,18.9,14.0,40.6,14.0,65.1c0,17.9-2.4,33.8-7.3,47.7			c-4.8,13.8-11.1,26.3-18.6,37.3s-15.7,20.6-24.4,28.7c-8.7,8.1-16.8,15.5-24.1,22.0c-4.0,3.6-7.9,7.0-11.6,10.0c-3.6,3.0-6.5,6.0-8.5,8.8c-7.3,8.9-13.5,19.4-18.6,31.5			c-5.1,12.0-8.2,24.5-9.4,37.6c-1.2,12.6-6.4,22.9-15.6,30.9 C294.7,416.4,284.0,420.4,271.8,420.4z");
	BUTTON_SVGoff.setAttributeNS(null,"d", "M435.8,159.8C420.5,129.2,398.9,103.5,371.1,82.8C363.1,76.7,354.1,74.3,344.0,75.6C333.9,76.9,325.9,81.7,320.0,89.9C313.9,97.9,311.6,106.9,313.0,116.9C314.4,126.9,319.2,134.9,327.2,141.0C345.8,155.1,360.2,172.3,370.4,192.7C380.6,213.0,385.7,234.7,385.7,257.8C385.7,277.6,381.8,296.5,374.1,314.4C366.4,332.4,356.0,348.0,342.8,361.1C329.7,374.3,314.2,384.7,296.2,392.4C278.2,400.1,259.3,404.0,239.5,404.0C219.7,404.0,200.8,400.1,182.8,392.4C164.8,384.7,149.3,374.3,136.1,361.1C123.0,348.0,112.6,332.4,104.9,314.4C97.2,296.5,93.3,277.6,93.3,257.8C93.3,234.7,98.4,213.0,108.6,192.7C118.8,172.3,133.2,155.1,151.8,141.0C159.8,134.9,164.5,126.9,166.0,116.9C167.4,106.9,165.1,97.9,159.0,89.9C153.1,81.7,145.1,76.9,135.1,75.6C125.2,74.3,116.1,76.7,107.9,82.8C80.1,103.5,58.5,129.2,43.2,159.8C27.9,190.5,20.2,223.1,20.2,257.8C20.2,287.5,26.0,315.8,37.6,342.8C49.3,369.9,64.9,393.2,84.5,412.8C104.1,432.4,127.4,448.0,154.4,459.6C181.4,471.2,209.8,477.0,239.5,477.0C269.2,477.0,297.5,471.2,324.6,459.6C351.6,448.0,374.9,432.4,394.5,412.8C414.1,393.2,429.7,369.9,441.3,342.8C453.0,315.8,458.8,287.5,458.8,257.8C458.8,223.1,451.1,190.5,435.8,159.8C435.8,159.8,435.8,159.8,435.8,159.8M239.5,257.8C249.4,257.8,258.0,254.2,265.2,246.9C272.4,239.7,276.0,231.1,276.0,221.2C276.0,221.2,276.0,38.5,276.0,38.5C276.0,28.6,272.4,20.0,265.2,12.8C258.0,5.6,249.4,2,239.5,2C229.6,2,221.0,5.6,213.8,12.8C206.6,20.0,202.9,28.6,202.9,38.5C202.9,38.5,202.9,221.2,202.9,221.2C202.9,231.1,206.6,239.7,213.8,246.9C221.0,254.2,229.6,257.8,239.5,257.8C239.5,257.8,239.5,257.8,239.5,257.8");

	SVGg.appendChild(BUTTON_SVGsettings);
	SVGg.appendChild(BUTTON_SVGhelp);
	SVGg.appendChild(BUTTON_SVGoff);

	SVGcontent.appendChild(SVGcircleSettings);
	SVGcontent.appendChild(SVGcircleHelp);
	SVGcontent.appendChild(SVGcircleOff);
	SVGcontent.appendChild(SVGg);
	SVGcontent.innerHTML += "<circle id='dragHolder' class='centerSymbol' cx='75' cy='75' r='27' stroke='red' stroke-width='8' fill='white'/>";
	SVGcontent.appendChild(SVG_circle);
	PLGcontainer.appendChild(SVGcontent);
	HTMLdocument.appendChild(PLGcontainer);

	var allPluginTags = PLGcontainer.getElementsByTagName("*");
	for(var i=0;i<allPluginTags.length;i++){
		allPluginTags[i].setAttribute('name','xpthPLG_15112015');		
	}

	var coordinates=null, currentPosition, docked = false, width = document.body.clientWidth, height = window.innerHeight, dockArea = 75;
	var	buttons = PLGcontainer.getElementsByTagName('g')[0].childNodes;
	
	var changeStyle = function(position){		
			var pathsFull = ["M27 97 A 52.5 52.5 0 0 1 75 23", "M123 97 A 52.5 52.5 0 0 0 75 23", "M27 97 A 52.5 52.5 0 0 0 123 97"]; 
			var paths = ["M92 100.5 A 106 105 0 0 1 105 150", "M51.5 59 A 106 106 0 0 1 92 100.5", "M0 45 A 105 106 0 0 1 51.5 59"];

			var divContainer = document.getElementById("svgContainer");
			var svgContainer = document.getElementById("svgXpth");			
			var centerCicle = document.getElementById("dragHolder");
					
				if(docked){													
							divContainer.className = '';							
							divContainer.style.right = 'auto';
							divContainer.style.left = 'auto';
							divContainer.style.top = 'auto';
							divContainer.style.bottom = 'auto';
							var offset = '5px';
							
							if(currentPosition.indexOf('_Top') != -1){
								divContainer.style.top = offset;								
								currentPosition.indexOf('_TopRight') != -1 ? divContainer.style.right = offset : divContainer.style.left = offset;
									}else{
										  divContainer.style.bottom = offset;
										  currentPosition.indexOf('_BottomRight') != -1 ? divContainer.style.right = offset : divContainer.style.left = offset;
										 }	
							
							centerCicle.setAttribute('class','centerSymbolUnDocked');
								for(var i=0;i<pathsFull.length;i++) 
											{																
											svgContainer.children[i].setAttributeNS(null, "d", pathsFull[i]);	
											svgContainer.children[i].style.strokeWidth = 45;										
											buttons[i].setAttribute('class', buttons[i].className.baseVal.substring(0, (buttons[i].className.baseVal.indexOf("_"))));		
											}	
							docked = false;
							coordinates=null;							 
							}else
								{								
								divContainer.className = 'svgContainer' + position;	
								centerCicle.setAttribute('class','centerSymbol' + position);					
											
											if(position.indexOf('Left') != -1){
											var temp = paths[0];
											paths[0] = paths[2];
											paths[2] = temp;									
											}										
										for(var i=0;i<paths.length;i++) 
											{										
											svgContainer.children[i].setAttributeNS(null, "d", paths[i]);	
											svgContainer.children[i].style.strokeWidth = 90;	
												if(buttons[i].className.baseVal.indexOf('_') !=-1)
													{
													classTemp = buttons[i].className.baseVal.substring(0, (buttons[i].className.baseVal.indexOf("_")));
													buttons[i].setAttribute('class', classTemp + position);									
													}else{
														  buttons[i].setAttribute('class', buttons[i].className.baseVal + position);									
														  }
											}	
								docked = true;
								dockArea = 30;
								currentPosition = position;
								coordinates=null;	
								}						
	}

	function plgCircleDrag(elementHolder){
		function findContainer(e){			
			if(typeof(e.id) == 'undefined' || e.id.indexOf("Container") == -1)
					{
					return findContainer(e.parentNode);
					}else{
						 return e;	
						}
				} 
		var elementWrapper = findContainer(elementHolder);  		
		
	 function dragThis(elementContainer, wrapper){	 
	 	 
			elementContainer.addEventListener('mousedown',startDrag,false);
			elementContainer.addEventListener('mousemove',drag,false);
			elementContainer.addEventListener('mouseup',stopDrag,false);	
				   
		 function startDrag(ev) {		 
			if(!coordinates) {    	
			  coordinates={
				x: ev.clientX-wrapper.offsetLeft,
				y: ev.clientY-wrapper.offsetTop
			  };
			};
				if(docked && wrapper.id == 'svgContainer'){
					changeStyle();
					}		
				}
		  
		  function drag(ev){
			if(coordinates){         
						  wrapper.style.left=ev.clientX-coordinates.x+"px";
						  wrapper.style.top=ev.clientY-coordinates.y+"px";
					if(wrapper.id.indexOf('svgContainer')!=-1){
						  if((ev.clientX < dockArea && ev.clientY < dockArea)){
								changeStyle("_TopLeft");				
								}else if((ev.clientX < dockArea && ev.clientY > height - dockArea)){
										  changeStyle("_BottomLeft");						  
										  }else if((ev.clientX > width - dockArea && ev.clientY < dockArea)){
													changeStyle("_TopRight");									
													}else if((ev.clientX > width - dockArea && ev.clientY > height - dockArea)){	
															  changeStyle("_BottomRight");										  
															  }	
								if(!docked && dockArea <= 75){dockArea++;}
								}							
							}							
		  }
		  function stopDrag(ev){	  
			if(coordinates){          
			  wrapper.style.left=ev.clientX-coordinates.x+"px";
			  wrapper.style.top=ev.clientY-coordinates.y+"px";
			  coordinates=null;
			  }
			  elementContainer = null;
		   }  		  
	};
	
	dragThis(elementHolder, elementWrapper);
	   }	  
	plgCircleDrag(document.getElementById("dragHolder"));

document.onkeydown = function(e){	

	if(docked){
		if(e.keyCode == 37 || e.keyCode == 39){ 	
		docked = false;
		switch(e.keyCode){
				case 37 : if(currentPosition.indexOf('Bottom') != -1)
								{									
								currentPosition.indexOf('Left') != -1 ? changeStyle("_TopLeft") : changeStyle("_BottomLeft");		
								}else{
									currentPosition.indexOf('Left') != -1 ? changeStyle("_TopRight") : changeStyle("_BottomRight");
									};break;
				case 39 : if(currentPosition.indexOf('Bottom') != -1)
								{
								currentPosition.indexOf('Left') != -1 ? changeStyle("_BottomRight") : changeStyle("_TopRight");		
								}else{
									currentPosition.indexOf('Left') != -1 ? changeStyle("_BottomLeft") : changeStyle("_TopLeft");
									};break;			
						}
				}
		}
	};

	var checkBoxesValues = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
	
	var closeWindow = function(element){
		element.parentElement.parentNode.removeChild(element.parentElement);
	}
		
	for(var i=0;i<buttons.length;i++){

		buttons[i].myActions = function(){
				this.onmousedown = function(){					  
					  	if(this.id.indexOf('off') != -1)
										{		
										document.getElementsByTagName('html')[0].removeChild(document.getElementById('svgContainer'));
										var usrBx = document.getElementById('plgContainer');												
										if(usrBx){
											usrBx.parentNode.removeChild(usrBx);
											}
											chrome.runtime.sendMessage({state: 'OFF'},function(response){STATE = response;});
										}else{		  
											  var htmlContainer = document.getElementsByTagName('html')[0];
											  var templateContainer = document.createElement("template");
											  templateContainer.id = 'nameTagTemplate';																					
											  if(this.id.indexOf('help') != -1){												
												templateContainer.innerHTML ="<style>#userBoxContainer{position:fixed;display:table;width:35%;height:30%!important;left:32%;bottom:35%;border:solid 0.2em black;border-top: solid 1.8em black;border-radius:1em;text-align:center;background-color:#F5F5F5;-webkit-user-select:none;font-size: 100%;}#userBoxOnOffSVG{position:absolute;right:5px;top:-25px;background-color:black;border-radius:10px;cursor:pointer;}.userBoxOnOffbutton{stroke:grey;stroke:white;cursor:pointer;stroke-width:1px;}#userBoxOnOffSVG:hover .userBoxOnOffbutton{cursor:pointer;stroke-width:2px;}#userBoxHolder{position:absolute;display: inline-block;top:-1.2em;width:100%;left:0px;font-family:Lucidatypewriter,monospace;font-weight:200;letter-spacing: 0.3em;color:#F5F5F5;cursor:crosshair;font-size:1.5em;}.helpText{display:table-cell;vertical-align: middle;height:100%;font-family:Lucidatypewriter,monospace;font-weight:100;word-spacing: -0.2em;color:#323232;font-size:1em;text-align:justify;padding:3%;}ul{line-height:0.7em;}li{line-height:0.9em;}</style><div id='userBoxContainer'><span id='userBoxHolder' name='xpthPLG_15112015'>HELP v" + chrome.runtime.getManifest().version + "</span><svg height='20' width='20' id='userBoxOnOffSVG' name='xpthPLG_15112015'><path d='M0 0 20 20 M0 20 20 0' class='userBoxOnOffbutton' name='xpthPLG_15112015'></path></svg><span class='helpText' name='xpthPLG_15112015'><b name='xpthPLG_15112015'>XpathCut</b> helps to identify elements in DOM<ul name='xpthPLG_15112015'><li name='xpthPLG_15112015'>drag plugin panel to any position in window or dock in corner use &lt; or &gt; to move clockwise or counter clockwise</li><br name='xpthPLG_15112015'><li name='xpthPLG_15112015'>select method or pattern which has to be used in identification</li><br name='xpthPLG_15112015'><li name='xpthPLG_15112015'>turn ON/OFF evaluation or elements highliting</li><br name='xpthPLG_15112015'><li>hover over element and press SHIFT key to get xpath</li></ul></span></div>";	

												doRest();
												}
												if(this.id.indexOf('settings') != -1){											
												  function updateChecks(val){													
													templateContainer.innerHTML = "<style>#userBoxContainer{position:fixed;display:table;width:35%;height:30%!important;left:32%;bottom:35%;border:solid 0.2em black;border-top:solid 1.8em black;border-radius:1em;text-align:center;background-color:#F5F5F5;-webkit-user-select:none;font-size:100%;}#userBoxOnOffSVG{position:absolute;right:5px;top:-25px;background-color:black;border-radius:10px;cursor:pointer;}.userBoxOnOffbutton{stroke:grey;stroke:white;cursor:pointer;stroke-width:1px;}#userBoxOnOffSVG:hover .userBoxOnOffbutton{cursor:pointer;stroke-width:2px;}#userBoxHolder{position:absolute;display: inline-block;top:-1.2em;width:100%;left:0;font-family:Lucidatypewriter,monospace;font-weight:200;letter-spacing: 0.3em;color:#F5F5F5;cursor:crosshair;font-size:1.5em;}.settingsLabel{display:inline-block;text-align:left;width:98%;font-family:Lucidatypewriter, monospace;border-bottom:solid 1px black;font-weight:bold;margin:2%;}.checkBoxContainer{position:relative;width:100%;}.multiselect{display:inline-block;width:50%;margin-bottom:2%;border-top:solid 2px black;border-bottom:solid 2px black;}.selectBox{position:relative;}.selectBox select{width:100%;font-weight:bold;background-color:#F5F5F5;outline:none;font-family:Lucidatypewriter,monospace;color:#463E3F;}.overSelect{position:absolute;left:0;right:0;top:0;bottom:0;}#checkboxes{display:none;position:absolute;width:98%;outline:solid 1px #dadada;background-color:white;border-bottom:solid 3px black;z-index:5000;}#checkboxes label{display:inline-block;width:100%;outline:solid 1px grey;font-family:Lucidatypewriter, monospace;}#checkboxes label:hover{background-color:#1e90ff;}.chckBx{float:left;}.chckTtl{width:auto;text-align:left;}.usrInteractionChck{position:relative;text-align:bottom;margin-top:10%;font-family:Lucidatypewriter, monospace;}</style><div id='userBoxContainer'><span id='userBoxHolder' name='xpthPLG_15112015'>SETTINGS</span><svg height='20' width='20' id='userBoxOnOffSVG' name='xpthPLG_15112015'><path d='M0 0 20 20 M0 20 20 0' class='userBoxOnOffbutton' name='xpthPLG_15112015'></path></svg><label class='settingsLabel' name='xpthPLG_15112015'>Search by:</label><label class='checkBoxContainer' name='xpthPLG_15112015'><div class='multiselect'><div id='slctBox1' class='selectBox'><select><option>Select an option</option></select><div class='overSelect'></div></div><div id='checkboxes'><label align='left'><div class='chckBx'><input type='checkbox'" + val[0] + "/></div>@Id</label><label><div class='chckBx'><input type='checkbox'" + val[1] + "/></div><div class='chckTtl'>@Class</div></label><label><div class='chckBx'><input type='checkbox'" + val[2] + "/></div><div class='chckTtl'>@Title</div></label><label><div class='chckBx'><input type='checkbox'" + val[3] + " disabled/></div><div class='chckTtl'>-</div></label><label><div class='chckBx'><input type='checkbox'" + val[4] + " disabled/></div><div class='chckTtl'>-</div></label><label><div class='chckBx'><input type='checkbox'" + val[5] + " disabled/></div><div class='chckTtl'>-</div></label></div></div></label><label class='settingsLabel' name='xpthPLG_15112015'>Use functions:</label><label class='checkBoxContainer' name='xpthPLG_15112015'><div class='multiselect'><div id='slctBox2' class='selectBox'><select><option>Select an option</option></select><div class='overSelect'></div></div><div id='checkboxes'><label><div class='chckBx'><input type='checkbox'" + val[6] + "/></div><div class='chckTtl'>text()</div></label><label><div class='chckBx'><input type='checkbox'" + val[7] + "/></div><div class='chckTtl'>contains()</div></label><label><div class='chckBx'><input type='checkbox'" + val[8] + "/></div><div class='chckTtl'>following-sibling</div></label><label><div class='chckBx'><input type='checkbox'" + val[9] + "/></div><div class='chckTtl'>preceding-sibling</div></label><label><div class='chckBx'><input type='checkbox'" + val[10] + "/></div><div class='chckTtl'>/../</div></label><label><div class='chckBx'><input type='checkbox'" + val[11] + "/></div><div class='chckTtl'>count()</div></label><label><div class='chckBx'><input type='checkbox'" + val[12] + " disabled/></div><div class='chckTtl'>-</div></label><label><div class='chckBx'><input type='checkbox'" + val[13] + " disabled/></div><div class='chckTtl'>-</div></label><label><div class='chckBx'><input type='checkbox'" + val[14] + " disabled/></div><div class='chckTtl'>-</div></label></div></div></label><label class='settingsLabel' name='xpthPLG_15112015'><center>Interaction settings:</center></label><label class='checkBoxContainer' name='xpthPLG_15112015'></label><table name='xpthPLG_15112015' class='checkBoxContainer'><tbody name='xpthPLG_15112015'><tr name='xpthPLG_15112015'><th name='xpthPLG_15112015' class='usrInteractionChck'><input type='checkbox' " + val[15] + " disabled id='evaluation' name='xpthPLG_15112015'>Result evaluation</th><th name='xpthPLG_15112015' class='usrInteractionChck'><input type='checkbox' " + val[16] + " id='highliting' name='xpthPLG_15112015'>Element highliting</th></tr></tbody></table><p name='xpthPLG_15112015'></p></div>";

													doRest();									
													}
													try{
															chrome.storage.sync.get("checkBoxesValues", function(values){			
															updateChecks(checkBoxesValues);});
														}catch(error){
																	  console.log('chrome.storage.sync.get: line in src 276');
																	 }												
													}
										function doRest(){																
													document.getElementById('nameTagTemplate') ? htmlContainer.replaceChild(templateContainer, document.getElementById('nameTagTemplate')) : htmlContainer.appendChild(templateContainer);			
																				
													var box = document.createElement('Mydiv');	
														box.id = "plgContainer";
														box.style.fontSize = "initial";
														box.style.lineHeight = "initial";
														box.style.fontFamily = "initial";
														box.style.position = "absolute";
														box.style.zIndex = 3000;
													var finalBox = box.createShadowRoot();								
																
													var template = document.getElementById('nameTagTemplate');
														finalBox.innerHTML = template.innerHTML;											
													var settingsSelect = finalBox.getElementById('slctBox1');
													if(settingsSelect){	
														settingsSelect.onmousedown = finalBox.getElementById('slctBox2').onmousedown = function(){
															var checkboxes = this.parentNode.children[1];		
															checkboxes.style.display.indexOf('block') == -1 ? checkboxes.style.display = "block" : checkboxes.style.display = "none";
																};
															}			
														template.parentElement.removeChild(template);
																					
														document.getElementById('plgContainer') ? htmlContainer.replaceChild(box, document.getElementById('plgContainer')) : htmlContainer.appendChild(box);											
																					
														var alluserBoxTags = templateContainer.getElementsByTagName("*");//SET NAME ATTRIBUTE 
														for(var i=0;i<alluserBoxTags.length;i++){		
															alluserBoxTags[i] instanceof SVGElement ? alluserBoxTags[i].setAttributeNS(null,'name','xpthPLG_15112015') : alluserBoxTags[i].setAttribute('name','xpthPLG_15112015');		
																	}			
												finalBox.getElementById('userBoxOnOffSVG').onmousedown = function(){				
													if(this.previousSibling.innerHTML == 'SETTINGS'){									
													var checkBoxes = this.parentNode.getElementsByTagName('input');
																							
													for(var i=0;i<checkBoxes.length;i++){
																checkBoxesValues[i] = checkBoxes[i].checked ? 'checked' : '';	
																						}									
														(function(){chrome.storage.sync.set({"checkBoxesValues": checkBoxesValues},function(){

																	})})();//SAVE CHECKBOXES
																				 }													
															closeWindow(this);	 
															}																
															plgCircleDrag(finalBox.getElementById("userBoxHolder"));
													}
												}																
				}
				var current = document.getElementById(this.id.substring(0,this.id.indexOf('ID')));
				this.onmousemove = function(){current.setAttribute('class','circle anim');}
				this.onmouseout = function(){current.setAttribute('class','circle');}
		} 
	buttons[i].myActions();
	}

var highliting = (function(){
	var previous = '';
	document.body.onmouseover = function(e){
	
	var x = e.clientX, y = e.clientY;
		elementMouseIsOver = document.elementFromPoint(x, y);	
	
	if(checkBoxesValues[16] && STATE){	
				elementMouseIsOver.style.outline = '1px solid black';
				previous.style.outline = 'none';			
			}else{
				 elementMouseIsOver.style.outline = 'none';
				 }
	previous = elementMouseIsOver;	
}
})();	

function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

(function(){	//SHOW RESULTING XPATH
	var HTML = document.getElementsByTagName('html')[0];
	
	var containerWrapper = document.createElement('div');
	containerWrapper.id = 'contWrapper';
		
	var container = document.createElement('div');
	container.id = 'xpathServeContainer';
	container.className = 'userXpathServe';
	container.style.position = 'fixed';
	container.display = 'table';
	container.width = '25%';
	container.height = '6%';
	container.style.left = '40%';
	container.style.top = '40%';
	container.backgroundColor = 'white';
	container.borderTopWidth = '1.5em';
	container.borderLeftWidth = '0.3em';
	container.borderRightWidth = '0.3em';
	container.borderBottomWidth = '0.3em';
	container.borderRadius = '1em';
	container.borderColor = 'black';
	container.zIndex = 5000;
	
	var holder = document.createElement('span');
	holder.id = 'xpathServeHolder';
	
	var onOffBtn = "<svg height='14' width='14' id='serveBoxOnOff' name='xpthPLG_15112015'><path d='M0 0 14 14 M0 14 14 0' class='serveBoxOnOffbutton' name='xpthPLG_15112015'></path></svg>";
	container.innerHTML = onOffBtn;	
	
	var xpatHotPanel = document.createElement('div');
	xpatHotPanel.className = 'xpatHotPanel';
	xpatHotPanel.id = 'xpatHotPanel';
	
	var copied = document.createElement('div');
	copied.id = 'copiedXpath'; 
	copied.innerHTML = "<div style='display:table-cell;vertical-align:middle;'>- - - C O P I E D - - -</div>";
	
	container.appendChild(copied);	
	container.appendChild(holder);
	container.appendChild(xpatHotPanel);
	containerWrapper.appendChild(container);
	
	var injectionBox = document.createElement('div');
		injectionBox.id = 'xpathServeContainerWRAPPER';
		injectionBox.width = 'auto';
		injectionBox.height = '8%';
		injectionBox.style.position = 'absolute';
		injectionBox.style.left = '40%';
		injectionBox.style.top = '40%';		
	
	var shadowBox = injectionBox.createShadowRoot();	
	var style = "<style>.userXpathServe{position:absolute;display:table;width:25%;height:6%;background-color:white;border-top:solid 1.5em black;border-left:solid 0.3em black;border-right:solid 0.3em black;border-bottom:solid 0.3em black;border-radius:1em;bottom:0px !important;z-index:3000;text-align:center;}#xpathServeHolder{position:absolute;width:100%;height:1.5em;top:-1.5em;left:0;cursor:crosshair;}.serveBoxOnOffbutton{right:0;stroke:grey;stroke:white;cursor:pointer;stroke-width:1px;}#serveBoxOnOff{position:absolute;right:0.2em;top:-1.2em;background-color:black;border-radius:1em;cursor:pointer;z-index:50;}#serveBoxOnOff:hover .serveBoxOnOffbutton{cursor:pointer;stroke-width:2px;}.xpatHotPanel{display:table-cell;vertical-align: middle;width:auto;height:100%;padding-left:1em;padding-right:1em;z-index:100;cursor:pointer;}#copiedXpath{position:absolute;display:table;width:100%;height:100%;background-color:white;z-index:-5;border-bottom-left-radius:0.6em;border-bottom-right-radius:0.6em;opacity:0;font-size:auto;font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;}.copiedXpath{z-index:5 !important;animation:show .5s normal ease-in-out forwards;}@keyframes show{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}</style>";
	
	result = {					
		show: function(content){			
			xpatHotPanel.innerHTML = "<pre style='padding:0.3em;font-size:1.2em;font-weight:900;'>" + content + "</pre>";			
			HTML.appendChild(containerWrapper);	
			
			var originalContainer = document.getElementById('contWrapper');			
			shadowBox.innerHTML = style + originalContainer.innerHTML;
						
			originalContainer.parentElement.removeChild(originalContainer);
			

			
			document.getElementById('xpathServeContainerWRAPPER') ? HTML.replaceChild(injectionBox, document.getElementById('xpathServeContainerWRAPPER')) : HTML.appendChild(injectionBox);
			
			
			plgCircleDrag(shadowBox.getElementById('xpathServeHolder'));			
			shadowBox.getElementById('serveBoxOnOff').onmousedown = function(){
				closeWindow(this)
				};
	
			shadowBox.getElementById('xpatHotPanel').onmousedown = function(element){
				if(window.getSelection){									  
					var range = document.createRange();
					range.selectNodeContents(this);
					var selection = window.getSelection();  			
					selection.removeAllRanges();
					selection.addRange(range);
					document.execCommand("copy");
					var cp = shadowBox.getElementById('copiedXpath');					
					cp.className = 'copiedXpath';			
					var t = setInterval(function(){cp.removeAttribute('class'); cp.style.zIndex = -5; clearInterval(t);}, 500);		
					}
				}
			}		
	}	
})();
	
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXX 		UI		UI		UI	   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


//GLOBAL VARIABLES
var elementMouseIsOver, output1, output2;
var t = [];
var call = true;

//TEST XPATH Function
function testXpath(element){
	var prnthss;
	if(element.indexOf(")[") != -1)
		{
		prnthss = "(//";
		}else if(element.indexOf(")[") == -1)
				{				 
				prnthss = "//";				
				}
	var el = document.evaluate(prnthss + element, document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);				
	
	if(el.snapshotLength > 0 && el.snapshotLength <= 3)
		{
		return el.snapshotLength;
		}else{					
			 return false;
			 };			
}

function verify(element){	
		var element = (element.indexOf(")[") == -1 ? "//" : "(//").concat(element).replace(/(\/)\1+/g, "//");			
		var el = document.evaluate(element, document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);			

		if(el && el.snapshotLength == 1){
			  return element;
			  }else{
				   return false;
				   }
}
	
//BUILD XPATH Function
function getPathTo(element){
		
	var ix = 1;		
	var siblings = element.parentNode.childNodes;	//Get siblings of current tag
	var tmpXpth = "";
	var sameSiblingsCount = 0;
	
//HELP FUNCTION : GET ALL CHILDRENS OF PARENT WITH SAME TAG	
	var sameSiblings = element.parentNode.getElementsByTagName(element.tagName);
		for(n=0;n<sameSiblings.length;n++)
			{
				if(sameSiblings[n].parentNode == element.parentNode)
					{
					sameSiblingsCount++;
					}else{break;}
			}
					
//*******************************************************************************************					
			//ELEMENT WITH ID ?				
			if(checkBoxesValues[0]){
			    if(element.id !=''){					
					return '//' + element.tagName + '[@id="'+element.id+'"]';
					}
				}
				
				//ELEMENT WITH CLASS ?				
			if(checkBoxesValues[1]){
			    if(element.className !=''){	
					var test = verify(element.tagName + '[@class="'+element.className+'"]');					
						if(test){
							return test;
							}	 
					}
				}
				
				//ELEMENT WITH TITLE ?
				if(checkBoxesValues[2]){
			    if(element.title !=''){	
					var test = verify(element.tagName + '[@title="'+element.title+'"]');					
						if(test){
							return test;
							}	 
					}
				}
				
				//ELEMENT WITH NAME ?
				
				//ELEMENT WITH STYLE ?
				
				//ELEMENT WITH ANY UNIQUE ATTRIBUTE ?
				
				
//******************************* FUNCTIONS************************************************				
								
			//ELEMENT WITH TEXT ?				
				var checkText = function(e){						
				if(e.innerText && e.innerText.length > 0 && e.innerText.length < 40){
					if(e.tagName == 'BUTTON' || e.tagName == 'SPAN' || e.tagName == 'INPUT' || e.tagName == 'DIV')		
						{								
						var test = verify(e.tagName + "[text()='" + e.innerText + "']");
							if(test){							
								return test;
									}else{return false;}										 										
						}
				}else if(e.value){																	
						var test = verify(e.tagName + "[@value='" + e.value + "']");	
						if(test){							
								return test;
								}else{return false;}					
				}
				};
			if(checkBoxesValues[6]){
				var eval = checkText(element);
				if(eval)return eval;
			}
				
			//ELEMENT CONTAINS TEXT ? [contains()=]			
				var checkContainsText = function (e){				
					if(e.innerHTML.length > 0 && e.innerHTML.length < 40){
						if(e.tagName == 'BUTTON' || e.tagName == 'SPAN' || e.tagName == 'INPUT' || e.tagName == 'DIV')		
							{								
							var test = verify(e.tagName + "[contains(text(),'" + e.innerText.trim() + "')]");
								if(test){							
										return test;				  									  
										}										
							}
						}else if(e.value){
							var	test = verify(e.tagName + "[@value=contains(text(),'" + e.value.trim() + "')]");	
								if(test){							
										return test;
										}
							}
				}
			if(checkBoxesValues[7]){
				var eval = checkContainsText(element);
				if(eval)return eval;
			}
			
			//ELEMENT FOLLOWING-SIBLINGS
			if(checkBoxesValues[8]){
				if(checkText(element.parentElement.children[0])){
		var test = verify(checkText(element.parentElement.children[0]) + '/following-sibling::' + element.tagName);
							if(test){							
								return test;
								}
		var test = verify(checkContainsText(element.parentElement.children[0]) + '/following-sibling::' + element.tagName);	
							if(test){							
								return test;
								}
				}
			}
			
			//ELEMENT PRECEDING-SIBLINGS
			if(checkBoxesValues[9]){
				if(checkText(element.parentElement.children[0])){
						var sib = element.nextSibling;
						while(sib && sib.nodeType != 1){
								sib = sib.nextSibling;
										}	
					if(sib){	
						var test = verify(checkText(sib) + '/preceding-sibling::' + element.tagName);
						if(test){							
							return test;
							}
						if(test){							
							return test;
							}
				}
			}
		}	
		
			//ELEMENT /../
			if(checkBoxesValues[10]){
				var elementSiblings = element.parentElement.children, i=-1;			
				if(elementSiblings.length <= 5){
					while(++i<elementSiblings.length)
						{					
						if(elementSiblings[i].innerText)
							{								
								var test = verify(checkContainsText(elementSiblings[i]) + '/../' + element.tagName);			
									if(test){							
										return test;
										}	
									test = verify(checkText(elementSiblings[i]) + '/../' + element.tagName);							
									if(test){							
										return test;
										}
							}
						}					
				}				
			}
						
			//ELEMENT last()
			
			//ELEMENT starstWith()
			
			//ELEMENT endstWith()
//*****************************************************************************************************									
			//RECURSIVE CALL TILL REACH BODY TAG 				 
				for(var i= 0; i<siblings.length; i++) 					//LOOP THROUGH ALL ELEMENTS IN ELEMENT PARENT
					{
					var sibling = siblings[i];				
					if(sibling===element)								//FOUND EVALUATED ELEMENT 
						{										
						t.unshift('/' + element.tagName+'['+(ix)+']');	//ADD ELEMENT[position] TO ARRAY 	
						
						if(checkBoxesValues[11]){						//ELEMENT COUNT() FUNCTION - NEED TO REWORK SEPARATE IT !!!
						tmpXpth = element.parentNode.tagName + "[count("+element.tagName+")=" + sameSiblingsCount + "]";
						}else{
							  tmpXpth = element.parentNode.tagName;	
							 }
						
						var	suffix = tmpXpth.concat(t.join(''));											
						var n = testXpath(suffix);

								if(n == 3 || n == 2)
									{															
										for(; n >= 1; n--)
											{	
											var temp = ")["+n+"]";																							
												if(verify(suffix + temp))
													{																
													break;
													}
											}														
									call = false;								
									return output2 = "(//" + suffix + temp;								
									}else if(n==1)
											{
											call = false;								
											return output2 = "//" + suffix;									
											}	
																	
						//GENERIC XPATH RETURN				
						output1 = getPathTo(element.parentNode) +'/'+element.tagName+'['+ ix +']';//go to next tag (element is first)								
						return (call == true ? output1 : output2);
						}									
						if(sibling.nodeType===1 && sibling.tagName===element.tagName)//increment index (element is not first)
							{			
							ix++;				
							}
					}		
}

//EVENT ACTION Function
(function(){
	addEventListener("keydown", function(event, htmlE){		
		if(event.shiftKey)
			{		
			var xpth = getPathTo(elementMouseIsOver);
			result.show(xpth);
			t = [];
			}
	});
})();

//EVENT ACTION Function SwitchOf
addEventListener("keydown", function(event){
if(event.tabKey)
	{	
	document.getElementById("boxXpth").parentNode.removeChild(document.getElementById("boxXpth"));		 
	}});

	}     
 })();
 
	
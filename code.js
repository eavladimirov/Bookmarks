
var arrBtn = [];
var arrTxt = [];

main();

function main(){	
 
	//variables for count created buttons and texts
	var numberBtn = 0;
	var numberTxt = 0;
	
	//object button
	var Button = (function(){
				
		function Button(numberBtn, title, link){
			this.setNumberBtn(numberBtn);
			this.setTitle(title);
			this.setLink(link);
		}
		
		Button.prototype.getNumberBtn = function(){
			return this._numberBtn;
		};
		
		Button.prototype.setNumberBtn = function(value){
			this._numberBtn = value;
		};
		
		Button.prototype.getTitle = function(){
			return this._title;
		};
		
		Button.prototype.setTitle = function(value){
			this._title = value;
		};
		
		Button.prototype.getLink = function(){
			return this._link;
		};
		
		Button.prototype.setLink = function(value){
			this._link = value;
		};
		
		Button.prototype.getBackground = function(){
			return this._background;
		};
		
		Button.prototype.setBackground = function(value){
			this._background = value;
		};
		
		Button.prototype.render = function(){
				document.body.innerHTML += '<div id="btn' + this.getNumberBtn() + '" class="btn" onmouseover="drag(this.id)" ondblclick="changeBackground(this.id)"><a href="' + this.getLink() + '">'+ this.getTitle() +'</a></div>';
			};
			
		return Button;
	}());
	//end object button
	
	//object text
	var Text = (function(){
				
		function Text(numberTxt, txt){
			this.setNumberTxt(numberTxt);
			this.setText(txt);
			
		}
		
		Text.prototype.getNumberTxt = function(){
			return this._numberTxt;
		};
		
		Text.prototype.setNumberTxt = function(value){
			this._numberTxt = value;
		};
		
		Text.prototype.getText = function(){
			return this._text;
		};
		
		Text.prototype.setText = function(value){
			this._text = value;
		};
		
		Text.prototype.getBackground = function(){
			return this._background;
		};
		
		Text.prototype.setBackground = function(value){
			this._background = value;
		};
		
		Text.prototype.render = function(){
				document.body.innerHTML += '<div id="txt' + this.getNumberTxt() + '" class="txt" onmouseover="drag(this.id)" ondblclick="changeBackground(this.id)">' + this.getText() + '</div>';
			};
			
		return Text;
	}());
	//end object text

	//object toolbar
	var Toolbar = (function(){
 		
		function Toolbar(){
		
		}
		
		Toolbar.prototype.init = function(){
			document.getElementById("createButton").addEventListener("click", function(event) {
			toolbar.createButton(event);
			}, false);
		
			document.getElementById("createText").addEventListener("click", function(event) {
			toolbar.createText(event);
			}, false);			
		};
		Toolbar.prototype.render = function(){
			document.body.innerHTML += '<div id="toolbar" class="toolbar" onmouseover="drag(this.id)"><button id="add" onclick="showAddLink()" >+ Link</button><button id="create" onclick="showAddText()">+ Note</button><div style="display:none" id="addLink" ><label for="title">Title:</label> <input type="text" id="title"><br><label for="link">Link:</label> <input type="text" id="link"><br><button id="createButton" >Add Link</button><button  onclick="hideAddLink()" >Close</button></div><div style="display:none" id="addText" ><label for="text">Note:</label> <input type="text" id="text"><button id="createText" >Add Note</button><button  onclick="hideAddText()" >Close</button></div></div>';
		};
		Toolbar.prototype.createButton = function(){
			numberBtn +=1;
			var btn = new Button(numberBtn, document.getElementById("title").value, document.getElementById("link").value);
			btn.render();
			arrBtn["btn" + numberBtn] = btn;
			toolbar.init();
			$( "#addLink" ).slideUp(500);
		};
		Toolbar.prototype.createText = function(){
			numberTxt +=1;
			var txt = new Text(numberTxt, document.getElementById("text").value);
			txt.render();
			arrTxt["txt" + numberTxt] = txt;
			toolbar.init();
			$( "#addText" ).slideUp(500);
		};
		
		return Toolbar;
	}());
	//end object toolbar

	
	var toolbar = new Toolbar();
	
	toolbar.render();
	toolbar.init();
}

//function for draggable objects
function drag(id) {
    $( "#" + id ).draggable();
};
 
function showAddLink(){
	
	$("#addLink").slideDown(500);
}
 
function showAddText(){
	
	$( "#addText" ).slideDown( 500);
}

function hideAddLink(){
	
	$("#addLink").slideUp(500);
}
 
function hideAddText(){
	
	$( "#addText" ).slideUp( 500);
}

//colorpicker
function changeBackground(id){

	$("#full").spectrum({
	flat: true,
    color: "#ECC",
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
    move: function (color) {
        
    },
    show: function () {
    
    },
    beforeShow: function () {
    
    },
    hide: function () {
    
    },
    change: function() {
        
    },
    palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
});


//cancel color picker dialog
$( ".sp-cancel" ).on( "click", function() {
	$( "#picker" ).slideUp(500);
	window.setTimeout(destroyDialog,800);
});

//get background color from element to dialog
$("#full").spectrum("set", $("#" + id).css("background-color"));
$("#picker").slideDown(500);
	
//choose color and close dialog
$( ".sp-choose" ).on( "click", function() {
	$( "#" + id ).css('background-color', $(".sp-input").val());
		
	//save color to object
	if(id[0] == "b"){
		arrBtn[id].setBackground($(".sp-input").val());
	}else{
		arrTxt[id].setBackground($(".sp-input").val());
	}
	//console.log(arrBtn[id].getBackground());
	$( "#picker" ).slideUp(500);
	window.setTimeout(destroyDialog,800);
	
});

//destroy dialog (with delay for animation) because it came every time and display new dialog any time and comes on the screen many dialogs 
function destroyDialog() {
   $("#full").spectrum("destroy");
}
}



function main(){	
 
	//variables for count created buttons and texts
	var numberBtn = 0;
	var numberTxt = 0;
	
	//object button
	var button = function(numberBtn, title, link){
		
		var button = [];
		
		button.render = function(){
			document.body.innerHTML += '<div id="btn' + numberBtn.toString() + '" class="btn" onmouseover="drag(this.id)"><a href="' + link + '">'+ title +'</a></div>';
		};
		
		return button;
	};
	//end object button
	
	//object text
	var text = function(numberTxt, txt){
		
		var text = [];
		
		text.render = function(){
			document.body.innerHTML += '<div id="txt' + numberTxt.toString() + '" class="txt" onmouseover="drag(this.id)"><p>' + txt + '</p></div>';
		};
		
		return text;
	};
	//end object text

	//object toolbar
	var toolbar = function(){
 
		var toolbar = [];
		toolbar.init = function(){
			document.getElementById("createButton").addEventListener("click", function(event) {
			toolbar.createButton(event);
			}, false);
		
			document.getElementById("createText").addEventListener("click", function(event) {
			toolbar.createText(event);
			}, false);
			
			
		};
		toolbar.render = function(){
			document.body.innerHTML += '<div id="toolbar" class="toolbar" onmouseover="drag(this.id)"><button id="add" onclick="showAddLink()" >Add Link</button><button id="create" onclick="showAddText()">Add Note</button><div style="display:none" id="addLink" ><label for="title">Title:</label> <input type="text" id="title"><br><label for="link">Link:</label> <input type="text" id="link"><br><button id="createButton" >Add Link</button></div><div style="display:none" id="addText" ><label for="text">Note:</label> <input type="text" id="text"><button id="createText" >Add Note</button></div></div>';
		};
		toolbar.createButton = function(){
			numberBtn +=1;
			var btn = button(numberBtn, document.getElementById("title").value, document.getElementById("link").value);
			btn.render();
			toolbar.init();
			document.getElementById("addLink").style.display = 'none';
		};
		toolbar.createText = function(){
			numberTxt +=1;
			var txt = text(numberTxt, document.getElementById("text").value);
			txt.render();
			toolbar.init();
			document.getElementById("addText").style.display = 'none';
		};
		
		return toolbar;
	};
	//end object toolbar

	
	var toolbar = toolbar();
	
	toolbar.render();
	toolbar.init();

}

//function for draggable objects
function drag(id) {
    $( "#" + id ).draggable();
};
 
function showAddLink(){
	document.getElementById("addLink").style.display = 'block';
}
 
function showAddText(){
	document.getElementById("addText").style.display = 'block';
}

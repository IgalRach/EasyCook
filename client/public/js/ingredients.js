//DESCRIPTION
var writen = document.querySelector('.splitted');

var txt1 = document.getElementById('disabledBox1').textContent;
var text1 = txt1.split("\n"); 

for(var i=0; i< text1.length; i++){
    var div = document.createElement("DIV");
    div.classList.add("single-preparation-step", "d-flex");
    writen.appendChild(div);  
    var h4 = document.createElement("H4");
    h4.innerHTML = i+1;          
    div.appendChild(h4);
    var p = document.createElement("P"); 
    p.innerHTML = text1[i];      
    div.appendChild(p);
}

//INGREDIENTS
var dynamic = document.querySelector('.dynamic');

var txt2 = document.getElementById('disabledBox2').textContent;
var text2 = txt2.split("\n"); 

for(var i=0; i< text2.length; i++){
    var div = document.createElement("DIV");
    div.classList.add("custom-control","custom-checkbox");
    dynamic.appendChild(div);  
    var input = document.createElement("INPUT");
    input.setAttribute("type", "checkbox");
    input.classList.add("custom-control-input");          
    div.appendChild(input);

    var label = document.createElement("LABEL");
    label.classList.add("custom-control-label"); 
    label.innerHTML = text2[i];           
    div.appendChild(label);    
}

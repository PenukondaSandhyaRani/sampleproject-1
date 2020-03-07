/*function loadjson(file,callback) {
var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
	if(xhr.readyState==4 && xhr.status==200){
		callback(xhr.responseText);
	}
};
xhr.send(null);
}
loadjson("data.json",function(text){
var data = JSON.parse(text);
console.log(data);
basics(data.details);
})*/

function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new error('error'));
			}
		})
	})
}

var newfile=loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	basics(data.details);
    career(data.careerobjective);
})
var ch=document.querySelector(".child1");
function basics(det){
	var img=document.createElement("img");
	img.src="msdhoni.jpg";
	img.alt="picture";
	ch.appendChild(img);
	var s=document.createElement("h1");
	s.textContent=det.name;
	ch.appendChild(s);
	var email=document.createElement("a");
	email.href="mailto:penukondasandhyarani2157@gmail.com";
	email.textContent="penukondasandhyarani2157@gmail.com";
	ch.appendChild(email);
	var n=document.createElement("h3");
	n.textContent=det.phoneno;
	ch.appendChild(n);
	/*Child(var c=document.createElement("h2");
	c.textContent=det.cb;
	ch.appendc);*/

}
/*var ch2=document.querySelector(".child2");
function career(info){
 var cb=document.createElement("h2");
	cb.textContent="careerobjective";
	ch2.appendChild(cb);
	var c=document.createElement("h4");
	c.textContent=info.cb1;
	ch2.appendChild(c);
}*/
function bgchange(color)
{
document.body.style.background =colorarray[color];
}
 
var colorarray = ["#e58e26","#f9b4ab","#B1FB17","#78e08f","#fd79a8"];
var str="";
for(var i=0;i<colorarray.length;i++) { str+='<span onclick="bgchange(' +i+')"
    style="background-color:'+colorarray[i]+'">'+colorarray[i]+'</span>';
    }
    document.getElementById("colorbox").innerHTML=str;

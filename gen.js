function nameGen(type){
      var tp=type;
      var op=document.getElementById('option').value;
      var ip=document.getElementById('berapa').value;
      var element=document.createElement("textarea");
      element.setAttribute("class","form-control input-sm u-full-width");
      element.setAttribute("style","height:150px");
      element.setAttribute("id","result");
      for(i=0;i<ip;i++){
        if(op==="JP"){
        if(tp===1){
          rnd=Math.floor(Math.random()*jp2.length);
          rnd2=Math.floor(Math.random()*jp1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
	  tag4=Math.floor(Math.random()*tanda4.length);
          names=jp2[rnd]+"\n"+tanda1[tag2]+tanda4[tag4]+"\n"+tanda3[tag3]+jp1[rnd2]+tanda2[tag1];
        }
        else{
          rnd=Math.floor(Math.random()*jp2.length);
          rnd2=Math.floor(Math.random()*jp1.length);
          names=jp2[rnd]+"\n";
	  names=jp1[rnd2]+"\n";

        }}
        if(op==="US"){
        if(tp===1){
          rnd=Math.floor(Math.random()*us2.length);
          rnd2=Math.floor(Math.random()*us1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          names=us2[rnd]+tanda1[tag2]+"\n"+tanda3[tag3]+us1[rnd2]+tanda2[tag1]+"\n";
        }
          else{
          rnd=Math.floor(Math.random()*us1.length);
          rnd2=Math.floor(Math.random()*us1.length);
          names=us1[rnd]+" "+us1[rnd2]+"\n";
        }}
        if(op==="DE"){
        if(tp===1){
          rnd=Math.floor(Math.random()*de2.length);
          rnd2=Math.floor(Math.random()*de1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          names=de2[rnd]+tanda1[tag2]+"\n"+tanda3[tag3]+de1[rnd2]+tanda2[tag1]+"\n";
        }
        else{
          rnd=Math.floor(Math.random()*de2.length);
          rnd2=Math.floor(Math.random()*de1.length);
          names=de2[rnd]+" "+de1[rnd2]+"\n";
        }}
		if(op==="FR"){
        if(tp===1){
          rnd=Math.floor(Math.random()*fr2.length);
          rnd2=Math.floor(Math.random()*fr1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          names=fr2[rnd]+tanda1[tag2]+"\n"+tanda3[tag3]+fr1[rnd2]+tanda2[tag1]+"\n";
        }
        else{
          rnd=Math.floor(Math.random()*fr2.length);
          rnd2=Math.floor(Math.random()*fr1.length);
          names=fr2[rnd]+" "+fr1[rnd2]+"\n";
        }}
		if(op==="IT"){
        if(tp===1){
          rnd=Math.floor(Math.random()*it2.length);
          rnd2=Math.floor(Math.random()*it1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          names=it2[rnd]+tanda1[tag2]+"\n"+tanda3[tag3]+it1[rnd2]+tanda2[tag1]+"\n";
        }
        else{
          rnd=Math.floor(Math.random()*it2.length);
          rnd2=Math.floor(Math.random()*it1.length);
          names=it2[rnd]+" "+it1[rnd2]+"\n";
        }}
		if(op==="KR"){
        if(tp===1){
          rnd=Math.floor(Math.random()*kr2.length);
          rnd2=Math.floor(Math.random()*kr1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          names=kr2[rnd]+tanda1[tag2]+"\n"+tanda3[tag3]+kr1[rnd2]+tanda2[tag1]+"\n";
        }
        else{
          rnd=Math.floor(Math.random()*kr2.length);
          rnd2=Math.floor(Math.random()*kr1.length);
          names=kr2[rnd]+" "+kr1[rnd2]+"\n";
        }}
		if(op==="TW"){
        if(tp===1){
          rnd=Math.floor(Math.random()*tw2.length);
          rnd2=Math.floor(Math.random()*tw1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          names=tw2[rnd]+tanda1[tag2]+"\n"+tanda3[tag3]+tw1[rnd2]+tanda2[tag1]+"\n";
        }
        else{
          rnd=Math.floor(Math.random()*tw2.length);
          rnd2=Math.floor(Math.random()*tw1.length);
          names=tw2[rnd]+" "+tw1[rnd2]+"\n";
        }}
		if(op==="BR"){
        if(tp===1){
          rnd=Math.floor(Math.random()*br2.length);
          rnd2=Math.floor(Math.random()*br1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          names=br2[rnd]+tanda1[tag2]+"\n"+tanda3[tag3]+br1[rnd2]+tanda2[tag1]+"\n";
        }
        else{
          rnd=Math.floor(Math.random()*br2.length);
          rnd2=Math.floor(Math.random()*br1.length);
          names=br2[rnd]+" "+br1[rnd2]+"\n";
        }}
		if(op==="TR"){
        if(tp===1){
          rnd=Math.floor(Math.random()*tr2.length);
          rnd2=Math.floor(Math.random()*tr1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
	  tag3=Math.floor(Math.random()*tanda3.length);
          names=tr2[rnd]+tanda1[tag2]+"\n"+tanda3[tag3]+tr1[rnd2]+tanda2[tag1]+"\n";
        }
        else{
          rnd=Math.floor(Math.random()*tr2.length);
          rnd2=Math.floor(Math.random()*tr1.length);
          names=tr2[rnd]+" "+tr1[rnd2]+"\n";
        }}
        br=document.createElement('br');
        element.appendChild(document.createTextNode(names));
        element.appendChild(br);
      }
      if(document.getElementById("result")){
        document.getElementById("placeholder").removeChild(document.getElementById("result"));
      }
document.getElementById("placeholder").appendChild(element);
    }
    function copy() {
        let textarea = document.getElementById("result");
        textarea.select();
        document.execCommand("copy");
      }

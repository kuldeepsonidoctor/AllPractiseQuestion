var studentData=[];
const storeData=()=>{
    var name=document.querySelector("#name").value;
    document.querySelector("#name").value="";
    var clas=document.querySelector("#class").value;
    document.querySelector("#class").value="";
    var marks=document.querySelector("#Marks").value;
    document.querySelector("#Marks").value="";
    var file=document.querySelector("#fileToUpload").value.split("\\");
    document.querySelector("#fileToUpload").value="";   
    var filename=file[file.length-1];
    var color=marks>75?"green":marks<40?"red":"blue";
    var std={
        "name":name,
        "class":clas,
        "marks":marks,
        "filename":filename,
        "color":color
    }
    studentData.push(std);
  
    var row=document.createElement("tr");
    row.setAttribute("style",`background:${color};`);
    var table="";
     table+=`
        <td>${std.name}</td>
        <td>${std.class}</td>
        <td>${std.marks}</td>
        <td><img src=${std.filename}></td>
    `;
    row.innerHTML=table
    console.log(row);
    console.log(document.getElementById("#stddata"));
    document.querySelector("#stddata").appendChild(row);
   

}
const filterrecords=()=>{
    var checkboxes=document.querySelectorAll('input[name="marksfilter"]:checked');
    var foncolor=document.querySelector("#fontcolor").value;
    var values=[];
    for (var checkbox of checkboxes) {
       values.push(checkbox.value);
    }
    console.log(values);
      var newrecords=studentData.filter(data=>{
        var color=data.color;
        console.log(color)
        return values.includes(color);
      });
      console.log(newrecords);
      document.querySelector("tbody").innerHTML="";
      
      for(let std of newrecords){
        var row=document.createElement("tr");
        row.setAttribute("style",`background:${std.color};color:${foncolor};`);
        var table="";
         table+=`
            <td>${std.name}</td>
            <td>${std.class}</td>
            <td>${std.marks}</td>
            <td><img src=${std.filename}></td>
        `;
        row.innerHTML=table;
        document.querySelector("#stddata").appendChild(row);

      }
      

}
document.querySelector(".filterbutton").addEventListener('click',()=>{
   var status=document.querySelector(".filter").style.display;
   if(status=="none"){
    document.querySelector(".filter").style.display="block";
   }
   else{
    document.querySelector(".filter").style.display="none"
   }
});

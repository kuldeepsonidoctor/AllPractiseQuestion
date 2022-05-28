// var words;
// var dataa="";
// var a,e,i,o,u;
// function getwords(e){
//      words=e.target.value.split(",");
//      for(let x in words){
//          var newword=words[x];
//          if(words[x]!=null){
//           if(x==0){
//             newword.fontStyle = "italic";


//           }
//           else if(x==words.length-1){
//             newword.fontStyle = "bold";

//           }
//           else{
//             newword.fontStyle = "bold italic underline";

//           }
//          }
//          dataa+=newword+" ";

//         }
//         console.log(dataa);

//         document.querySelector(".container").innerHTML=dataa;

//     }
var comaseparatedValues;

var inputTestarea;
function comavalues() {
    comaseparatedValues = document.querySelector("#comadata").value.split(",");
    getwords();
    console.log(comaseparatedValues);
}
function getwords() {
    var innerData = "";
    var a = 0, e = 0, i = 0, o = 0, u = 0, total = 0;
    inputTestarea = document.querySelector("#w3review").value.split(" ");
    for (let input of inputTestarea) {
        var notAllowed = false;
        var firstWord = input.charAt(0);
        var lastWord = input.charAt(input.length - 1);
        if (comaseparatedValues.includes(firstWord) && comaseparatedValues.includes(lastWord)) {
            innerData += `<u><i><b class="${input}">${input}</b></i></u>` + " ";
        }
        else if (comaseparatedValues.includes(firstWord)) {
            innerData += `<b class="${input}">${input}</b>` + " ";
        }
        else if (comaseparatedValues.includes(lastWord)) {
            innerData += `<i class="${input}">${input}</i>` + " ";
        }
        else {
            innerData += input + " ";
            notAllowed = true;
        }

        if (!notAllowed) {

            input.split("").forEach((c, i) => {
                console.log("aaya");
                if (c == "a" || c == "A") {
                    a++;
                }
                else if (c == "e" || c == "E") {
                    e++;
                }
                else if (c == "i" || c == "I") {
                    i++;
                }
                else if (c == "o" || c == "O") {
                    o++;
                }
                else if (c == "u" || c == "U") {
                    u++;
                }
            });
        }

    }
    total = a + i + e + o + u;
    var tabledata = [0, a, 0, e, 0, i, 0, o, 0, u, 0, total];
    console.log(tabledata);
    document.querySelector(".showsdata").innerHTML = innerData;
    if (total) {
        document.querySelectorAll(".table td").forEach((item, index) => {
            if (index % 2 != 0) {
                item.innerHTML = tabledata[index];
            }
        });
    }
    var inputDiv = document.querySelector(".showsdata");

    if (total % 5 == 0) {
        inputDiv.style.backgroundColor = "black";
        inputDiv.style.color = "white";
    }
    else if (total % 2 == 0) {
        inputDiv.style.backgroundColor = "black";
        inputDiv.style.color = "yellow";
    }
    else if (checkPime(total)) {
        inputDiv.style.backgroundColor = "Purple";
        inputDiv.style.color = "Pink";
    }
    else {
        inputDiv.style.backgroundColor = "Orange";
        inputDiv.style.color = "Purple";
        
    }

console.log(innerData);
}
function interchange(e){
    var backcol=e.target.style.backgroundColor;
    var textcolor=e.target.style.color;
    console.log(backcol);
    console.log(textcolor);
    e.target.style.backgroundColor=textcolor;
    e.target.style.color=backcol;
}
function checkPime(total) {
    var flag = true;
    if (total == 1) {
        flag = false;
        return flag;
    }
    for (let i = 2; i < total; i++) {
        if (total % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function searchColor(e){
    var searchvalue="."+e.target.value;
    console.log(document.querySelectorAll(searchvalue));
    document.querySelectorAll(searchvalue).forEach((item)=>{
        item.style.color="brown";
    });
    
}

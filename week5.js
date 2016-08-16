var createName = function(first,last){
    return first +" "+last;
}

var askName = function(){
    //while(fullName !== "Bob Jones"){
        var first = prompt("Whats your first name?");
        var last = prompt("Whats your last name?");
        var fullName = createName(first,last);
        alert("Your name is "+ fullName);
    //}
}
askName()

var asker = document.getElementById("asker");

asker.onclick = askName;


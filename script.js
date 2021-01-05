function test(){
    var rawInput = document.getElementsByTagName("input");
    var input = rawInput[0].value;
    var brain = input;
    document.getElementById("input").value= null;
    if (brain == ""){
        alert("enter something in the text box");
    }
    else if(brain == "1"){
        alert("This is dumbness.");
    }
    else if(brain == "2"){
        alert("This is numbness");
    }
    else if(brain == "3"){
        alert("This is the backbencher's");
    }
    else if(brain == "4"){
        alert("This is smart.");
    }
    else if(brain == "5"){
        alert("This is a super intelligent but liar brain ");
    }
    else if(brain == "6"){
        alert("this is Einstein level liar ");
    }
    else if(brain == "7"){
        alert(" The odd one out... ");
    }
    else if(brain == "8"){
        alert(" The random number... ");
    }
    else if(brain == "9"){
        alert(" you are a Sololearn Thug ");
    }
    else if(brain == "10"){
        alert(" If you are this intelligent, you must be a full time coder.. right??👨‍💻👩‍💻 ");
    }
    else if(brain == "11"){
        alert(" You are outta this list. Thankyou...(for lying...shhhhh!!🤫🤫🤫) ");
    }
    else{
        alert("you are lying");
    }
    
};

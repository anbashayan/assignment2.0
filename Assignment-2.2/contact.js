function myfunc(){


    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phoneNumber =document.getElementById("mobile").value;
    
    
    
    
    if (/^[a-zA-Z]{2,23}/.test(fname)) {
        document.getElementById("firname").innerHTML = " "
    } else {
        document.getElementById("firname").innerHTML = "<span style='color:red; font-size: 17px;'>charecters should be 2 to 23</span>";
        
      
    }

    if (/^[a-zA-Z]{2,23}/.test(lname)) {
        document.getElementById("lasname").innerHTML = " "
    } else {
        document.getElementById("lasname").innerHTML = "<span style='color:red; font-size: 17px;'>charecters should be 2 to 23</span>";
      
    }
    
    
    if (/[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim.test(email)) {
        document.getElementById("maile").innerHTML = " "
    } else {
        document.getElementById("maile").innerHTML ="<span style='color:red; font-size: 17px;'>Invalid e-mail</span>";
    
    }
    
    if (/^\d{10}$/.test(phoneNumber)) {
        document.getElementById("cntno").innerHTML = " "
    } else {
        document.getElementById("cntno").innerHTML = "<span style='color:red; font-size: 17px;'>Contact no should contain 10 digits.</span>";
        return false;
    }
    
    
    };
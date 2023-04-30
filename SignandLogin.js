function sayHello() 
{
    alert("Hello and Welcome You From Developer!");
}

function check()
{
    var pw=document.getElementById('pass2').value;
    var pw1=document.getElementById('pass1').value;

    if(pw1=='')
    {
      alert("Password fill can not be empty");
    }
    else if(pw=='')
    {
        alert("Password fill can not be empty");
    }
    else if(pw1!=pw)
    {
        alert("Please Match the Password");
        return false;
    }
    else if(pw1==pw)
    {
        alert("Logged In");
        return true;
    }
}


function valideInput() 
{
    var un=document.getElementById('name').value;
    var pw=document.getElementById('pass2').value;

    pass1=form.pass1.value;
    pass2=form.pass2.value;

    if(pass1=='')
    {
      alert("Password fill can not be empty");
    }
     if(pass2=='')
    {
        alert("Password fill can not be empty");
    }
    else if(pass1!=pass2)
    {
        alert("Please Match the Password");
        return false;
    }
    else 
    {
        alert("Logged In");
        return true;
    }

    un1=document.form("form").uname.value;
    pw1=document.form("form").pass1.value;
    pw2=document.form("form").pass2.value;


    if(un1=='')
    {
        alert('Username can not be Empty!');
    }
    else if(pw1=='')
    {
        alert("Password can not be Empty!");
    }
    else if (pw2=='') 
    {
        alert("These password field can not be empty ");
    }
}

function focusEvent() 
{
    document.getElementById('spanUN').style.color='blue';
    document.getElementById('name').style.background='silver';
}

function blurEvent()
{
    document.getElementById('spanUN').style.color='black';
    document.getElementById('name').style.background='';
}

function changed()
{
    var pw=document.getElementById('pass2');
    var pw1=document.getElementById('pass1');


    if(pw.value.length<8)
    {
        document.getElementById('spanPW').style.color='red';
        document.getElementById('spanPW').innerHTML='Too Short';
    }

    else 
    {
        document.getElementById('spanPW').style.color='green';
        document.getElementById('spanPW').innerHTML='Long Enough';
    }

    if(pw1.value.length<8)
    {
        document.getElementById('spanPW').style.color='red';
        document.getElementById('spanPW').innerHTML='Too Short';
    }

    else 
    {
        document.getElementById('spanPW').style.color='green';
        document.getElementById('spanPW').innerHTML='Long Enough';
    }
}
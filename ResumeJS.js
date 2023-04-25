



window.onscroll=function() {myfunction()};

    function myfunction() 
    {
        if(document.documentElement.scrollTop>350)
        {
            document.getElementById("s1").className="side1";
        }
       
    }





window.onscroll=function() {myfunction}
{
    if(document.documentElement.scrollTop>1000000)
    {
        document.getElementById("s2").className="side2"
    }
}


function size() 
{
    alert("You Resized the Window");
}
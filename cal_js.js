  let body=document.querySelector("body");
        let input=document.querySelector("input");

    
input.addEventListener("input",(e)=>
{
    if(e.target.value=="Error")
        {
            input.value="";
        }
})

        body.addEventListener("click",function(e){

             if(e.target.innerHTML=="AC"){
                input.value="";
            }
            else if(e.target.innerHTML=="⌫"){
                  input.value=input.value.slice(0,-1);
            }
            
            else if(e.target.innerHTML=="="){
                try{
                    input.value=eval(input.value);
                }
                catch(err){
                    input.value="Error";
                }
            }
            else if(e.target.tagName=="BUTTON"){
                input.value+=e.target.innerHTML;
            }
            else{
                return;
            }
        })
       

input.addEventListener("keydown",(e)=>
{
  if (e.key=="Enter") {
    e.preventDefault();  
    if(input.value=="")
    {
      input.value="";
       return;
    }
    try 
    {
      input.value = eval(input.value);  
    } 
    catch(err) 
    {
      input.value="";      
    }
  }
});

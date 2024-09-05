        
        function redirect(){
            var test =  document.querySelector('#passport');
            if(test.value == "123456"){
                    window.location.href="blank.html";
            }else if(test.value == "EM0465896"){
               window.location.href="rostom.html"
            }else if(test.value== "A04970011"){
                window.location.href="roman.html"
            }else if(test.value== "A06328866"){
                window.location.href="al_amin.html"
            }   
            else{
                 alert("invalid Passport")
            }
   
              }
           
               
             
           
         
          

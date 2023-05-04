let string="";
let buttons = document.querySelectorAll('.button');
let input= document.querySelector('.inputtext');
console.log(input)
Array.from(buttons).forEach((button)=>{

     button.addEventListener('click',(e)=>{
         console.log(e.target.innerHTML)   
        if(e.target.innerHTML == '='){
             string=eval(string);
             input.value=string;


        }
        else  if(e.target.innerHTML == 'C'){
            string=" ";
            input.value=string;


       }
       else {
     //    console.log((e.target));
     console.log(string)
         string=string+e.target.innerHTML;
         input.value=string;
       }
     })
})
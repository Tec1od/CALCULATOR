

let input = document.getElementById("inputBox");

//we select all button
let buttons = document.querySelectorAll("button");

//we add empty string
let string = "";
//get from buttons above
let arr = Array.from(buttons);


//we add for ecah loop;



arr.forEach(button => {
    button.addEventListener('click', (e) => {
    
        //tahat is the number of operator id
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;


        }else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;

        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;


        }else{
            string += e.target.innerHTML;
            input.value = string;


        };
        
    });
});

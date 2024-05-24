let string = "0"
let buttons = document.querySelectorAll('.button')

// console.log(buttons)
Array.from(buttons).forEach((button) => {
    
    button.addEventListener('click', (e) => {
        
        //console.log(e.target, "hum chal rhi hai")
        
        // if(e.target.innerH)
        try{
            if(e.target.innerHTML === '='){
            string = eval(string)
            //console.log(document.querySelectorAll('input').values=string)
            document.querySelector('input').value = string
           // console.log("issko nhi chalna tha")
        }
        else if(e.target.innerHTML === 'AC'){
            string = ""
            document.querySelector('input').value = string
        }
        else if(e.target.innerHTML === '+/-'){
            string = string * -1;
            document.querySelector('input').value = string
        }
        else if(e.target.innerHTML === '%'){
            string = string / 100;
            document.querySelector('input').value = string
        }
        else{
            console.log(e.target)
            // string=''
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string
        }
    } catch(error){
        console.error('An error occurred:', error.message);
        string = "error";
        document.querySelector('input').value = string;
    }
    })
})
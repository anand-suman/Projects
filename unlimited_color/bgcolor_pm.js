const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    // const hex = '123456';
    let color = '#';
    for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)];
      
    }
    return color;
    };
    
    //console.log(randomcolor())
    
    let invalidId
    const startCholorChange = function(){
      if(!invalidId)
      {
        invalidId=setInterval(ChangeBgcolor,1000)
      }
    
    function ChangeBgcolor(){
        document.body.style.backgroundColor = randomcolor();
      }
    };
    const stopChangeColor = function(){
      clearInterval(invalidId);
      invalidId = null;
    }
    document.querySelector('#start').addEventListener('click',startCholorChange)
    document.querySelector('#stop').addEventListener('click',stopChangeColor)
    
    // const stopButton = document.querySelector('#stop');
    // if(stopButton) {
    //   stopButton.addEventListener('click', stopChangeColor);
    // } else {
    //   console.error("Element with id 'stop' not found.");
    // }
    
    
    
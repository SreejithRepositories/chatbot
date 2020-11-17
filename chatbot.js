
// document.addEventListener("DOMContentLoaded", function(){
//     for(i = 0; i < 4; i++){
//         if(i == 0){
//             $('#innerBox1').text("user: text" + ' ' + i);
//         }
//         else{
//             $('#innerBox1').append("\nuser: text" + ' ' + i);
//         }



       
//     }
  
//   }); 

//   var innerBox1 = document.getElementById("innerBox1");
//   innerBox1.addEventListener('keyup', function(e){
//       console.log('pressed!'); 
//   })


document.addEventListener('click', (e)=>{
  if(e.explicitOriginalTarget.id == 'virtualassistant'){
    window.open("http://localhost:3000/chat");
      
  }   
})

document.addEventListener('keyup', (e)=>{
    if(e.keyCode !== 13){
        return;
    }
    // if(e.explicitOriginalTarget.id == 'innerBox1'){
    //     $('#innerBox2').val('');
    //     $('#innerBox2').val($('#innerBox1').val());
        
    // }
    if(e.explicitOriginalTarget.id == 'innerBox1'){
       let lines =  $('#innerBox1').val().split('\n');
       console.log(lines)
       var toBeAnswered = lines[lines.length - 2]
       
       $.ajax({
           url: '/fetchAnswer',
           method: 'POST',
           data: {question: toBeAnswered}
       }).done((response)=>{
        if($('#innerBox2').val() == ''){
            $('#innerBox2').val(response.yourquestion + '\n' + response.answer + '\n'); //start from here
            return;
        }
        $('#innerBox2').val($('#innerBox2').val() + '\n' + response.yourquestion + '\n' + response.answer + '\n');
       }
       )
    }
    
})

document.addEventListener('click', (e)=>{
    
    if(e.explicitOriginalTarget.id == 'clear'){
        $('#innerBox1').val('');    
        $('#innerBox2').val('');    
    }
    
})
// document.addEventListener('click', (e)=>{
    
//     if(e.explicitOriginalTarget.id == 'close'){
//        document.getElementById('innerBox1').style.display = "none";
//        document.getElementById('innerBox2').style.display = "none";
//        document.getElementById('outerBox').style.bottom = "-150px";
//     }
    
// })

// document.addEventListener('click', (e)=>{
    
//     if(e.explicitOriginalTarget.id == 'open'){
//        document.getElementById('innerBox1').style.display = "block";
//        document.getElementById('innerBox2').style.display = "block";
//        document.getElementById('outerBox').style.bottom = "100px";
//     }
    
// })


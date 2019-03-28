function add(){
  const text=$("#textbox").val()
  $(".show ol").append(`<li>${text}</li>`) 
  $('#textbox').val('')
}

$("#textbox").keypress(e => {
  if(e.keyCode == 13 || e.which == 13){
    add()  
  }    
})
                       
$("#add").click(add)

const list = $('.olList');
$(document).ready(
    function(){
        $('.addIcon').click(
            function(){
                var toAdd = $('input[name=addItem]').val();
                list.append('<div class = "liItem"> <li class="listItem"> <span><i class="far fa-edit editIcon"></i> <i class="far fa-trash-alt trashIcon"></i></span>' + toAdd + '</li>  </div>');

            });
       
        $("input[name=addItem]").keyup(function(event){
            if(event.keyCode == 13){
                $("addIcon").click();
            }         
        });
        
        $(document).on('dblclick','li', function(){
            $(this).toggleClass('strike');    
        });

        $(document).on('click', '.trashIcon', function () {
            $(this).closest('div');
        });
      
        $('input').focus(function() {
            $(this).val('');
        });
      
    $('ol').sortable();  
      
 });

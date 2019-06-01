const list = $('.olList');
$(document).ready(
    function(){
        $('.addIcon').click(
            function(){
                var toAdd = $('input[name=addItem]').val();
                if (!toAdd.trim().length) {
                    return;
                }
                list.append('<div class = "liItem"> <li class="listItem" contenteditable="true"> ' + toAdd + '</li>  <span> <i class="far fa-trash-alt trashIcon" contenteditable="false"></i></span> </div>');

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
            $(this).closest('div').fadeOut('slow');
        });
      
        $('input').focus(function() {
            $(this).val('');
        });
            
 });

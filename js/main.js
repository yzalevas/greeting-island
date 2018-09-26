$(document).ready(function(){
    
    var getFont = function(selectedFont){
         var font = "";
         switch (selectedFont.trim()) {
            case 'Notable':
                font = "'Notable', sans-serif"
                break;
            case 'Noto Sans':
                font = "'Noto Sans', sans-serif"
                break;
            case 'Roboto':
                font = "'Roboto', sans-serif"
                break;
            case 'Oswald':
                font = "'Oswald', sans-serif"
                break;
            case 'Roboto Mono':
                font = "'Roboto Mono', monospace"
                break;
            
            default:
                font = "'Notable', sans-serif"
        }
        return font;
    };
    
    $('#btnSubmit').click(function(){
        var cv = document.getElementById('cv');
        var ct = cv.getContext('2d');
        
        var text=  $('#insertText').val();
        var selectedFont = $('#font').text();
        var font = getFont(selectedFont);
       
        var color = $('#color').val();
        var x = $('#x').val();
        var y = $('#y').val();
        var size = $('#size').val();
        
        ct.font = `${size}px ${font}`;
        ct.fillStyle = color;
        ct.fillText(text,x,y);
        ct.fill();
    });
    $(".dropdown-menu a").click(function(){
      var selText = $(this).text();
      $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
    });
    $('#btnDownload').click(function(){
//         var prev = window.location.href;
// 		window.location.href= document.getElementById("cv").toDataURL("image/png")
//                     .replace("image/png", "image/octet-stream");
        
// 		window.location.href = prev;	  
        var download = document.getElementById("download");
		var image = document.getElementById("cv").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
			  download.setAttribute("href", image);
    });
});

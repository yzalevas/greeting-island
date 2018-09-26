
  
$(document).ready(function(){

    // fit the image to the size of the screen
    function fix_dpi(canvas) {
    
      var dpi = window.devicePixelRatio;
      let style = {
        height() {
          return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
        },
        width() {
          return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
        }
      };
      canvas.setAttribute('width', style.width() * dpi);
      canvas.setAttribute('height', style.height() * dpi);
    }
    
    // get selected google font 
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
        
        fix_dpi(cv);
        var text=  $('#insertText').val();
        var selectedFont = $('#font').text();
        var font = getFont(selectedFont);
       
        var color = $('#color').val();
        var x = $('#x').val();
        var y = $('#y').val();
        var size = $('#size').val();
        
        // Set font and size
        ct.font = `${size}px ${font}`;
        ct.fillStyle = color;
        ct.textBaseline = "top";

        // write the text
        ct.fillText(text,x,y);
        ct.fill();
    });
    $(".dropdown-menu a").click(function(){
      // set the picked value in font dropdown
      var selText = $(this).text();
      $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
    });
    $('#btnDownload').click(function(){
        // download the image.
        var download = document.getElementById("download");
		var image = document.getElementById("cv").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
			  download.setAttribute("href", image);
    });
});

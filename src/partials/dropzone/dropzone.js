  if(document.getElementById('dropContainer')){
    document.getElementById('dropContainer').ondragover = document.getElementById('dropContainer').ondragenter = function(evt) {
        evt.preventDefault();
      };
    
      document.getElementById('dropContainer').ondrop = function(evt) {
          document.getElementById('fileInput').files = evt.dataTransfer.files;
        evt.preventDefault();
      };
 }
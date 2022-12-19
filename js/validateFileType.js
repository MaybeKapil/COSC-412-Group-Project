// Adapted from https://www.geeksforgeeks.org/file-type-validation-while-uploading-it-using-javascript/

function fileValidation() {
    let fileInput =
        document.getElementById("inputFile");
     
    let filePath = fileInput.value;
 
    // Allowing file type
    const allowedExtensions =
            /(\.txt)$/i;
     
    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type. Only .txt accepted.');
        fileInput.value = '';
        return false;
    }
    else
    {
     
        // Load text file
        if (fileInput.files && fileInput.files[0]) {
            let reader = new FileReader();
            reader.onload = function(){
                document.getElementById("drop_zone").style.display="none";
                document.getElementById("srcTextAreaContainer").style.display="block";
                document.getElementById('userTextArea').value=reader.result;
            }                
            reader.readAsText(fileInput.files[0]);
        }
    }
}
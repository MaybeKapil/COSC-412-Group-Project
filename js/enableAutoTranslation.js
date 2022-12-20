function activateAutoTranslation(activation) {
    
    // Will translate automatically on input of the testbox and/or changing the selected source or destination languages (the 2 select options for text languages)
    
    if (activation == true) {
        document.getElementById("srcLangSelect").addEventListener("change", translateUserText);   
        document.getElementById("dstLangSelect").addEventListener("change", translateUserText);   
        document.getElementById("userTextArea").addEventListener("change", translateUserText);
    }
    else if (activation == false) {
        document.getElementById("srcLangSelect").onchange = function() {
            if (document.getElementById("srcLangSelect").value == "auto") {
                document.getElementById("swapSrcAndDstLangButton").disabled = true;
            }
            else {
                document.getElementById("swapSrcAndDstLangButton").disabled = false;
            }
        };   
        document.getElementById("dstLangSelect").removeEventListener("change", translateUserText);   
        document.getElementById("userTextArea").removeEventListener("change", translateUserText);
    }
    else {
        console.log("Invalid parameter passed for activateAutoTranslation()");
    }
}
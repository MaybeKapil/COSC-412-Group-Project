function swapLang() {
    const sourceLangValue = document.getElementById("srcLangSelect").value;

    if (sourceLangValue != 'auto') {
        const sourceLang = document.getElementById("srcLangSelect");
        const destinationLang = document.getElementById("dstLangSelect");

        sourceLang.value = destinationLang.value;
        destinationLang.value = sourceLangValue;

        let srcText = document.getElementById("userTextArea").value;
        document.getElementById("userTextArea").value = document.getElementById("outputTextArea").value;
        document.getElementById("outputTextArea").value = srcText;
    }
}



function copyText(textAreaId) {
    const textToCopy = document.getElementById(textAreaId).value;
    navigator.clipboard.writeText(textToCopy);
    console.log("copied");
}
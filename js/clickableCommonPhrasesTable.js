// Make table cells clickable
const table = document.getElementById("commonPhrasesTable");

if (table != null) {
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].onclick = function () {
                fillUserTextArea(this.innerHTML);
            }
        }
    }
}

function fillUserTextArea(clickedCommonPhrase) {
    document.getElementById("userTextArea").value = clickedCommonPhrase;
    translateUserText();
}
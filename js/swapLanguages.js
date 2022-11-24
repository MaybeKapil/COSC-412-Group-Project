function swapLang() {
    const selectTag = document.querySelectorAll("select");

    selectTag.forEach((tag, id) => {
        const originalLangSelect = document.getElementById("originalLanguage");
        const originalLangSelectValue = originalLangSelect.value;

        const translatedLangSelectValue = document.getElementById("translatedLanguage").value;

        for(let country_code in countries) {
            let selected;
            if(id == 0 && country_code == translatedLangSelectValue) {
                selected = "selected";
            } else if (id == 1 && country_code == originalLangSelectValue) {
                selected = "selected";
            }
        }
    })

    console.log("swapped lang");
    console.log(originalLangSelect);
    console.log(translatedLangSelectValue);

}



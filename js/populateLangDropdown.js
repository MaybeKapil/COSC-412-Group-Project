const selectTag = document.querySelectorAll("select");

selectTag.forEach((tag, id) => {
    for(let country_code in countries) {
        let selected;
        if(id == 0 && country_code =="auto") {
            selected = "selected";
        } else if (id == 1 && country_code == "en") {
            selected = "selected";
        }
        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
})
// populates language and voice drop downs

const create = (tag = "div", options = {}, children = []) => {
    const node = Object.assign(document.createElement(tag), options);
    if (children.length) node.append(...children);
    return node;
}

const selectsLang = [
    { type: "src", def: "en-US" },
    { type: "dst", def: "en-US" },
];

const selectsVoiceLang = [
    { type: "src", def: "en-US" },
    { type: "dst", def: "en-US" },
];

const selectsCurrency = [
    { type: "currencyFrom", def: "USD" },
    { type: "currencyTo", def: "GBP" },
];

for (const [i, { type, def }] of selectsLang.entries()) {
    document.querySelector(`select[name=${type}Lang]`).append(
        ...Object.entries(languages).slice(i).map(
            ([code, name]) => {
                const settings = { value: code, textContent: name };
                if (code === def) settings.selected = true;
                return create("option", settings)
            }
        )
    );
}

for (const [i, { type, def }] of selectsVoiceLang.entries()) {
    document.querySelector(`select[name=${type}VoiceLang]`).append(
        ...Object.entries(voiceLang).slice(0).map(
            ([code, name]) => {
                const settings = { value: code, textContent: name };
                if (code === def) settings.selected = true;
                return create("option", settings)
            }
        )
    );
}

for (const [i, { type, def }] of selectsVoiceName.entries()) {
    document.querySelector(`select[name=${type}VoiceName]`).append(
        ...Object.entries(voiceName).slice(0).map(
            ([code, name]) => {
                const settings = { value: code, textContent: name };
                if (code === def) settings.selected = true;
                return create("option", settings)
            }
        )
    );
}

for (const [i, { type, def }] of selectsCurrency.entries()) {
    document.querySelector(`select[name=${type}]`).append(
        ...Object.entries(voiceName).slice(0).map(
            ([code, name]) => {
                const settings = { value: code, textContent: name };
                if (code === def) settings.selected = true;
                return create("option", settings)
            }
        )
    );
}

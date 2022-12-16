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

const selectsVoice = [
    { type: "src", def: "en-US" },
    { type: "dst", def: "en-US" },
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

for (const [i, { type, def }] of selectsVoice.entries()) {
    document.querySelector(`select[name=${type}Voice]`).append(
        ...Object.entries(voices).slice(0).map(
            ([code, name]) => {
                const settings = { value: code, textContent: name };
                if (code === def) settings.selected = true;
                return create("option", settings)
            }
        )
    );
}

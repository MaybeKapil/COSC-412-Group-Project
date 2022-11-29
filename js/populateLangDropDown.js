const create = (tag = "div", options = {}, children = []) => {
    const node = Object.assign(document.createElement(tag), options);
    if (children.length) node.append(...children);
    return node;
}

const selects = [
    { type: "src", def: "auto" },
    { type: "dst", def: "en-US" },
];

for (const [i, { type, def }] of selects.entries()) {
    document.querySelector(`select[name=${type}Lang]`).append(
        ...Object.entries(countries).slice(i).map(
            ([code, name]) => {
                const settings = { value: code, textContent: name };
                if (code === def) settings.selected = true;
                return create("option", settings)
            }
        )
    );
}

const creates = (tag = "div", options = {}, children = []) => {
    const node = Object.assign(document.createElement(tag), options);
    if (children.length) node.append(...children);
    return node;
}

const select = [
    { type: "src", def: "en-US" },
    { type: "dst", def: "en-US" },
];

for (const [{ type, def }] of selects.entries()) {
    document.querySelector(`select[name=${type}Voice]`).append(
        ...Object.entries(voices).map(
            ([code, name]) => {
                const settings = { value: code, textContent: name };
                if (code === def) settings.selected = true;
                return create("option", settings)
            }
        )
    );
}

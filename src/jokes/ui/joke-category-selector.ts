export function JokeCategorySelector(onChange: (value: string) => void) {
    const select = document.createElement('select');
    const options = [
        ['', 'Select a category'],
        ['animal','Animal'],
        ['career','Career'],
        ['celebrity','Celebrity'],
        ['dev','Dev'],
        ['explicit','Explicit'],
        ['fashion','Fashion'],
        ['food','Food'],
        ['history','History'],
        ['money','Money'],
        ['movie','Movie'],
        ['music','Music'],
        ['political','Political'],
        ['religion','Religion'],
        ['science','Science'],
        ['sport','Sport'],
        ['travel','Travel'],
    ] as const;

    for (const [value, label] of options) {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = label;
        select.appendChild(opt);
    }

    select.addEventListener('change', (e) => {
        const value = (e.target as HTMLSelectElement).value;
        onChange(value);
    });

    return {
        element: select,
        setValue: (v: string) => { select.value = v; }
    };
}

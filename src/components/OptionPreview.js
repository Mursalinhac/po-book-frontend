import React from 'react';

const OptionPreview = ({option}) => {
    return Object.keys(option?.selected || {}).length ?
        <>
            <tr>
                <td colSpan={4} className="bg-[var(--surface-raised)] px-3 py-2 font-semibold text-[var(--fg)]">
                    {option.title}
                </td>
            </tr>
            {
                option.selectType === "multi" ? Object.entries(option.selected).map(([key, selection], index) => (
                    <tr key={`${option.title}-${key}-${index}`}>
                        <td></td>
                        <td>{selection.code}</td>
                        <td>{selection.title}</td>
                        <td className="price-cell">${Number(selection.price || 0).toFixed(2)}</td>
                    </tr>
                )) : (
                    <tr key={`${option.title}-single`}>
                        <td></td>
                        <td>{option.selected.code}</td>
                        <td>{option.selected.title}</td>
                        <td className="price-cell">${Number(option.selected.price || 0).toFixed(2)}</td>
                    </tr>
                )
            }
        </> : null;
}

export default OptionPreview;
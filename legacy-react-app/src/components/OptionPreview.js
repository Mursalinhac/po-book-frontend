const OptionPreview = ({option}) => {
    return Object.keys(option.selected).length ?
        <>
            <tr><h6>{option.title}</h6></tr>
            {
                option.selectType === "multi" ? Object.entries(option.selected).map(([, selection]) => (
                    <tr>
                        <td></td>
                        <td>{selection.code}</td>
                        <td>{selection.title}</td>
                        <td className="price-cell">{selection.price}</td>
                    </tr>
                )) : (
                    <tr>
                        <td></td>
                        <td>{option.selected.code}</td>
                        <td>{option.selected.title}</td>
                        <td className="price-cell">{option.selected.price}</td>
                    </tr>
                )
            }
        </> : null;
}

export default OptionPreview;
const PricePreview = ({price}) => {
    return (
        <>
            <tr><h3>Total</h3></tr>
            <tr>
                <td><h6>Sub Total</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">{price.subTotal}</td>
            </tr>
            <tr>
                <td><h6>Tax Percentage</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">{price.taxPercentage}</td>
            </tr>
            <tr>
                <td><h6>Tax</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">{price.tax}</td>
            </tr>
            <tr>
                <td><h6>Documentation Fees</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">{price.documentationFees}</td>
            </tr>
            <tr>
                <td><h6>Miscellaneous</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">{price.misc}</td>
            </tr>
            <tr>
                <td><h6>Gaz Guzzler Tax</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">{price.gasGuzzler}</td>
            </tr>
            <tr>
                <td><h6>Total</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">{price.total}</td>
            </tr>
        </>
    )
}

export default PricePreview;
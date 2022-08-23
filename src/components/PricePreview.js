import {InputGroup, Form} from "react-bootstrap";

const PricePreview = ({price, setOrder}) => {
    const handleChange = (event) => {
        const {name, value} = event.target
        let newPrice = price;
        if (name === "taxPercentage") {
            newPrice.taxPercentage = parseFloat(value);
            newPrice.tax = Math.round(newPrice.subTotal * newPrice.taxPercentage) / 100;
            newPrice.total = newPrice.subTotal + newPrice.tax
        } else if (name === "gasGuzzler") {
            newPrice.gasGuzzler = parseFloat(value);
            newPrice.total = newPrice.total + newPrice.gasGuzzler
        }

        setOrder(previousState => {
            return {
                ...previousState,
                price: newPrice
            }
        })
    }
    return (
        <>
            <tr className="horizontal-rule"></tr>
            <tr>
                <td><h6>Sub Total</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">${price.subTotal}</td>
            </tr>
            <tr>
                <td><h6>Trade-in Value</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">${price.misc}</td>
            </tr>
            <tr>
                <td><h6>Tax Percentage</h6></td>
                <td className="price-cell ">
                    <InputGroup hasValidation>
                        <Form.Control
                            className="w-25"
                            size="sm"
                            type="number"
                            step="0.001"
                            min="0"
                            max="100"
                            value={price.taxPercentage}
                            name="taxPercentage"
                            onChange={handleChange}/>%
                    </InputGroup>
                    {/*<input*/}
                    {/*    type="number"*/}
                    {/*    step="0.001"*/}
                    {/*    min="0"*/}
                    {/*    value={price.taxPercentage}*/}
                    {/*    name="taxPercentage"*/}
                    {/*    onChange={handleChange}*/}
                    {/*/>%*/}
                </td>
                <td><h6>Tax</h6></td>
                <td className="price-cell">${price.tax}</td>
            </tr>

            <tr>
                <td><h6>Documentation Fees</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">${price.documentationFees}</td>
            </tr>

            <tr>
                <td><h6>Gaz Guzzler Tax</h6></td>
                <td></td>
                <td></td>
                <td className="price-cell">
                    <InputGroup hasValidation >
                        <Form.Control
                            $
                            className="w-25 price-cell"
                            size="sm"
                            type="number"
                            min="0"
                            value={price.gasGuzzler}
                            name="gasGuzzler"
                            onChange={handleChange}/>
                    </InputGroup>
                </td>
            </tr>
            {/*<tr className="bordered"></tr>*/}

            <tr className="horizontal-rule"></tr>
            <tr>
                <td><h3>Total</h3></td>
                <td></td>
                <td></td>
                <td className="price-cell"><h4>${price.total}</h4></td>
            </tr>
        </>
    )
}

export default PricePreview;
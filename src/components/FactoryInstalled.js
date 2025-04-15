import OrderOption from "./OrderOption";
import {Alert} from "react-bootstrap";

function FactoryInstalled({options, onChange}) {
    // Safety check for undefined or null options
    if (!options) {
        console.error('FactoryInstalled received null or undefined options');
        return <Alert variant="warning">No factory options available</Alert>;
    }

    return (
        <div className="tile-holder">
            {Object.entries(options || {}).map(([optionName, orderOption]) => (
                <OrderOption
                    key={optionName}
                    orderOption={orderOption}
                    onChange={onChange}
                    parentKey="factoryInstalled"
                />
            ))}
        </div>
    );
}

export default FactoryInstalled;
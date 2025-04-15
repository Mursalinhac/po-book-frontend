import OrderOption from "./OrderOption";
import {Alert} from "react-bootstrap";

function DealerInstalled({options, onChange}) {
    // Safety check for undefined or null options
    if (!options) {
        console.error('DealerInstalled received null or undefined options');
        return <Alert variant="warning">No dealer options available</Alert>;
    }

    return (
        <div className="tile-holder">
            {Object.entries(options || {}).map(([optionName, orderOption]) => (
                <OrderOption
                    key={optionName}
                    orderOption={orderOption}
                    onChange={onChange}
                    parentKey="dealerInstalled"
                />
            ))}
        </div>
    );
}

export default DealerInstalled;
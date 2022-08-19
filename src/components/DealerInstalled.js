import { Row } from "react-bootstrap";
import OrderOption from "./OrderOption";

function DealerInstalled({ options, onChange }) {
    return (
        <Row>
            {options.map(orderOption => <OrderOption orderOption={orderOption} onChange={onChange} />)}
        </Row>
    );
}
export default DealerInstalled;
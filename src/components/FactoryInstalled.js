import { Row } from "react-bootstrap";
import OrderOption from "./OrderOption";


function FactoryInstalled({options, onChange}){
    return(
        <Row className="h-100">
        {options.map(orderOption => <OrderOption orderOption={orderOption} onChange={onChange}/>)}
        </Row>
    );
}
export default FactoryInstalled;
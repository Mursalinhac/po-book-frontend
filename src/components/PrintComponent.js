import React, {useRef} from "react";
import {Button} from "react-bootstrap";
import ReactToPrint from "react-to-print";
import PrintPreview from "./PrintPreview";
import '../css/print.css';

class ComponentToPrint extends React.Component {
    render() {
        return (
            <PrintPreview order={this.props.order}/>
        );
    }
}

export default function PrintComponent({order}) {
    let componentRef = useRef();
    return (
        <>
            <div>
                {/* button to trigger printing of target component */}
                <ReactToPrint
                    trigger={() => <Button className="po-book-button" size="sm">Print</Button>}
                    content={() => componentRef}
                    pageStyle="@page { size: auto; margin: 10mm; }"
                />

                <Button className="po-book-button" size="sm">Save</Button>{' '}

                <div style={{display: "none"}}>
                    <ComponentToPrint ref={(el) => (componentRef = el)} order={order}/>
                </div>
            </div>
        </>
    );
}
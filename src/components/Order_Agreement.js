import {Container, Row, Col, Card} from "react-bootstrap";

function Order_Agreement() {
    return (<Container style={{
            position: 'absolute', left: 600, width: '33.33%', // padding: '',
            fontSize: '0.6rem'
        }}>
            < Row style={{color: 'blue', border: '1px solid blue', padding: '5px'}}>
                <text><strong style={{color: 'red'}}> GOVERNING LAW </strong> – This Agreement shall be
                    constructed under and in accordance with the
                    laws of the State of New Jersey without regard to conflict of law principles.
                </text>
            </Row>
            < Row style={{color: 'blue', border: '1px solid blue', padding: '5px'}}>
                <text><strong style={{color: 'red'}}>IF A NEW VEHICLE SALE OR LEASE</strong> – The only warranties
                    applying to this vehicle are those
                    offered by the manufacturer. Dealer sells/leases this vehicle “as is” and hereby
                    disclaims all warranties express or implied, including any implied warranties or
                    merchantability and fitness for a particular purpose. Any liability of Dealer with
                    respect to defects or malfunctions of this vehicle including, without limitation, those
                    which pertain to performance or safety, (whether by way of “strict liability”, based
                    upon Dealer’s negligence, or otherwise), is expressly excluded and Customer hereby
                    assumes any such risks. The manufacturer’s warranty is not affected by this disclaimer
                    of warranties by Dealer.
                </text>
            </Row>
            < Row style={{color: 'blue', border: '1px solid blue', padding: '5px'}}>
                <text>
                    <strong style={{color: 'red'}}>ATTACHMENT A (ADDITIONAL TERMS & CONDITIONS IS MADE PART OF
                        THIS BINDING PURCHASE
                        AGREEMENT</strong> - Purchaser has the right/option and Dealer encourages Purchaser to
                    have an
                    attorney review all documents, before signing, which form a part of the transaction.
                    Purchaser does not rely upon the Dealer or any of the Dealer's Representatives for any
                    legal advice and/or assistance. Customer agrees to pay an amount equal to the total
                    price, including Destination Charge, shown on this Buyer's Order. Customer also agrees
                    to pay Ciocca Chevrolet for all applicable taxes, fees, and licensing costs and charges.
                    Non Refundable Deposit - If Dealer notifies Purchaser that the vehicle is ready for
                    delivery on or before December 31, 2023 and the purchaser refuses or fails for any
                    reason to complete the transaction within the specified time period of three (3)
                    business days (see Attachment A), Dealer shall retain the entire deposit or Ten Thousand
                    Dollars ($10,000.00) whichever is less as liquidated damages. Dealer shall refund the
                    amount of the deposit in excess of Ten Thousand Dollars ($10,000.00). The amount of the
                    deposit shall consist of the amount listed as Deposit and/or Net Trade-In Allowance, if
                    any. Neither Party shall have any further obligation to the other and dealer may sell
                    the vehicle at any price to any other Purchaser and Dealer shall also retain the entire
                    amount of that sale. <br/>Signed <strong style={{color: 'red'}}>X</strong>
                    <mark style={{backgroundColor: 'yellow'}}>__________________________</mark>
                </text>
            </Row>
            <Row style={{
                color: 'blue',
                border: '1px solid blue',
                padding: '5px',
                position: 'relative',
                bottom: '0',
                width: '100%'
            }}>
                <text>
                    Customer agrees that this Order on the face as well as any attachments to it includes all the terms
                    and
                    conditions of a sale. Customer further agrees this Order cancels and supersedes any prior agreements
                    and
                    as of the date signed by Dealer or authorized agent, comprises the complete and exclusive statement
                    of
                    the terms of the agreement between Customer and Dealer. THIS ORDER SHALL NOT BECOME BINDING UNTIL
                    ACCEPTED BY DEALER OR HIS AUTHORIZED REPRESENTATIVE. Customer by execution of this order
                    acknowledges
                    that they have read the terms and conditions and have received a true copy of the order. I am 18
                    years
                    of age or older and of full legal capacity to enter into this contract.

                    Accepted By: <strong style={{color: 'red'}}>X</strong>
                    <mark style={{backgroundColor: 'yellow'}}> ________________________________________</mark>
                    <strong style={{color: 'red'}}>X</strong>
                    <mark style={{backgroundColor: 'yellow'}}>________________________________________</mark>
                    Dealer or Authorized Agent Date Customer Date
                    (Dan Maida or Dave Salvatore are the only Authorized Representatives)
                    <strong style={{color: 'red'}}>X</strong>
                    <mark style={{backgroundColor: 'yellow'}}>________________________________________</mark>
                    Customer Date

                </text>
            </Row>
        </Container>
    );
}

export default Order_Agreement;

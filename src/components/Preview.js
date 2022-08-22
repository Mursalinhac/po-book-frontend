function Preview({order}) {
    return (
        <Container>
            <div className="po-book-form">
                <CustomerInfoPreview customerInfo={order.customerInfo}/>
                <hr/>
                <Table className="po-book-table" size="sm">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Code</th>
                        <th>Name</th>
                        <th className="price-cell">Price</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <pre>{JSON.stringify(order, null, 2)}</pre>

        </div>
    );
    
}

export default Preview;
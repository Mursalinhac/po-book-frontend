function Preview({order}) {
    return (
        <div className="po-book-form">
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Price</th>
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
function Preview({order}) {
    return (
        <pre>{JSON.stringify(order, null, 2)}</pre>
    );
}

export default Preview;
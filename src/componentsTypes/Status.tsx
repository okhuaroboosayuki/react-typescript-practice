type statusProps = {
    // this is how to declare string literal type in typescript
    status: "loading" | "success" | "error";
}

export const Status = (props: statusProps) => {
    let message;

    if (props.status === "loading") {
        message = "Loading...";
    } else if (props.status === "success") {
        message = "Data fetched successfully";
    } else if (props.status === "error") {
        message = "Error fetching data";
    }

    return (
        <div style={{ border: "1px solid black", padding: "20px" }}>
            <h2>Status of data fetching is: {message}</h2>
        </div>
    )
}
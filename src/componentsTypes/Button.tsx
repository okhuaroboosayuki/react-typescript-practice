type ButtonProps = {
    // this is how to declare children props in typescript where the children is a function and it returns void (nothing)
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

export const Button = (props: ButtonProps) => {
    return (
        <div style={{ border: "1px solid black", padding: "20px" }}>
            <button onClick={(event) => props.handleClick(event, 1) }>Click me</button>
        </div>
    )
}
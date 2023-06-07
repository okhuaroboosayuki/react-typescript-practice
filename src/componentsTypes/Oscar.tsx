type oscarProps = {
    // this is how to declare children props in typescript where the children is a react node or react component
    children: React.ReactNode;
}

export const Oscar = (props: oscarProps) => {
    return (
        <div style={{ border: "1px solid black", padding: "20px" }}>
            {props.children}
        </div>
    )
}
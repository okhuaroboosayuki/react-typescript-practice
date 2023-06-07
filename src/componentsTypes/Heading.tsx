type headingProps = {
    // this is how to declare children props in typescript where the children is a string
    children: string;
}
export const Heading = (props: headingProps) => {
    return (
        <div style={{ border: "1px solid black", padding: "20px" }}>
            <h2>{props.children}</h2>
        </div>
    )
}
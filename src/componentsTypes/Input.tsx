// how to handle input props in typescript
type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
    return (
        <div style={{ border: "1px solid black", padding: "20px" }}>
            <input type="text" value={props.value} onChange={props.handleChange} />
        </div>
    )
}
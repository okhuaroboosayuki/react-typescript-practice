type ButtonsProps = {
    variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

// if you want to specify the type of children and restrict it to a certain type so it does contain react nodes, you can do this:
// type ButtonsProps = {
//     variant: "primary" | "secondary";
//     children: string;
// } & Omit<React.ComponentProps<"button">, "children">;

export const Buttons = ({variant, children, ...rest}: ButtonsProps) => {
    return (
        <div style={{ border: "1px solid black", padding: "20px" }}>
            <button className={`class-with-${variant}`} {...rest}>{children}</button>
        </div>
    )
}
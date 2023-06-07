export type ProfileProps = {
    name: string;
}
export const Profile = ({name}: ProfileProps) => {
    return (
        <div style={{ border: "1px solid black", padding: "20px" }}>
            <p>Name is {name}</p>
        </div>
    )
}
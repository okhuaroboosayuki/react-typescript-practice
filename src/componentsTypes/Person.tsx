// this is how to use props in typescript
// type personProps = {
//     name: {
//         firstName: string;
//         lastName: string;
//     }
// }

// types can also be called from a separate file
import { personProps } from "../types/Person.types";

function Person(props: personProps) {
    return (
        <div style={{ border: "1px solid black", padding: "20px" }}>
            <h1>{props.name.firstName} {props.name.lastName}</h1>
        </div>
    )
}

export default Person
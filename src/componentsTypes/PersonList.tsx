import { Name } from "../types/Person.types";

type personListProps = {
  // this is how to call props that are arrays
  names: Name[];
};

function PersonList(props: personListProps) {
  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      {props.names.map((name) => (
        <h2 key={name.firstName}>
          {name.firstName} {name.lastName}
        </h2>
      ))}
    </div>
  );
}

export default PersonList;

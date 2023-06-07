type GreetProps = {
  name: string;
  // this is how to declare optional props in typescript
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  // messageCount is optional, so we need to set a default value. This is called optional props
  const { messageCount = 0 } = props;

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

// props can also be destructured
// const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
//   return (
//     <div>
//       <h2>
//         {isLoggedIn
//           ? `Welcome ${name}! You have ${messageCount} unread messages`
//           : "Welcome Guest"}
//       </h2>
//     </div>
//   );
// };

export default Greet;

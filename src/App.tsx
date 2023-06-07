import "./App.css";
import { Container } from "./componentsTypes/Container";
import { Button } from "./componentsTypes/Button";
import { Input } from "./componentsTypes/Input";
import Greet from "./componentsTypes/Greet";
import { Heading } from "./componentsTypes/Heading";
import { Oscar } from "./componentsTypes/Oscar";
import Person from "./componentsTypes/Person";
import PersonList from "./componentsTypes/PersonList";
import { Status } from "./componentsTypes/Status";
import { LoggedIn } from "./stateTypes/LoggedIn";
import { User } from "./stateTypes/User";
import { Counter } from "./reducerTypes/Counter";
import { ThemeContextProvider } from "./contextTypes/ThemeContext";
import { Box } from "./contextTypes/Box";
import { UserContextProvider } from "./contextTypes/UserContext";
import { Userr } from "./contextTypes/Userr";
import { DomRef } from "./refTypes/DomRef";
import { MutableRef } from "./refTypes/MutableRef";
import { Counters } from "./classComponentTypes/Counters";
import { Private } from "./authTypes/Private";
import { Profile } from "./authTypes/Profile";
import { List } from "./genericTypes/List";
import { RandomNumber } from "./restrictionTypes/RandomNumber";
import { Toast } from "./templateLiteralsTypes/Toast";
import { Buttons } from "./htmlTypes/Buttons";
import { Inputs } from "./htmlTypes/Inputs";
import { Text } from "./polymorphicTypes/Text";

function App() {
  const personName = {
    firstName: "Osayuki",
    lastName: "Okhuarobo",
  };

  const nameList = [
    {
      firstName: "Ayodeji",
      lastName: "Balogun",
    },
    {
      firstName: "David",
      lastName: "Adeleke",
    },
    {
      firstName: "Damini",
      lastName: "Ogulu",
    },
  ];

  return (
    <div className="App">
      {/* declaring optional props in typescript */}
      <Greet name="Raymond" messageCount={20} isLoggedIn={true} />

      {/* using props in typescript in file or from separate file */}
      <Person name={personName} />

      {/* type props that are arrays */}
      <PersonList names={nameList} />

      {/* declare string literal type in typescript */}
      <Status status="success" />

      {/* declare children props in typescript where the child is a string */}
      <Heading>Placeholder text</Heading>

      {/* declare children props in typescript where the children is a react component */}
      <Oscar>
        <Heading>
          And the Oscar award for best motion picture goes to Steven Spielberg
        </Heading>
      </Oscar>

      {/* this is how to call a function in a component */}
      {/* declare children props in typescript where the children is a function and it returns void (nothing) */}
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      {/* handle input in typescript */}
      <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      />

      {/* declare css styles props in typescript */}
      <Container styles={{ border: "1px solid black", padding: "20px" }} />

      <div className="how_to-state">
        {/* using useState */}
        <LoggedIn />
        <User />
      </div>

      <div>
        {/* using useReducer */}
        <Counter />
      </div>

      {/* using Context API */}
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      {/* advanced Context API that shows logged in user */}
      <UserContextProvider>
        <Userr />
      </UserContextProvider>

      {/* using useRef in typescript */}
      <div>
        <DomRef />
        <MutableRef />
      </div>

      {/* using Class Component */}
      <div>
        <Counters message="The count value is" />
      </div>

      {/* using component props */}
      <Private isLoggedIn={true} Component={Profile} />

      {/* using generic props */}
      <List
        items={["Osayuki", "Raymond", "Okhuarobo"]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      />

      {/* restricting props */}
      <RandomNumber value={10} isPositive />

      {/* working with template literals */}
      <Toast position="top-right" />

      {/* working with dynamic html elements */}
      <Buttons variant="primary" onClick={() => console.log("clicked")}>Primary Button</Buttons>
      <Inputs />

      {/* working with polymorphic types */}
      <Text as="h1" size="lg">Heading</Text>
      <Text as="p" size="md">Paragraph</Text>
      <Text as="label" htmlFor="randomId" size="sm" color="secondary">Label</Text>
    </div>
  );
}

export default App;

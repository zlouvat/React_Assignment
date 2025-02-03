import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Card from "./components/Card";
function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        Press for Alert
      </Button>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Card></Card>
    </div>
  );
}

export default App;

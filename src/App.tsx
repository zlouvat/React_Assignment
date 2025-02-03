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
        CSS
      </Button>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        JavaScript
      </Button>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        HTML
      </Button>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        GitHub
      </Button>
      <Card title="CSS">Info on CSS</Card>
      <Card title="JavaScript">Info on CSS</Card>
      <Card title="HTML">Info on CSS</Card>
      <Card title="Github">Info on CSS</Card>
    </div>
  );
}

export default App;

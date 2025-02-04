import Button from "./components/Button";
import Card from "./components/Card";
import { useState } from "react";
function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [cssVisible, setCSSVisibility] = useState(false);
  const [javaScriptVisible, setJavaScriptVisibility] = useState(false);
  const [htmlVisible, setHTMLVisibility] = useState(false);
  const [gitVisible, setGitVisibility] = useState(false);

  return (
    <div>
      <Button color="primary" onClick={() => setCSSVisibility(true)}>
        CSS
      </Button>
      <Button color="primary" onClick={() => setJavaScriptVisibility(true)}>
        JavaScript
      </Button>
      <Button color="primary" onClick={() => setHTMLVisibility(true)}>
        HTML
      </Button>
      <Button color="primary" onClick={() => setGitVisibility(true)}>
        GitHub
      </Button>
      {cssVisible && (
        <Card onClose={() => setCSSVisibility(false)} title="CSS">
          Info on CSS
        </Card>
      )}
      {javaScriptVisible && (
        <Card onClose={() => setJavaScriptVisibility(false)} title="JavaScript">
          Info on JavaScript
        </Card>
      )}
      {htmlVisible && (
        <Card onClose={() => setHTMLVisibility(false)} title="HTML">
          Info on HTML
        </Card>
      )}
      {gitVisible && (
        <Card onClose={() => setGitVisibility(false)} title="GitHub">
          Info on GitHub
        </Card>
      )}
    </div>
  );
}

export default App;

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
          <h3>Info on JavaScript</h3>
          CSS are Cascading Style Sheets <br />
          thatallow the user to style HTML <br />
          in any possible way they imagine
        </Card>
      )}
      {javaScriptVisible && (
        <Card onClose={() => setJavaScriptVisibility(false)} title="JavaScript">
          <h3>Info on JavaScript</h3>
          JavaScript are scripts for HTML <br />
          webpages that allow the developer to
          <br />
          create programs to automatically format <br />
          HTML
        </Card>
      )}
      {htmlVisible && (
        <Card onClose={() => setHTMLVisibility(false)} title="HTML">
          <h3>Info on HTML</h3>
          HTML is a coding language <br />
          used to structure a website and the <br />
          content that the developer chooses
        </Card>
      )}
      {gitVisible && (
        <Card onClose={() => setGitVisibility(false)} title="GitHub">
          <h3>Info on GitHub</h3>
          allows users to create and collaborate <br />
          on files or code from across the world. <br />
          Edits and changes can be made from multiple <br />
          users to the same files
        </Card>
      )}
    </div>
  );
}

export default App;

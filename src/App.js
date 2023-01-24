import logo from "./logo.svg";
import "./App.css";
import { Button, TextField, Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container style={{ marginTop: 10 }} maxWidth="sm">
        <Button onClick={() => alert("button Click")} color="primary">
          By Button
        </Button>

        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Container>
    </div>
  );
}

export default App;

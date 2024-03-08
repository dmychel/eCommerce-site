import "./App.css";
import Index from "./routes/Index";

function App() {
  return (
    <section className="app">
      <div className="header">
        <h1>Onitsuka Tiger</h1>
        <nav>
          <span>shop</span>
          <span>cart</span>
        </nav>
      </div>
      <Index />
    </section>
  );
}

export default App;

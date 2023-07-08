import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import "@fontsource/roboto";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;

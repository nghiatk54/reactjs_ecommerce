import "./App.css";
import Layout from "@component/Layout/Layout";
import Header from "@component/Header/Header";
import Footer from "@component/Footer/Footer";
function App() {
  return (
    <div>
      <Layout>
        <Header />
        Content
        <Footer />
      </Layout>
    </div>
  );
}

export default App;

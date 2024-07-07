import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Homepage from "./components/layout/homepage/Homepage";

function App() {
  return (
    <body>
      <Header />
      <main className="bg-[#F1F1F1]">
        <Routes>
          <Homepage />
        </Routes>
      </main>
      <Footer />
    </body>
  );
}

export default App;

import "./App.css";

import CatFacts from "./components/CatFacts";
import TheoryList from "./components/TheoryList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="container">
				<Header />
				<CatFacts />
				<TheoryList />
				<Footer />
			</div>
		</>
	);
}

export default App;

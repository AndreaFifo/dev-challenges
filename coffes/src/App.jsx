import "./App.css";
import bg from "./assets/bg-cafe.jpg";
import Collection from "./Components/Collection";

function App() {
	return (
		<>
			<div className="background">
				<Collection />
				<img
					src={bg}
					alt="cafe img"
				/>
			</div>
		</>
	);
}

export default App;

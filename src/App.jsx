import "./App.css";
import { CoinBlock } from "./components/CoinBlock/CoinBlock";
import { Home } from "./components/Home/Home";
import { MakeTicket } from "./components/MakeTicket/MakeTicket";
import { MiniAppView } from "./components/MiniAppView/MiniAppView";
import { PlayNow } from "./components/PlayNow/PlayNow";

function App() {
	return (
		<>
			<CoinBlock />
			<MakeTicket />
			<PlayNow />
			<MiniAppView />
			<Home />
		</>
	);
}

export default App;

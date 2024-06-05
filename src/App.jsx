import "./App.css";
import { CoinBlock } from "./components/CoinBlock/CoinBlock";
import { Home } from "./components/Home/Home";
import { MakeTicket } from "./components/MakeTicket/MakeTicket";
import { MiniAppView } from "./components/MiniAppView/MiniAppView";
import { PlayNow } from "./components/PlayNow/PlayNow";
import { useLayoutEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

    useLayoutEffect(() => {
        Aos.init({
            duration: 1000,
            debounceDelay: 50,
            mirror: true,
            once: false,
        })
        const config = { childList: true };

        const callback = function (mutationsList) {
            for (let mutation of mutationsList) {
                if (mutation.type === "childList") {
                    window.scrollTo(0, document.body.scrollHeight);
                }
            }
        };

        const observer = new MutationObserver(callback);
        observer.observe(document.body, config);
    }, []);

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

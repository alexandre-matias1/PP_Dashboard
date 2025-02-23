import { Header } from "./components/header";
import { ChartsProvider } from "./context/ChartsContext";
import { Content } from "./page/content";

export function App() {
  return (
    <div>
      <ChartsProvider>
        <Header />
        <Content />
      </ChartsProvider>
    </div>
  );
}

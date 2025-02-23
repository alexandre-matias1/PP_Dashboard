import { Header } from "./components/header";
import { ChartsProvider } from "./context/ChartsContext";
import { Content } from "./page/content";
import DateTimePickerForm from "./components/time-picker/date-time-picker-form";

export function App() {
  return (
    <div>
      <ChartsProvider>
        <Header />
        <Content />
        <DateTimePickerForm />
      </ChartsProvider>
    </div>
  );
}

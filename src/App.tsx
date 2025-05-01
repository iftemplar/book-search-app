import { SearchInput } from "./components/SearchInput";
import { Header } from "./components/Header";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header>
        <SearchInput />
      </Header>
      <Analytics />
    </>
  );
}

export default App;

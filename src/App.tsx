import { AppContainer, AppLayout } from "./App.styles";
import Logo from "./components/logo/Logo";
import Home from "./pages/home/Home";
import AppBar from "./components/AppBar/AppBar";
import { useState } from "react";

function App() {
  const [isOpenAppBar, setIsOpenAppBar] = useState<boolean>(false);

  const toggleAppBar = (newOpen: boolean) => () => {
    setIsOpenAppBar(newOpen);
  };
  return (
    <AppLayout display={"flex"} flexDirection={"column"} gap={2}>
      <AppContainer>
        <Logo />
        <Home />
        <AppBar isOpen={isOpenAppBar} onToggle={toggleAppBar} />
      </AppContainer>
    </AppLayout>
  );
}

export default App;

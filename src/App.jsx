import { ThemeContext } from "./context.js";
import User from "./components/User/index.jsx";
import { useState } from "react";
import Header from "./components/Header/index.jsx";

const App = () => {
  const [state, changeState] = useState(true);

  return (
    <ThemeContext.Provider value={{ state, changeState }}>
      <main className="flex justify-center w-full p-5">
        <div>
          {/* <div>App</div> */}
          <Header />
          <User />
        </div>
      </main>
    </ThemeContext.Provider>
  );
};

export default App;

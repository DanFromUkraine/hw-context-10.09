import { useContext } from "react";
import { ThemeContext } from "../../context";
import Dish from "../Dish";

const User = () => {
  const { state } = useContext(ThemeContext);

  return (
    <>
      <div className={`w-screen h-screen grid place-content-center  ${state ? "" : "bg-black text-white"}`}>
        <h2>Some Dishes in User Component</h2>
        <ul className="">
          <Dish name="soup" desc="just a soup" price={30}/>
          <Dish name="sandwich" desc="just a sandwich" price={45}/>
          <Dish name="pizza" desc="mammamia! pizza!" price={100}/>
        </ul>
      </div>
    </>
  );
};

export default User;

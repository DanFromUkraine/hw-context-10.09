import { useContext } from "react";
import { ThemeContext } from "../../context";

const Header = () => {
    const {changeState} = useContext(ThemeContext);

    const handleClick = () => {
        changeState(prev => !prev);
    }
  return (
    <div className="flex justify-center text-3xl">
    <button onClick={handleClick} className="hover:text-gray-400">Change theme</button>

    </div>
  )
}

export default Header
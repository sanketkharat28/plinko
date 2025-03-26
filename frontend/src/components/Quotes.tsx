import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";

export const Quotes = () => {
  const navigate = useNavigate();
  return (
    <div className="flex mx-16 flex-col justify-center pb-10 ">
      <h1 className="text-6xl font-bold">Earn More by playing Plinko</h1>
      <h3 className="mt-4 text-xl mb-4">
      Plinko is a thrilling game where players drop a ball down a pyramid of pins, aiming for a winning multiplier. Inspired by Japan’s Pachinko, it offers customizable risk and rewards, making it an exciting choice for all players!
      </h3>
      <Button className="hover:bg-green-600" onClick={() => navigate("/game")}>
        Play Plinko
      </Button>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
// import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export const Header = () => {
  return (
    <div className="fixed flex justify-between px-8 w-screen h-16 bg-[#F4F5F7] opacity-80 items-center drop-shadow-2xl border-b border-gray-300 shadow-md">
      <div className="left_block flex justify-center items-center gap-3">
        <FontAwesomeIcon icon={faShuffle} className="w-9 text-[#333]" />
        <span className=" block font-bold text-2xl text-[#333]">
          Seating-Order
        </span>
      </div>
      <Button className="text-[#F4F5F7] bg-[#333]">More</Button>
    </div>
  );
};

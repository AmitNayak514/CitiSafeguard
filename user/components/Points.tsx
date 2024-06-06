import getPoints from "@/actions/get-points";
import Image from "next/image";
import { redirect } from "next/navigation";

interface PointsProps {
  points: number;
}

const Points: React.FC<PointsProps> = async ({ points }) => {
  return (
    <div className="flex items-center py-1.5 hover:brightness-90 gap-2 px-2 rounded-xl justify-between6ml-6 bg-neutral-400/25">
      <div className="relative w-6 h-6">
        <Image fill alt="coins" src="/coin.svg" />
      </div>
      <p className="font-bold">{points}</p>
    </div>
  );
};

export default Points;

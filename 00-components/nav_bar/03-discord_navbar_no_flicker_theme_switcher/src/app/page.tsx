import SideBar from "@/components/layout/SideBar";
import ChannelBar from "@/components/layout/ChannelBar";

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
    </div>
  );
}

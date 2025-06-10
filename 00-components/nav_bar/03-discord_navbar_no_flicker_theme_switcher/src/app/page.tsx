import SideBar from "@/components/layout/SideBar";
import ChannelBar from "@/components/layout/ChannelBar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="ml-16 flex flex-1">
        <ChannelBar />
      </div>
    </div>
  );
}

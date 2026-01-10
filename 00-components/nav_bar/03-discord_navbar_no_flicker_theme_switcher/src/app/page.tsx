import Sidebar from "@/components/layout/Sidebar";
import ChannelBar from "@/components/layout/ChannelBar";
import TopNavigation from "@/components/layout/TopNavigation";
import MainContent from "@/components/layout/MainContent";
import Divider from "@/components/ui/Divider";

// App layout structure:
// - <div class="flex h-screen">
//   - <SideBar />                   // fixed width, vertical
//   - <ChannelBar />               // fixed width, vertical
//   - <MainSection />              // fills remaining space
//     - <TopNavigation />         // horizontal, fixed height
//     - <MainContent />           // flexible scrollable chat area

export default function Home() {
  return (
    <div className="home">
      <nav>
        <Sidebar />
      </nav>
      <Divider orientation="vertical" />
      <ChannelBar />
      <Divider orientation="vertical" />
      <main className="main-section">
        <TopNavigation />
        <MainContent />
      </main>
    </div>
  );
}

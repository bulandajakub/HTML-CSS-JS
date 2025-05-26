const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white">
      {/* top[-20px] - tailwind will automaticly create utility classes when the value is in brackets */}
      <i>A</i>
      <i>B</i>
      <i>C</i>
      <i>D</i>
      <i>E</i>
    </div>
  );
};

export default SideBar;

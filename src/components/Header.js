import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
      <h1>Thien An Tran</h1>
      <Navbar />
    </header>
  );
};

export default Header;

import HeaderHome from "../components/headerHome";
import Help from "../components/help";

export default function HelpPage() {
  return (
    <div className="flex flex-col h-screen w-screen dark-bg">
      <HeaderHome />
      <Help/>
      
      <style jsx>{`
        .dark-bg {
          background-color: #1f937;
        }
      `}</style>
    </div>
  );
}

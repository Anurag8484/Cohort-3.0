import { Container } from "./components/Container";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className=" flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <Container className="">
        <Navbar />
      </Container>
    </div>
  );
}

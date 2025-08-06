import { Container } from "../components/Container";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <div className="layout">
      <Container>
        <div className="left-line" />
        <div className="right-line" />
        <Navbar />
        <Hero />
      </Container>
      <div className="hero-image-container">
        <img src="/hero-ui-v5.webp" className="hero-image" alt="" />
      </div>
    </div>
  );
}

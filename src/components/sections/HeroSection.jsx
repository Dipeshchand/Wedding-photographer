import bg from "../../assets/images/hero-bg.jpg.png";

export default function HeroSection() {
  return (
    <section
      className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg})` }}
    >

    </section>
  );
}

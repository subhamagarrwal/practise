import Collab2 from "../Components/Landing_Page/Collab2";
import LandingPageHome2 from "../Components/Landing_Page/LandingPageHome2";
import LearnMoreAboutFreelancing from "../Components/Landing_Page/LearnMoreAboutFreelancing";
import HowToGetStarted from "../Components/Landing_Page/HowToGetStarted";
import LoveXlancrPage from "../Components/Landing_Page/LoveXlancr";
import FreelanceWithXlancr from "../Components/Landing_Page/FreelanceWithXlancr";

export default function Home() {
  return (
    <main className="bg-[#000] min-h-screen text-white">
      {/* Client Landing Page Home */}
      <section className="mb-7">
        <LandingPageHome2 />
      </section>

      {/* All your freelance tasks consolidated into a single platform */}
      <section className="">
        <Collab2 />
      </section>
      
      {/* How to get started */}
      <section>
        <HowToGetStarted />
      </section>

      {/* Learn More About Freelancing Page */}
      <section className="py-14">
        <LearnMoreAboutFreelancing />
      </section>

        {/* Freelance with Xlancr */}
        <section>
        <FreelanceWithXlancr />
        </section>

      {/* Independents love Xlancr */}
      <section className="py-14">
        <LoveXlancrPage />
      </section>
    </main>
  );
}

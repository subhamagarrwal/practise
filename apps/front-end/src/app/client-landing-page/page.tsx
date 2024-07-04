import Collab from "../Components/Landing_Page/Collab";
import LandingPageHome from "../Components/Landing_Page/LandingPageHome";
import LearnMoreAboutFreelancing from "../Components/Landing_Page/LearnMoreAboutFreelancing";
import LoveXlancrPage from "../Components/Landing_Page/LoveXlancr";
import SpeakSkills from "../Components/Landing_Page/SpeakSkills";
import HowToGetStarted from "../Components/Landing_Page/HowToGetStarted";
export default function Home() {
  return (
    <main className="bg-[#000] min-h-screen text-white">
      {/* Client Landing Page Home */}
      <section className="mb-7">
        <LandingPageHome />
      </section>

      {/* Freelance Collaboration */}
      <section className="mx:py-14 hidden mx:block">
        <Collab />
      </section>

      {/* How to get started at Xlancr*/}
      <section className="">
        <HowToGetStarted />
      </section>

      {/* We Speak Skill. Fluently. */}
      <section className="lg:py-14 hidden lg:block">
        <SpeakSkills />
      </section>

      {/* Learn More About Freelancing Page */}
      <section className="py-14">
        <LearnMoreAboutFreelancing />
      </section>

      {/* Independents love Xlancr */}
      <section className="py-14 sx:max-lp:relative sx:max-lp:mb-[vh]">
        <LoveXlancrPage />
      </section>
    </main>
  );
}

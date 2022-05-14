import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import "animate.css";
import { Education } from "../components/Education";
import { WorkExperience } from "../components/WorkExperience";
import { Ccas } from "../components/Ccas";
import { Projects } from "../components/Projects";
import AlternatingBg from "../components/AlternatingBg";
import { Skills } from "../components/Skills";
import { Achievements } from "../components/Achievements";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AlternatingBg
        components={[
          Education,
          WorkExperience,
          Projects,
          Ccas,
          Skills,
          Achievements,
        ]}
      />
    </Layout>
  );
}

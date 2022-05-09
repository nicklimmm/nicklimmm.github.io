import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import "animate.css";
import { Education } from "../components/Education";
import { WorkExperience } from "../components/WorkExperience";
import { Ccas } from "../components/Ccas";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Education />
      <WorkExperience />
      <Ccas />
    </Layout>
  );
}

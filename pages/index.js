import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import "animate.css";
import { Education } from "../components/Education";
import { WorkExperience } from "../components/WorkExperience";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Education />
      <WorkExperience />
    </Layout>
  );
}

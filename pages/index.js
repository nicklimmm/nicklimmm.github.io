import { Layout } from "../components/Layout";
import { Hero } from "../components/Hero";
import "animate.css";
import { Education } from "../components/Education";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Education />
    </Layout>
  );
}

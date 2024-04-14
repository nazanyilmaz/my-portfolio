import { Axios } from "axios";
import Layout from "../../components/Layout";
import ArrowLeft from "../../components/icons/ArrowLeft";
export default function ProjectsPAge() {
  return (
    <Layout title={"Portfolio/Projects"} description={"My Projects"}>
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
        <a href="/">
          <dic className="flex items-center space-x-4 font-semibold pb-6 taxt-grey-300 hover:text-gray-200">
            <ArrowLeft className="w-8 h-8 fill-current" />
            <span>Back Home</span>
          </dic>
        </a>

        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2"></div>
      </section>
    </Layout>
  );
}

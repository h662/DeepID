import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Intro from "../components/Intro";
import Explanation from "../components/Explanation";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Partners from "../components/Partners";

const COMMON = "common";

const Home: NextPage = () => {
  const { t } = useTranslation(COMMON);

  return (
    <main>
      <Intro />
      <Explanation />
      <Process />
      <Partners />
      <Contact />
    </main>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [COMMON])),
  },
});

export default Home;

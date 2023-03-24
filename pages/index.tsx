import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Intro from "../components/Intro";
import Explanation from "../components/Explanation";
import Process from "../components/Process";

const COMMON = "common";

const Home: NextPage = () => {
  const { t } = useTranslation(COMMON);

  return (
    <main className="max-w-screen-lg mx-auto">
      <Intro />
      <Explanation />
      <Process />
    </main>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [COMMON])),
  },
});

export default Home;

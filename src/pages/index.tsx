import type { NextPage } from "next";
import SafeEnvironment from "@components/feedback/SafeEnvironment";
import PageTitle from "@components/PageTitle";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
    </div>
  );
};

export default Home;

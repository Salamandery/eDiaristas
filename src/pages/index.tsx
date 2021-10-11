import type { NextPage } from "next";
import SafeEnvironment from "@components/feedback/SafeEnvironment";
import PageTitle from "@components/PageTitle";
import UserInformation from "@components/UserInformation";

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
            <UserInformation
                name={"Rodolfo M F Abreu"}
                description={"TI"}
                picture={"http://github.com/salamandery.png"}
                rating={3}
            />
        </div>
    );
};

export default Home;

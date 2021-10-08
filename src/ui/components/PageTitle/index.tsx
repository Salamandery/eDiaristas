import React from "react";
import { PageTitleContainer, Title, SubTitle } from "./styles";

interface PageTitleProps {
    title: string;
    subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
    return (
        <PageTitleContainer>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </PageTitleContainer>
    );
};

export default PageTitle;

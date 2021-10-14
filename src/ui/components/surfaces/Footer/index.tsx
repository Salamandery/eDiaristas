import React from "react";
import { Typography, Box } from "@mui/material";
import { FooterStyled, FooterContainer, FooterTitle, AppList } from "./styles";

const Footer: React.FC = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{ maxWidth: "400px" }}>
                    <FooterTitle>Quem somos</FooterTitle>
                    <Typography variant={"body2"} sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Reiciendis totam enim deleniti, aliquam fugiat
                        nam, quod laborum quidem dolor natus, hic sunt accusamus
                        nemo laboriosam assumenda eaque consectetur mollitia
                        dolorem!
                    </Typography>
                </Box>

                <div>
                    <FooterTitle>Baixe nossos aplicativos!</FooterTitle>
                    <AppList>
                        <li>
                            <a
                                href={"/"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                            >
                                <img
                                    src="/img/logos/app-store.png"
                                    alt="App Store"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href={"/"}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                            >
                                <img
                                    src="/img/logos/google-play.png"
                                    alt="Google Play"
                                />
                            </a>
                        </li>
                    </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    );
};

export default Footer;

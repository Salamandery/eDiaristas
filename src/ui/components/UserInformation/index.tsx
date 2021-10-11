import React, { useCallback } from "react";
import {
    UserInformationContainer,
    UserName,
    UserDescription,
    AvatarStyled,
    RatingStyled,
} from "./styles";

interface UserInformationProps {
    name: string;
    description: string;
    picture: string;
    rating: number;
}

const UserInformation: React.FC<UserInformationProps> = ({
    picture,
    name,
    description,
    rating,
}) => {
    const firstLetter = useCallback((name: string): string => {
        return name[0];
    }, []);

    return (
        <UserInformationContainer>
            <AvatarStyled src={picture}>{firstLetter(name)}</AvatarStyled>
            <UserName>{name}</UserName>
            <UserDescription>{description}</UserDescription>
            <RatingStyled readOnly={true} value={rating} />
        </UserInformationContainer>
    );
};

export default UserInformation;

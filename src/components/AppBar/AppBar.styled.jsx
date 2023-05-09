import styled from "@emotion/styled";


export const AppBar = styled.div`
display: flex;
align-items: center;
`;

export const Image = styled.img`
width: 40px;
margin-right: 30px;

transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover,
&:focus {
    scale: 1.05;
}
`;
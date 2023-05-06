import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 380px;
  padding-top: 284px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  
`;

export const Logo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;

export const Image = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  left: 36px;
  top: 28px;
`;

export const Line = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  left: 0px;
  top: 214px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarWrap = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;
  z-index: 999;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 62px;
  height: 62px;
`;

const SharedTextStyle = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Tweet = styled(SharedTextStyle)`
  margin-bottom: 16px;
`;

export const Follower = styled(SharedTextStyle)`
  margin-bottom: 26px;
`;

export const BlueButton = styled.button`
  margin-bottom: 36px;
  padding: 14px 56px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);


  &:hover,
  &:focus {
    scale: 1.05;
  }
 
`;

export const GreenButton = styled(BlueButton)`
    background-color: #5CD3A8;  
`;

export const InteractiveField = styled.div``;

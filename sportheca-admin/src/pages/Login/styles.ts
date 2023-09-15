import styled from '@emotion/styled';

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #42006C 0%, #000000 100%);
    overflow: hidden;
`;

export const Forms = styled.img`
  position: absolute;
  z-index: 0;
  left: -10px;
  top: 0;
  width: 45%;
  opacity: 0.2; 
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #160520;
  width: 90%;
  border-radius: 20px;
  padding: 50px 25px;
  height: 75vh;
  z-index: 9;
`;

export const Logo = styled.img`
  width: 320px;
`;

export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
`;

export const ForgotPass = styled.p`
  margin: 7px 0 30px 0;
  padding: 0;
  text-align: right;
  width: 100%;
  font-size: 13px;
  color: #B2BAC2;
`;

export const HelperSection = styled.div`
    background-color: rgb(58, 58, 58, 0.5);
    display: flex;
    width: 450px;
    margin-top: 24px;
    border-radius: 6px;
    padding: 10px 15px 20px;
    box-sizing: border-box;
    line-height: 8px;
    justify-content: space-around;
`;

export const HelperColumn = styled.div`
    width: 50%;
    text-align: center;
  p {
    color: #B2BAC2;
    font-size: 12px;
    font-family: 'Lato';
  }

  a {
    color: #ff004f;
    font-size: 14px;
    font-family: 'Lato';  
  }
`;

export const Divisor = styled.div`
    width: 2px;
    background-color: rgba(255, 0, 79, 0.5);
    height: 30px;
    margin-top: 10px;
`;

export const Register = styled.button`
    width: 450px;
    margin-top: 24px;
    font-family: 'Lato';  
    font-size: 16px;
    height: 60px;
`;
import styled from 'styled-components'

export const WrapperPlan = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Container = styled.div`
  height: 902px;
  position: relative;

  display: flex;
  flex-direction: row;
  gap: 13.12rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;

  @media (max-width: 768px) {
    top: 0.63rem;
    height: 3.13rem;
  }

  > div {
    width: 100%;
  }

  > div:first-child {
    display: flex;
    justify-content: flex-start;
  }
`

export const Group = styled.div`
  height: 0.81rem;
  left: 4.25rem;
  position: absolute;
  top: 0.44rem;
  width: 0.5rem;

  @media (max-width: 768px) {
    top: 0.31rem;
    left: 5%;
  }
`

export const Img = styled.img`
  height: 1.81rem;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 2.56rem;

  @media (max-width: 768px) {
    height: 1.25rem;
    width: 1.88rem;
  }
`

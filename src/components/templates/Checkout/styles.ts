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
  align-items: center;
  flex-direction: column;
  gap: 3.33rem;
  margin-top: 2rem;
  width: 100%;

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

export const GroupFeedback = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  line-height: 1.75rem;
  gap: 1rem;
`

export const IconSuccess = styled.div`
  border: 2px solid;
  border-color: #f4f3f6;
  border-radius: 30px;
  height: 60px;
  width: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoCheckoutFeedback = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 20px #0000000d;
  height: 12.5rem;
  width: 21.4375rem;

  padding: 1rem;
`

export const ValueCheckout = styled.div`
  background-color: #f4f3f6;
  border-radius: 15px;
  height: 80px;
  width: 100%;

  padding: 1.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  text-align: end;

  margin-bottom: 1.2rem;
`

export const StarWrapperSVG = styled.div`
  background-color: #e1dee8;
  border-radius: 20px;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`

export const groupButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.25rem;
  width: 100%;
`

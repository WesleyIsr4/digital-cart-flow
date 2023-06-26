import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.25rem;
  gap: 3.5rem;
  border-radius: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.primaryBlue};
`

export const PlanCardPaywall = styled.div``

export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Plan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const Badge = styled.div`
  padding: 0.21rem 0.31rem;
  background: ${({ theme }) => theme.colors.secondaryOrange};
  border-radius: 9rem;
  top: 20px;
`

export const RadioInput = styled.input`
  margin-right: 10px;
`

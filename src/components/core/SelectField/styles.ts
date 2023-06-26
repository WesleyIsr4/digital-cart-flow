import styled from 'styled-components'

export const Fieldset = styled.fieldset`
  position: relative;
  border: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SelectWrapper = styled.select`
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  height: 50px;
  color: ${({ theme }) => theme.colors.scaleGray4};
  border-bottom: 1px solid ${({ theme }) => theme.colors.scaleGray1};
  font-size: 16px;

  &:focus {
    outline: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.scaleGray1};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.scaleGray3};
  }
`

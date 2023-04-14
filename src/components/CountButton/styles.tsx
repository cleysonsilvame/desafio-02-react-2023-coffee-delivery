import styled from 'styled-components'

export const AddAndMinusContainer = styled.div`
  width: 4.5rem;
  height: 2.375rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.25rem;

  background-color: ${({ theme }) => theme.colors.base.button};
  border-radius: 0.375rem;

  & > button {
    color: ${({ theme }) => theme.colors.brand.purple};
    background-color: transparent;
    border: none;
    font-size: 0;
    line-height: 0;

    transition: color 0.2s;

    :hover {
      color: ${({ theme }) => theme.colors.brand['purple-dark']};
    }
  }
`

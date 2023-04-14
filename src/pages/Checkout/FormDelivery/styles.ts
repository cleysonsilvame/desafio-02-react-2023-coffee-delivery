import styled from 'styled-components'

export const FormDeliveryContainer = styled.div`
  width: 40rem;
  padding: 2.5rem;

  border-radius: 0.375rem;

  background-color: ${({ theme }) => theme.colors.base.card};
`

export const HeaderContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${({ theme }) => theme.colors.brand['yellow-dark']};
  }

  > div {
    > p:first-child {
      color: ${({ theme }) => theme.colors.base.subtitle};
    }

    > p:last-child {
      font-size: 0.875rem;
    }
  }
`

export const InputsContainer = styled.section`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 0.7fr 1fr 0.3fr;
  gap: 1rem;

  input {
    padding: 0.75rem;
    font-size: 0.875rem;
    min-width: 0;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.base.input};

    border-radius: 0.375rem;
    border: 1px;
  }

  & > div:nth-child(2) {
    grid-column: 1 / 4;
  }

  & > div:nth-child(4) {
    grid-column: 2 / 4;
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.base.danger};

    margin: 0.1rem 0.5rem;
  }
`

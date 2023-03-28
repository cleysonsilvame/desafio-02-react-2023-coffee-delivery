import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin: 0 auto;
  max-width: 72rem;

  > img {
    height: 2.5rem;
  }

  > div {
    display: flex;
    gap: 0.75rem;

    > span {
      padding: 0.4rem;
      border-radius: 0.375rem;
      border: none;

      display: flex;
      align-items: center;
      gap: 0.4rem;

      background: ${({ theme }) => theme.colors.brand['purple-light']};
      color: ${({ theme }) => theme.colors.brand['purple-dark']};
    }

    > button {
      width: 2.375rem;
      padding: 0.4rem;
      border-radius: 0.375rem;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${({ theme }) => theme.colors.brand['yellow-light']};
      color: ${({ theme }) => theme.colors.brand['yellow-dark']};

      cursor: pointer;

      transition: all 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.brand['yellow-light']};
        background: ${({ theme }) => theme.colors.brand['yellow-dark']};
      }
    }
  }
`

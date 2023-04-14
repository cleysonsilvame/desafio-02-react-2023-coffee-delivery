import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin: 0 auto;
  max-width: 72rem;

  > a > img {
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

    > a {
      position: relative;

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

      > p {
        position: absolute;

        right: -0.5rem;
        top: -0.5rem;

        font-size: 0.75rem;
        font-weight: 700;

        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.colors.base.white};

        background-color: ${({ theme }) => theme.colors.brand['yellow-dark']};
        border-radius: 1000px;
      }
    }
  }
`

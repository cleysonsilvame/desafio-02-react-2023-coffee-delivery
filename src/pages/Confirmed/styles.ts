import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 1120px;
  margin: 4rem auto;

  & > h1 {
    font-family: ${({ theme }) => theme.font.fontFamily.baloo};
    font-weight: 800;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.brand['yellow-dark']};
  }

  & > h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.base.subtitle};
    font-weight: normal;
  }

  & > section {
    margin-top: 2.5rem;

    display: flex;
    gap: 5rem;

    justify-content: space-between;

    > div {
      flex: 1;

      height: 16.875rem;
      padding: 1px;

      display: flex;

      background-image: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.brand.yellow},
        ${({ theme }) => theme.colors.brand.purple}
      );
      border-radius: 0.375rem 2.25rem;

      > div {
        flex: 1;

        padding: 3rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        justify-content: center;
        gap: 2rem;

        background-color: ${({ theme }) => theme.colors.base.background};
        border-radius: 0.375rem 2.25rem;
      }
    }
  }
`

import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 1120px;
  margin: 0 auto 4rem;

  & > h3 {
    font-family: ${({ theme }) => theme.font.fontFamily.baloo};
    font-weight: 800;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.base.subtitle};
    line-height: ${({ theme }) => theme.font.lineHeight};
    margin-bottom: 3.375rem;
  }

  & > div {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
`

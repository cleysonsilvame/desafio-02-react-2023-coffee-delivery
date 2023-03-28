import styled from 'styled-components'

import BackgroundImage from '../../assets/background.svg'

export const SectionContainer = styled.section`
  background: url(${BackgroundImage}) center/cover;
  padding: 5.75rem 0;

  height: 34rem;
`

export const InnerContainer = styled.div`
  display: flex;
  align-items: stretch;

  width: 72rem;
  padding: 0 2rem;
  margin: 0 auto;
  gap: 2.5rem;

  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > h1 {
      font-family: ${({ theme }) => theme.font.fontFamily.baloo};
      color: ${({ theme }) => theme.colors.base.title};

      font-size: 3rem;
      font-weight: 800;
    }

    > h2 {
      color: ${({ theme }) => theme.colors.base.subtitle};

      font-size: 1.25rem;
      font-weight: 400;

      flex: 1;
    }

    > div {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }
  }

  > img {
    grid-area: right;

    align-self: center;
    justify-self: end;
  }
`

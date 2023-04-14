import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 16rem;
  min-height: 20rem;
  padding: 0 1.25rem 1rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: ${({ theme }) => theme.colors.base.card};

  border-radius: 0.375rem 2.25rem;
  text-align: center;

  & > img {
    width: 7.5rem;
    margin-top: -1rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;

  & > div {
    margin-top: 0.75rem;
    padding: 0.25rem 0.5rem;

    background-color: ${({ theme }) => theme.colors.brand['yellow-light']};
    border-radius: 9999px;

    & > div {
      font-family: ${({ theme }) => theme.font.fontFamily.baloo};
      font-weight: 700;
      font-size: 0.625rem;

      line-height: ${({ theme }) => theme.font.lineHeight};
      text-transform: uppercase;

      color: ${({ theme }) => theme.colors.brand['yellow-dark']};
    }
  }
`

export const TitleContainer = styled.p`
  font-family: ${({ theme }) => theme.font.fontFamily.baloo};
  font-weight: 700;
  font-size: 1.25rem;

  margin-top: 1rem;

  color: ${({ theme }) => theme.colors.base.subtitle};
`

export const SubtitleContainer = styled.p`
  color: ${({ theme }) => theme.colors.base.label};
  font-size: 0.875;
  margin-top: 0.5rem;
`

export const CartContainer = styled.div`
  width: 100%;
  margin-top: 2.0625rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 0.5rem;
`

export const PriceContainer = styled.div`
  margin-right: auto;

  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  & > p {
    color: ${({ theme }) => theme.colors.base.text};
  }

  & > p:first-child {
    font-size: 0.875rem;
  }

  & > p:last-child {
    font-family: ${({ theme }) => theme.font.fontFamily.baloo};

    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const SendCartButtonContainer = styled.button`
  padding: 0.5rem;
  height: 2.375rem;

  border-radius: 0.375rem;
  border: none;

  background-color: ${({ theme }) => theme.colors.brand['purple-dark']};
  color: ${({ theme }) => theme.colors.base.white};

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  :hover {
    background-color: ${({ theme }) => theme.colors.brand.purple};
  }
`

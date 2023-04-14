import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  max-width: 1120px;
  margin: 0 auto 4rem;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 2rem;
`

export const TitleContainer = styled.p`
  font-family: ${({ theme }) => theme.font.fontFamily.baloo};
  font-size: 1.125rem;
  line-height: 1.75rem;

  margin-bottom: 1rem;
`

export const RightContainer = styled.div`
  & > div {
    width: 448px;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-radius: 0.375rem 2.75rem;
    background: ${({ theme }) => theme.colors.base.card};
  }
`
export const SummaryContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  > span:nth-child(even) {
    justify-self: end;
  }
  > span:nth-child(odd) {
    font-size: 0.875rem;
  }

  > span:nth-last-child(-n + 2) {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
`

export const ConfirmButton = styled.button`
  font-size: 0.875rem;
  font-weight: 700;

  margin-top: 1.5rem;
  padding: 0.75rem 0;

  border-radius: 0.375rem;
  border: 0;

  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.brand.yellow};
  color: ${({ theme }) => theme.colors.base.white};

  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.brand['yellow-light']};
    background: ${({ theme }) => theme.colors.brand['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

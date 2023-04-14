import styled from 'styled-components'

export const CartItemContainer = styled.main`
  display: flex;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};

  & > div {
    display: flex;
    gap: 0.5rem;

    & > img {
      width: 4rem;
      height: 4rem;
    }
  }
  & > p {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.base.text};
  }
`

export const AddOrRemoveOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > p {
    color: ${({ theme }) => theme.colors.base.subtitle};
  }
  & > div {
    display: flex;
    gap: 0.5rem;
  }
`
export const RemoveButton = styled.button`
  display: flex;
  align-items: center;

  gap: 0.4rem;
  padding: 0.5rem;

  font-size: 0.75rem;
  border-radius: 0.375rem;
  background: ${({ theme }) => theme.colors.base.button};
  color: ${({ theme }) => theme.colors.base.subtitle};

  & > svg {
    color: ${({ theme }) => theme.colors.brand.purple};
  }

  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.base.subtitle};
    background: ${({ theme }) => theme.colors.base.hover};
  }
`

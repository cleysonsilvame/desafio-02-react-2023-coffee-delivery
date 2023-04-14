import styled from 'styled-components'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export const PaymentContainer = styled.div`
  width: 40rem;
  margin-top: 0.75rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 0.375rem;

  background-color: ${({ theme }) => theme.colors.base.card};

  > div:first-child {
    display: flex;
    gap: 0.5rem;

    > svg {
      color: ${({ theme }) => theme.colors.brand.purple};
    }

    > div {
      > p:first-child {
        color: ${({ theme }) => theme.colors.base.subtitle};
      }
      > p:last-child {
        font-size: 0.875rem;
      }
    }
  }
`

export const ToggleContainer = styled(ToggleGroup.Root)`
  > div {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    > button {
      width: 100%;
      padding: 0.75rem;

      font-size: 0.75rem;
      border-radius: 0.375rem;

      display: flex;
      align-items: center;
      gap: 0.75rem;

      color: ${({ theme }) => theme.colors.base.text};
      background-color: ${({ theme }) => theme.colors.base.button};

      > svg {
        color: ${({ theme }) => theme.colors.brand.purple};
      }

      transition: all 0.2s;
      &:hover {
        color: ${({ theme }) => theme.colors.base.subtitle};
        background: ${({ theme }) => theme.colors.base.hover};
      }

      &[data-state='on'] {
        background-color: ${({ theme }) => theme.colors.brand['purple-light']};
        border: 1px solid ${({ theme }) => theme.colors.brand.purple};
      }
    }
  }
  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.base.danger};

    margin: 0.1rem 0.5rem;
  }
`

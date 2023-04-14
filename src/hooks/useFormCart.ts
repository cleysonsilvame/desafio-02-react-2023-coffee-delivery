import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schema = z.object({
  cep: z.string().min(8, 'O CEP é obrigatório!').max(9),
  street: z.string().min(1, 'A rua é obrigatório!'),
  number: z.coerce.number().min(1, 'O número é obrigatório!'),
  complement: z.string().min(1, 'O complemento é obrigatório!'),
  neighborhood: z.string().min(1, 'O bairro é obrigatório!'),
  city: z.string().min(1, 'A cidade é obrigatório!'),
  state: z.string().min(2, 'O estado é obrigatório!'),
  payment_type: z.enum(['debit', 'credit', 'money'], {
    errorMap: () => ({ message: 'O tipo de pagamento é obrigatório' }),
  }),
})

export type FormSchema = z.infer<typeof schema>

export function useFormCart() {
  return useForm<FormSchema>({
    resolver: zodResolver(schema),
  })
}

import { FormEvent, useState } from 'react'

import { Form as Form } from './styles'
import { FormButton as FormButton } from './styles'
import { FormInput as FormInput } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <FormInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <FormButton type="submit">Pesquisar</FormButton>
    </Form>
  )
}
export default FormVagas

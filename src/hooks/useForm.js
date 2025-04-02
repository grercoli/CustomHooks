import { useState } from "react"

const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm)

  const onInputChange = event => {
    const { target } = event
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return {
    ...formState,
    onInputChange
  }
}

export default useForm

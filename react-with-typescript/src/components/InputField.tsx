import { Field, Input } from "@chakra-ui/react"

export const InputField  = ({nameField, placeholder, helperText = null, styles=null}: any) => {
  return (
    <Field.Root required style={styles}>
      <Field.Label>
        {nameField} <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder={placeholder} />
      { helperText && <Field.HelperText>{helperText}</Field.HelperText>}
    </Field.Root>
  )
}

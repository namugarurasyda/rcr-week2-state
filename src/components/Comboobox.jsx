// Change your imports to look like this:
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Label, Field } from '@headlessui/react'

function Combobox({ currentUser, users }) {
  return (
    <Field>
      <Label>Assigned to</Label>
      {/* Headless UI expects slightly different structures (Input + Options wrapper) */}
      <Combobox defaultValue={currentUser}>
        <ComboboxInput displayValue={(user) => user?.name} />
        <ComboboxButton>▼</ComboboxButton>
        <ComboboxOptions>
          {users.map((user) => (
            <ComboboxOption key={user.id} value={user}>
              {user.name}
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </Field>
  )
}

export default Combobox;

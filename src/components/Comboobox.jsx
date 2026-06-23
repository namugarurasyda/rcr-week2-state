import React, { useState } from 'react';
import { Field, Label, Combobox, ComboboxInput, ComboboxButton, ComboboxOptions, ComboboxOption } from '@headlessui/react';

function MyCombobox({ currentUser, users }) {
  // 1. Initialize state with the currentUser as the default
  const [selectedUser, setSelectedUser] = useState(currentUser);
  // Optional: State to handle the search/filter query
  const [query, setQuery] = useState('');

  // 2. Filter users based on what the user types into the input
  const filteredUsers = query === '' 
    ? users 
    : users.filter((user) => 
        user.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <Field>
      <Label>Assigned To :</Label>
      
      {/* 3. Pass value and onChange to the main Combobox wrapper */}
      <Combobox value={selectedUser} onChange={setSelectedUser}>
        <div className="relative"> {/* Wrapper for positioning if needed */}
          
          {/* 4. Update the query state when the user types */}
          <ComboboxInput 
            displayValue={(user) => user?.name || ''} 
            onChange={(event) => setQuery(event.target.value)}
          />
          
          <ComboboxButton>▼</ComboboxButton>
          
          <ComboboxOptions>
            {/* 5. Map over filteredUsers instead of all users so searching works */}
            {filteredUsers.length === 0 && query !== '' ? (
              <div className="no-results">No one found.</div>
            ) : (
              filteredUsers.map((user) => (
                <ComboboxOption key={user.id} value={user}>
                  {user.name}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
          
        </div>
      </Combobox>
    </Field>
  );
}

export default MyCombobox;
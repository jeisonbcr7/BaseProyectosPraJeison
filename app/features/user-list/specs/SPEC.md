# UserList

## Intent
Permitir al usuario agregar nombres de usuario a una lista local y eliminarlos individualmente.

## In scope
- Mostrar un label y un input para ingresar el nombre de usuario.
- Botón para agregar el usuario a la lista.
- Mostrar todos los usuarios agregados en una lista.
- Permitir eliminar cada usuario por separado.

## Out of scope
- Persistencia entre recargas de página.
- Validación avanzada más allá de evitar valores vacíos.

## Requirements
- El usuario debe ver un label junto al input.
- Al hacer clic en el botón "Agregar" o presionar Enter se agrega el nombre a la lista.
- La lista muestra cada nombre con un botón para eliminarlo.
- Si no hay usuarios, se muestra un estado vacío.

## Acceptance criteria
- [ ] El componente muestra label, input y botón de agregar.
- [ ] Al agregar un nombre válido, el usuario aparece en la lista.
- [ ] Cada elemento de la lista puede eliminarse individualmente.
- [ ] Se muestra un mensaje de estado vacío cuando no hay usuarios.

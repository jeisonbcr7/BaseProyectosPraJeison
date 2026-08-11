import type { ChangeEvent, KeyboardEvent } from "react";

export interface UserListViewModel {
  userName: string;
  userList: string[];
  validationMessage: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleInputKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  handleAddUser: () => void;
  handleRemoveUser: (index: number) => void;
}

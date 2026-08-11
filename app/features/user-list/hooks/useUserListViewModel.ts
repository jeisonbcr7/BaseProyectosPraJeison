import type { ChangeEvent, KeyboardEvent } from "react";
import { useState } from "react";
import { KEYBOARD, STRING } from "@/app/constants";
import { UserListViewModel } from "../models/UserListViewModel.interface";
import { USER_LIST } from "../constants/UserList.constants";

export const useUserListViewModel = (): UserListViewModel => {
  const [userName, setUserName] = useState(STRING.Empty);
  const [userList, setUserList] = useState<string[]>([]);
  const [validationMessage, setValidationMessage] = useState(STRING.Empty);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setUserName(event.target.value);
    if (validationMessage) {
      setValidationMessage(STRING.Empty);
    }
  };

  const handleAddUser = (): void => {
    const trimmedUserName = userName.trim();

    if (!trimmedUserName) {
      setValidationMessage(USER_LIST.ERROR_EMPTY_NAME);
      return;
    }

    setUserList((currentList) => [...currentList, trimmedUserName]);
    setUserName(STRING.Empty);
  };

  const handleRemoveUser = (index: number): void => {
    setUserList((currentList) =>
      currentList.filter((_, currentIndex) => currentIndex !== index)
    );
  };

  const handleInputKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === KEYBOARD.ENTER) {
      event.preventDefault();
      handleAddUser();
    }
  };

  return {
    userName,
    userList,
    validationMessage,
    handleInputChange,
    handleInputKeyDown,
    handleAddUser,
    handleRemoveUser,
  };
};

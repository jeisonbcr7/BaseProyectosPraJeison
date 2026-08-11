"use client";

import { BUTTON_TYPES, STRING } from "@/app/constants";
import { Button } from "@/app/components";
import { useUserListViewModel } from "./hooks/useUserListViewModel";
import { USER_LIST } from "./constants/UserList.constants";

type UserListItemProps = {
  index: number;
  name: string;
  onRemove: (index: number) => void;
};

const UserListItem = ({
  index,
  name,
  onRemove,
}: UserListItemProps): JSX.Element => (
  <li className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
    <span className="text-sm text-zinc-900">{name}</span>
    <Button
      type={BUTTON_TYPES.BUTTON}
      className="rounded-xl bg-red-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
      onClick={() => onRemove(index)}
    >
      {USER_LIST.DELETE_BUTTON}
    </Button>
  </li>
);

const UserList = (): JSX.Element => {
  const {
    userName,
    userList,
    validationMessage,
    handleAddUser,
    handleInputChange,
    handleInputKeyDown,
    handleRemoveUser,
  } = useUserListViewModel();

  return (
    <section className="w-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-zinc-900">
          {USER_LIST.HEADING}
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          {USER_LIST.DESCRIPTION}
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <label className="flex-1">
          <span className="mb-2 block text-sm font-medium text-zinc-800">
            {USER_LIST.INPUT_LABEL}
          </span>
          <input
            className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-2 focus:ring-zinc-100"
            type="text"
            value={userName}
            placeholder={USER_LIST.INPUT_PLACEHOLDER}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
        </label>

        <Button
          type={BUTTON_TYPES.BUTTON}
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          onClick={handleAddUser}
        >
          {USER_LIST.ADD_BUTTON}
        </Button>
      </div>

      {validationMessage && (
        <p className="mt-3 text-sm font-medium text-red-600">
          {validationMessage}
        </p>
      )}

      <div className="mt-8">
        {userList.length > 0 ? (
          <ul className="space-y-3">
            {userList.map((name, index) => (
              <UserListItem
                key={`${name}-${index}`}
                index={index}
                name={name}
                onRemove={handleRemoveUser}
              />
            ))}
          </ul>
        ) : (
          <p className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-6 text-sm text-zinc-500">
            {USER_LIST.EMPTY_STATE}
          </p>
        )}
      </div>
    </section>
  );
};

export default UserList;

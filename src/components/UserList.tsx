import React, { FC, useEffect } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

interface IComponentProps {}

const UserListComponent: FC<IComponentProps> = () => {
  const { users, error, loading } = useTypeSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>
      })}
    </div>
  );
};

export const UserList = UserListComponent;

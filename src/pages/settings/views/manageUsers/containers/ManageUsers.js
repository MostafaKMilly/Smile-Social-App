import { Box, Typography } from "@mui/material";
import React from "react";
import Spinner from "../../../../../common/components/Spinner";
import UserInfo from "../components/UserInfo";
import { useAllUsers, useBanUser } from "../hooks";
import { useChangeUserRole } from "../hooks/useChangeUserRole";

function ManageUsers() {
  const { data: users, loading } = useAllUsers();
  const [changeRole] = useChangeUserRole();
  const [banUser] = useBanUser();

  if (loading) {
    return <Spinner />;
  }

  const handleChangeUserRole = (userId, roleName) => {
    changeRole({
      variables: {
        id: userId,
        roleName,
      },
    });
  };

  const handleBanUser = (userId) => {
    banUser({ variables: { userId } });
  };

  return (
    <Box mt={2}>
      <Typography color="primary" fontSize="16px" fontWeight={600}>
        جميع المستخدمين :
      </Typography>
      <Box mt={3} display="flex" flexDirection="column" rowGap={5}>
        {users.map((user) => (
          <UserInfo
            ket={user.id}
            image={user.image}
            firstName={user.firstName}
            lastName={user.lastName}
            class={user.class}
            createdAt={user.createdAt.split("T")[0]}
            email={user.email}
            isBaned={user.isBaned}
            roleName={user.roleName}
            onChangeUserRole={(newRole) =>
              handleChangeUserRole(user.id, newRole)
            }
            onBanUser={() => handleBanUser(user.id)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ManageUsers;

import React from "react";
import { useComplaintsList } from "../hooks/useComplaintsList";
import Spinner from "../../../../../common/components/Spinner";
import { Box } from "@mui/system";
import ComplaintCard from "../components/ComplaintCard";
function ComplainesList() {
  const { data: complaints, loading } = useComplaintsList();

  if (loading) {
    return <Spinner />;
  }

  return (
    <Box mt={2}>
      <Box display="flex" flexDirection="column" rowGap={5}>
        {complaints.map((complain) => (
          <ComplaintCard
            body={complain.body}
            title={complain.title}
            createdAt={complain.createdAt}
            firstName={complain.user.firstName}
            lastName={complain.user.lastName}
            image={complain.user.image}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ComplainesList;

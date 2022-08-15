import React, { useState } from "react";
import PropTypes from "prop-types";
import Add from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { GenericDialog } from "../../../../../common/components";
import { useForm } from "react-hook-form";
import AddUniversityNumberForm from "./AddUniversityNumberForm";
import { useAddUniverityNumber } from "../hooks/useAddUniverityNumber";
import { useDeleteUniversityNumber } from "../hooks/useDeleteUniversityNumber";

function ManageUniversityNumbers({ universityNumbers }) {
  const [open, setOpen] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [addUniversityNumber] = useAddUniverityNumber();
  const handleAddUniversityNumber = (data) => {
    const reqObject = {
      ...data,
      universityNumber: parseInt(data.universityNumber),
    };
    addUniversityNumber({
      variables: reqObject,
      onCompleted: () => {
        setOpen(false);
        reset()
      },
    });
  };
  const [deleteUniversityNumber] = useDeleteUniversityNumber();

  const handleDeleteUniversityNumber = (id) => {
    deleteUniversityNumber({
      variables: {
        id,
      },
    });
  };

  return (
    <Box>
      <Box display="flex" columnGap={1} alignItems="center">
        <Typography variant="body1" fontWeight="600" color="secondary">
          ارقامي الامتحانية
        </Typography>
        <IconButton color="primary" onClick={() => setOpen(true)}>
          <Add />
        </IconButton>
      </Box>
      <List sx={{ maxWidth: "500px" }}>
        {universityNumbers.map((number) => (
          <ListItem
            alignItems="flex-start"
            secondaryAction={
              <IconButton
                color="error"
                onClick={() => handleDeleteUniversityNumber(number.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
            key={number.id}
          >
            <ListItemText
              primary={
                <Typography fontSize="15px" fontWeight="600" color="secondary">
                  {number.universityNumber}
                </Typography>
              }
              secondary={
                <Typography color="textSecondary" fontSize="14px">
                  {"Year: " + number.year}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
      <GenericDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="اضافة رقم امتحاني"
        actionLabel={"حفظ"}
        content={<AddUniversityNumberForm control={control} errors={errors} />}
        onSubmit={handleSubmit(handleAddUniversityNumber)}
      />
    </Box>
  );
}

ManageUniversityNumbers.defaultProps = {
  universityNumbers: [],
};

ManageUniversityNumbers.propTypes = {
  universityNumbers: PropTypes.array,
};

export default ManageUniversityNumbers;

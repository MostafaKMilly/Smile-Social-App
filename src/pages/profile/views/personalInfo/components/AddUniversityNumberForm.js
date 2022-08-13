import { Stack, TextField } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import SelectClass from "../../../components/SelectClass";

function AddUniversityNumberForm({ control, errors }) {
  return (
    <Stack
      p={4}
      justifyContent="space-between"
      spacing={6}
      sx={{ height: "100%" }}
      alignItems="center"
    >
      <Controller
        name="year"
        control={control}
        rules={{ required: "السنة الدراسية مطلوبة" }}
        render={({ field }) => (
          <SelectClass {...field} error={errors.year ? true : false} />
        )}
      />
      <Controller
        name="universityNumber"
        control={control}
        rules={{
          required: "الرقم الامتحاني مطلوب",
          validate: (value) => value > 0,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            focused
            color="secondary"
            label="الرقم الامتحاني"
            type="number"
            error={errors.universityNumber ? true : false}
          />
        )}
      />
    </Stack>
  );
}

AddUniversityNumberForm.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default AddUniversityNumberForm;

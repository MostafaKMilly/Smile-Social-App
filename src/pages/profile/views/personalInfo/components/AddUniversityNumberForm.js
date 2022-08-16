import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function AddUniversityNumberForm({ control, errors }) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack
        p={4}
        justifyContent="space-between"
        spacing={6}
        sx={{ height: "100%" }}
        alignItems="center"
      >
        <Box width="100%">
          <Typography gutterBottom variant="body2">
            العام الدراسي
          </Typography>
          <Box display="flex" columnGap={2}>
            <Controller
              name="yearOne"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <DatePicker
                  views={["year"]}
                  {...field}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="secondary"
                      helperText={null}
                      error={errors.yearOne ? true : false}
                    />
                  )}
                />
              )}
            />
            <Controller
              name="yearTwo"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <DatePicker
                  views={["year"]}
                  {...field}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      color="secondary"
                      helperText={null}
                      error={errors.yearTwo ? true : false}
                    />
                  )}
                />
              )}
            />
          </Box>
        </Box>
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
    </LocalizationProvider>
  );
}

AddUniversityNumberForm.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default AddUniversityNumberForm;

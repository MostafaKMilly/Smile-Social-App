import { Autocomplete, Box, TextField } from "@mui/material";
import PropTypes from "prop-types";

import React from "react";
import { Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useGroupSubjects } from "../../../hooks";

function AddQuizForm(props) {
  const { groupName } = useParams();
  const { data: subjects } = useGroupSubjects(groupName);

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      rowGap={5}
      width="100%"
      p={1}
    >
      <Controller
        name="subject"
        label="المادة"
        control={props.control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            onChange={(_, item) => {
              onChange(item);
            }}
            value={value}
            options={subjects}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                label="المادة"
                error={props.errors?.subject ? true : false}
              />
            )}
          />
        )}
      />
      <Controller
        name="question"
        label="السؤال"
        rules={{ required: true }}
        control={props.control}
        render={({ field }) => (
          <TextField
            {...field}
            error={props.errors?.question ? true : false}
            label="السؤال"
          />
        )}
      />
      <Controller
        name="answer"
        label="الجواب"
        rules={{ required: true }}
        control={props.control}
        render={({ field }) => (
          <TextField
            {...field}
            multiline
            rows={4}
            error={props.errors?.answer ? true : false}
            label="الجواب"
          />
        )}
      />
    </Box>
  );
}

AddQuizForm.propTypes = {
  control: PropTypes.object,
  errors: PropTypes.object,
};

export default AddQuizForm;

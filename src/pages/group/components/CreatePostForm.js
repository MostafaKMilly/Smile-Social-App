import {
  Alert,
  Autocomplete,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useGroupSubjects } from "../hooks";

function CreatePostForm({ control, errors }) {
  const { groupName } = useParams();
  const { data: subjects } = useGroupSubjects(groupName);

  return (
    <form>
      <Controller
        name="subject"
        label="المادة"
        control={control}
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
                error={errors?.subject ? true : false}
              />
            )}
          />
        )}
      />
      <Controller
        control={control}
        name="type"
        label="النوع"
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            labelId="classSelectLabel"
            name="النوع"
            variant="standard"
            color="secondary"
            fullWidth
            sx={{ my: 2 }}
            label="النوع"
            {...field}
          >
            <MenuItem value={"Advertisement"}>اعلان</MenuItem>
            <MenuItem value={"Inquiry"}>استفسار</MenuItem>
          </Select>
        )}
      />
      <Typography
        gutterBottom
        fontSize="13px"
        fontWeight={600}
        sx={{ color: "primary.main" }}
        component="label"
        htmlFor="title"
      >
        عنوان المنشور :
      </Typography>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField id="title" {...field} sx={{ mb: 2 }} />
        )}
      />
      <Typography
        gutterBottom
        fontSize="13px"
        fontWeight={600}
        sx={{ color: "primary.main" }}
        component="label"
        htmlFor="body"
      >
        محتوى المنشور :
      </Typography>
      <Controller
        name="body"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField multiline id="body" rows={5} {...field} />
        )}
      />
      {errors?.body && (
        <Alert severity="error" sx={{ mt: 1 }}>
          محتوى المنشور مطلوب
        </Alert>
      )}
      <Typography
        gutterBottom
        fontSize="13px"
        fontWeight={600}
        sx={{ color: "primary.main" }}
        component="label"
        htmlFor="body"
      >
        صورة المنشور
      </Typography>
      <Controller
        name="image"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <TextField
            type="file"
            onChange={(e) => {
              const imageFile = e.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(imageFile);
              reader.onload = (e) => {
                onChange(e.target.result);
              };
            }}
          />
        )}
      />
    </form>
  );
}

CreatePostForm.propTypes = {
  onCreatePostSuccess: PropTypes.func,
};

export default CreatePostForm;

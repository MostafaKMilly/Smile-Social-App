import React, { useRef, useState } from "react";
import { Avatar, Button, Grid, IconButton, TextField } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_USER_INFO } from "../../../queries/getUesrInfo";
import { Box } from "@mui/system";
import Edit from "@mui/icons-material/Edit";
import { Controller, useForm } from "react-hook-form";
import SelectClass from "../../../components/SelectClass";
import Save from "@mui/icons-material/Save";
import _ from "lodash";
import Spinner from "../../../../../common/components/Spinner";
import { useEditUserProfile } from "../hooks/useEditUserProfile";
import ManageUniversityNumbers from "../components/ManageUniversityNumbers";
import { useSelector } from "react-redux";
import { IMAGES_LINK } from "../../../../../constants";

function PersonPersonalInfo() {
  const { handleSubmit, control, reset } = useForm();
  const fileInputRef = useRef();
  const [image, setImage] = useState();
  const [previewImage, setPreviewImage] = useState();
  const { id } = useSelector((state) => state.user.info);

  const { data, loading } = useQuery(GET_USER_INFO, {
    variables: {
      id,
    },
    onCompleted: (data) => {
      if (data.getUser?.image) {
        setPreviewImage(IMAGES_LINK + data.getUser?.image);
      }
      reset({
        ...data?.getUser,
        birthday: data?.getUser?.birthday?.split("T")?.[0],
      });
    },
  });
  const [editProfile] = useEditUserProfile();

  if (loading) {
    return <Spinner />;
  }

  const handleEditUserProfile = (data) => {
    const variables = { ...data, id, image };
    editProfile({ variables: _.omit(variables, "__typename", "email") });
  };

  const handleUploadImage = () => {
    fileInputRef.current.click();
  };

  const handleInputFileChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const objectUrl = URL.createObjectURL(imageFile);
      setPreviewImage(objectUrl);
    }
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = (e) => {
      setImage(e.target.result);
    };
  };

  return (
    <>
      <Box
        textAlign="-webkit-center"
        mt={2}
        position="relative"
        width="fit-content"
        m="0 auto"
      >
        <Avatar
          sx={{ width: "100px", height: "100px" }}
          src={previewImage || "images/89288184.png"}
        />
        <IconButton
          onClick={handleUploadImage}
          disableRipple
          sx={{
            position: "absolute",
            bottom: -2,
            left: -2,
            background: "white",
            width: "30px",
            height: "30px",
            "&:hover": {
              background: "white",
            },
          }}
          color="secondary"
        >
          <Edit fontSize="small" />
        </IconButton>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleInputFileChange}
        />
      </Box>
      <Box
        mt={4}
        mb={9}
        component="form"
        onSubmit={handleSubmit(handleEditUserProfile)}
      >
        <Grid
          container
          columnSpacing={4}
          rowSpacing={3}
          sx={{
            px: {
              xs: 0,
              sm: 7,
            },
          }}
        >
          <Grid item xs={12} sm={6}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="الاسم الاول"
                  focused
                  color="secondary"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="الكنية"
                  focused
                  color="secondary"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="birthday"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="الميلاد"
                  type="date"
                  focused
                  color="secondary"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="class"
              control={control}
              render={({ field }) => <SelectClass {...field} />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="facebookURL"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="FacebookUrl"
                  type="url"
                  focused
                  color="secondary"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="telegramURL"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="telegramUrl"
                  type="url"
                  focused
                  color="secondary"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="gmail"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="gmail"
                  type="email"
                  focused
                  color="secondary"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="bio"
                  multiline
                  rows={4}
                  color="secondary"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <ManageUniversityNumbers
              universityNumbers={data?.getUser?.userUniversityNumbers}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" endIcon={<Save color="white" />}>
              حفظ
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default PersonPersonalInfo;

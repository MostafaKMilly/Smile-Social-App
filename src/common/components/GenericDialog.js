import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    width: "100%",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    justifyContent: "flex-start",
  },
}));

const CustomDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

CustomDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function GenericDialog(props) {
  return (
    <CustomDialog onClose={props.onClose} open={props.isOpen}>
      <CustomDialogTitle
        onClose={props.onClose}
        sx={{ fontWeight: 700, fontSize: "18px !important" }}
      >
        {props.title}
      </CustomDialogTitle>
      <DialogContent dividers>{props.content}</DialogContent>
      <DialogActions>
        {props.hasCloseButton && (
          <Button autoFocus onClick={props.onClose} color="secondary">
            {"اغلاق"}
          </Button>
        )}
        <Button autoFocus type="submit" form={props.formId}>
          {props.actionLabel || "نشر"}
        </Button>
      </DialogActions>
    </CustomDialog>
  );
}

GenericDialog.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
  actionLabel: PropTypes.string,
  onClose: PropTypes.func,
  hasCloseButton: PropTypes.bool,
  formId: PropTypes.string,
};

GenericDialog.defaultProps = {
  hasCloseButton: true,
};

export default GenericDialog;

"use client";
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";

interface ConfirmDialogProps {
  message: string;
  onOk?: () => void;
  onCancel?: () => void;
  dlgOpen: boolean;
  setOpen: () => void;
}

function ConfirmDialog({
  message,
  onOk,
  onCancel,
  dlgOpen,
  setOpen,
}: ConfirmDialogProps) {
  useEffect(() => {
    setOpen(dlgOpen);
  }, [dlgOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  if (!dlgOpen) {
    return null;
  } else {
    return (
      <React.Fragment>
        <Dialog open={dlgOpen} onClose={handleClose}>
          <DialogTitle>{message}</DialogTitle>
          <DialogContent></DialogContent>
          <DialogActions>
            <Button
              type="button"
              onClick={() => {
                onOk?.();
                setOpen(false);
              }}
            >
              Ok
            </Button>
            <Button
              onClick={() => {
                onCancel?.();
                setOpen(false);
              }}
              type="button"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default ConfirmDialog;

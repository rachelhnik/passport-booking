import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { BookmarkAddTwoTone } from "@mui/icons-material";

export default function Datepicker({
  value,
  handleChange,
  handleSlots,
}: {
  value: any;
  handleChange: any;
  handleSlots: any;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} onClick={handleSlots}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

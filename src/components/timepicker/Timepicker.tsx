import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function Timepicker({
  slot,
  handleChange,
  timeslot,
}: {
  slot: Array<object>;
  handleChange: any;
  timeslot: string;
}) {
  return (
    <FormControl sx={{ marginTop: 4 }}>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <>{timeslot}</>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
}

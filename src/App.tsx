import React from "react";
import "./App.css";
import dayjs, { Dayjs } from "dayjs";
import Datepicker from "./components/Datepicker";
import Timepicker from "./components/timepicker/Timepicker";
function App() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs());
  const [slot, setSlot] = React.useState([]);
  const [timeslot, setTimeSlot] = React.useState("");
  const fetchAvailability = async (date: Dayjs | null) => {
    const chosenDate: String | undefined = date?.format("DD/MM/YYYY");
    console.log(chosenDate);
    const url = `http://localhost:5000/availability?date=${chosenDate}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    setSlot(data);
  };
  const handleSlots = () => {
    const timeOfSlots = Object.keys(slot)[1];
    console.log(timeOfSlots);
    setTimeSlot(timeOfSlots);
  };

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
    fetchAvailability(newValue);
    handleSlots();
  };

  return (
    <div className="Container">
      <Datepicker
        value={value}
        handleChange={handleChange}
        handleSlots={handleSlots}
      />
      <Timepicker slot={slot} handleChange={handleChange} timeslot={timeslot} />
    </div>
  );
}

export default App;

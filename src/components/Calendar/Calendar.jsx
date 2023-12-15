import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  return (
    <div className="mt-5 mx-3 d-flex align-items-center">
      <div className="d-flex flex-column">
        <label>From</label>
        <DatePicker
          selected={departureDate}
          onChange={(date) => {
            setDepartureDate(date);
            setReturnDate(date);
          }}
          placeholderText="Departure Date"
          minDate={new Date()} // Disable past dates
        />
      </div>
      <div className="d-flex flex-column">
        <label>To</label>
        <DatePicker
          selected={returnDate}
          onChange={(date) => setReturnDate(date)}
          placeholderText="Return Date"
          minDate={departureDate} // Set minimum date based on departure date
        />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date) => void;
}

interface DatePickerModalProps extends DatePickerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false); // Added state for selection mode

  // Provide a default date (null) if value is null and not in selection mode
  const selectedDate = isSelecting ? null : value;

  return (
    <div className="date-picker-container">
      <span
        className={`date-picker-button date-pick ${
          isSelecting ? "selecting" : ""
        }`}
        onClick={() => {
          setIsOpen((o) => !o);
          setIsSelecting(true); // Enter selection mode on click
        }}
      >
        {selectedDate == null
          ? "Select a Date"
          : format(selectedDate, "MMM do, yyyy")}
      </span>
      {isOpen && (
        <DatePickerModal
          setIsOpen={setIsOpen}
          onChange={(date) => {
            onChange(date);
            setIsOpen(false);
            setIsSelecting(false); // Exit selection mode after selecting a date
          }}
          value={selectedDate || new Date()}
        />
      )}
    </div>
  );
}

function DatePickerModal({ value, onChange, setIsOpen }: DatePickerModalProps) {
  const [visibleMonth, setVisibleMonth] = useState<Date>(value || new Date());
  const currentDate = new Date();

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(startOfMonth(visibleMonth)),
    end: endOfWeek(endOfMonth(visibleMonth)),
  });

  function showPreviousMonth() {
    setVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, -1);
    });
  }

  function showNextMonth() {
    setVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, 1);
    });
  }

  // Function to check if a date is in the past
  function isPastDate(date: Date) {
    // Remove the time component from both dates for accurate comparison
    const currentDateWithoutTime = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    );

    const dateWithoutTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    return dateWithoutTime < currentDateWithoutTime;
  }

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button
          className="prev-month-button month-button"
          onClick={showPreviousMonth}
          disabled={isPastDate(visibleMonth)}
        >
          &larr;
        </button>
        <div className="current-month">
          {format(visibleMonth, "MMMM - yyyy")}
        </div>
        <button
          className="next-month-button month-button"
          onClick={showNextMonth}
        >
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="date-picker-grid-dates date-picker-grid">
        {visibleDates.map((date) => (
          <button
            onClick={() => {
              onChange(date);
              setIsOpen(false);
            }}
            className={`date ${
              !isSameMonth(date, visibleMonth) && "date-picker-other-month-date"
            } ${isSameDay(date, value) && "selected"} ${
              isToday(date) && "today"
            } ${isPastDate(date) ? "disabled" : "selectable"}`}
            key={date.toDateString()}
            disabled={isPastDate(date)}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
}

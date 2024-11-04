"use client";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { DateRange } from "react-day-picker";
import { useProperty } from "@/utils/store";
import { Calendar } from "@/components/ui/calendar";

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from "@/utils/calendar";
const BookingCalender = () => {
  const currentDate = new Date();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);
  const bookings = useProperty((state) => {
    return state.bookings;
  });
  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate,
  });
  const { toast } = useToast();
  const unavaiableDates = generateDisabledDates(blockedPeriods);
  useEffect(() => {
    const selecetedRange = generateDateRange(range);

    const isDsabledDateIncluded = selecetedRange.some((date) => {
      if (unavaiableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: "Some days are booked,Please try some other dates",
        });
        return true;
      }
      return false;
    });

    useProperty.setState({ range });
  }, [range]);
  return (
    <Calendar
      mode="range"
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className="mb-4"
      disabled={blockedPeriods}
    />
  );
};

export default BookingCalender;

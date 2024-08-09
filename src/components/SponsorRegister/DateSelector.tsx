import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Dropdown from "./Dropdown";
import { useFormContext } from "react-hook-form";

function DateSelector() {
  const { setValue, getValues } = useFormContext();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  // 3개월 후 날짜 계산
  const maxDate = new Date(currentDate);
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxYear = maxDate.getFullYear();
  const maxMonth = maxDate.getMonth() + 1;
  const maxDay = maxDate.getDate();

  //연도설정
  const years = Array.from({ length: maxYear - currentYear + 1 }, (_, i) => ({
    id: currentYear + i,
    label: `${currentYear + i}년`,
  }));

  //동적으로 월 생성
  const generateMonths = (year: number) => {
    let startMonth = 1;
    let endMonth = 12;
    if (year === currentYear) {
      startMonth = currentMonth;
    }
    if (year === maxYear) {
      endMonth = maxMonth;
    }
    return Array.from({ length: endMonth - startMonth + 1 }, (_, i) => ({
      id: startMonth + i,
      label: `${startMonth + i}월`,
    }));
  };

  // 동적으로 날짜 생성
  const generateDays = (year: number, month: number) => {
    let startDay = 1;
    const daysInMonth = new Date(year, month, 0).getDate();
    if (year === currentYear && month === currentMonth) {
      startDay = currentDay;
    }
    if (year === maxYear && month === maxMonth) {
      return Array.from({ length: maxDay - startDay + 1 }, (_, i) => ({
        id: startDay + i,
        label: `${startDay + i}일`,
      }));
    }
    return Array.from({ length: daysInMonth - startDay + 1 }, (_, i) => ({
      id: startDay + i,
      label: `${startDay + i}일`,
    }));
  };

  //초기 현재날짜 이후 월/일 동적 생성
  const [months, setMonths] = useState(generateMonths(currentYear));
  const [days, setDays] = useState(generateDays(currentYear, currentMonth));

  const [selectedYear, setSelectedYear] = useState<number>(currentYear);
  const [selectedMonth, setSelectedMonth] =
    React.useState<number>(currentMonth);
  const [selectedDay, setSelectedDay] = useState<number>(currentDay);

  useEffect(() => {
    setMonths(generateMonths(selectedYear));
    setSelectedMonth(
      currentMonth > selectedMonth ? currentMonth : selectedMonth
    );
  }, [selectedYear]);

  useEffect(() => {
    setDays(generateDays(selectedYear, selectedMonth));
    setSelectedDay(currentDay > selectedDay ? currentDay : selectedDay);
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    const selectedDate = `${selectedYear}-${String(selectedMonth).padStart(
      2,
      "0"
    )}-${String(selectedDay).padStart(2, "0")}`;

    setValue("endDate", selectedDate);
    console.log(getValues("endDate"));
  }, [selectedYear, selectedMonth, selectedDay, setValue]);

  return (
    <DateContainer>
      <Dropdown
        options={years}
        value={selectedYear}
        onChange={(e) => setSelectedYear(Number(e.target.value))}
      />
      <Dropdown
        options={months}
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(Number(e.target.value))}
      />
      <Dropdown
        options={days}
        value={selectedDay}
        onChange={(e) => setSelectedDay(Number(e.target.value))}
      />
    </DateContainer>
  );
}

export default DateSelector;
const DateContainer = styled.div`
  ${tw`flex space-x-4`}
`;

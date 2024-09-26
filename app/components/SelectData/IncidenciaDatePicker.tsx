import { RangeCalendar, DatePicker } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

interface IncidenciaDatePickerProps {
  tipoDeIncidencia: number | undefined;
}

const IncidenciaDatePicker: React.FC<IncidenciaDatePickerProps> = ({ tipoDeIncidencia }) => {
  return (
    <>
      {
        tipoDeIncidencia !== undefined ? (
          tipoDeIncidencia === 1 ? (
            <RangeCalendar aria-label="Date (Min Date Value)" minValue={today(getLocalTimeZone())} />
          ) : (
            <DatePicker label="Selecciona fecha" className="max-w-[284px]" />
          )
        ) : null
      }
    </>
  );
};

export default IncidenciaDatePicker;

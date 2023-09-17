import { DatePicker } from "../../Ui/DatePicker";
interface DatePickerProps {
  value: Date | null;
  setValue: (date: Date) => void;
}
function TodoDatePicker({ value, setValue }: DatePickerProps) {
  return <DatePicker value={value} onChange={setValue} />;
}

export default TodoDatePicker;

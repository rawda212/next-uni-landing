

type TimeUnitProps = {
  value: number | string;
  label: string;
};

const TimeUnit = ({ value, label }: TimeUnitProps) => (
  <div className="text-center">
    <div className="text-5xl font-bold text-gray-800 tabular-nums">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-sm text-gray-500 mt-1">{label}</div>
  </div>
);
export default TimeUnit;
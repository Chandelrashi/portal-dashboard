type Props = { title: string; value: string | number; hint?: string };
export default function Card({ title, value, hint }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {hint && <div className="text-xs text-gray-400 mt-2">{hint}</div>}
    </div>
  );
}

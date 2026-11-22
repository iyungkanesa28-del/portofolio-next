export default function SkillCard({ nama, level }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white dark:bg-gray-800  p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-800">{nama}</h3>
      <p className="mt-2 text-sm text-gray-500">Level: {level}</p>
    </div>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <article className="glass-card group cursor-pointer p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-xl">
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#0A2F6B] to-[#0c3478] text-2xl text-white shadow-lg shadow-[#0A2F6B]/25 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">{description}</p>
    </article>
  );
}
const stats = [
    { name: "Made", stat: "71,897" },
    { name: "To do Made", stat: "58.16%" },
]

export const StatsData = () => {
    return (
        <div className={"w-9/12"}>
            <h3 className="text-lg font-medium leading-6 text-gray-900">Expenses</h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {stats.map((item) => (
                    <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                        <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                        <dd className="mt-1 text-3xl tracking-tight text-gray-900">{item.stat}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}

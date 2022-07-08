/* This example requires Tailwind CSS v2.0+ */

type Props = {
    listValue?: string
}

export const ListContainer = (props: Props) => {
    const items = [
        { id: 1, listItem: props.listValue },
        { id: 2, listItem: props.listValue },
        // More items...
    ]
    return (
        <ul role="list" className="space-y-3">
            {items.map((item) => (
                <li key={item.id} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
                    <p>{item.id}</p>
                    <p>{item.listItem}</p>
                </li>
            ))}
        </ul>
    )
}

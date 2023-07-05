import Day from "./day";

export default function Week() {
    const week = [
        {
            weekDay: 1,
            activities: [
                {
                    id: 1,
                    name: "Fazer algo",
                    label: 0,
                    from: new Date('0001-01-01T08:00:00'),
                    to: new Date('0001-01-01T09:15:00'),
                    checked: true,
                },
                {
                    id: 2,
                    name: "Fazer outra coisa",
                    label: 1,
                    from: new Date('0001-01-01T09:30:00'),
                    to: new Date('0001-01-01T10:00:00'),
                    checked: false,
                },
            ],
        },
        {
            weekDay: 2,
            activities: [
                {
                    id: 1,
                    name: "Fazer algo",
                    label: 3,
                    from: new Date('0001-01-01T08:00:00'),
                    to: new Date('0001-01-01T09:15:00'),
                    checked: true,
                },
                {
                    id: 2,
                    name: "Fazer outra coisa",
                    label: 4,
                    from: new Date('0001-01-01T09:30:00'),
                    to: new Date('0001-01-01T10:00:00'),
                    checked: true,
                },
            ],
        },
        {
            weekDay: 3,
            activities: [
                {
                    id: 1,
                    name: "Fazer algo",
                    label: 0,
                    from: new Date('0001-01-01T08:00:00'),
                    to: new Date('0001-01-01T09:15:00'),
                    checked: true,
                },
                {
                    id: 2,
                    name: "Fazer outra coisa",
                    label: 1,
                    from: new Date('0001-01-01T09:30:00'),
                    to: new Date('0001-01-01T10:00:00'),
                    checked: true,
                },
            ],
        },
        {
            weekDay: 4,
            activities: [
                {
                    id: 1,
                    name: "Fazer algo",
                    label: 2,
                    from: new Date('0001-01-01T08:00:00'),
                    to: new Date('0001-01-01T09:15:00'),
                    checked: true,
                },
                {
                    id: 2,
                    name: "Fazer outra coisa",
                    label: 3,
                    from: new Date('0001-01-01T09:30:00'),
                    to: new Date('0001-01-01T10:00:00'),
                    checked: true,
                },
            ],
        },
        {
            weekDay: 5,
            activities: [
                {
                    id: 1,
                    name: "Fazer algo",
                    label: 4,
                    from: new Date('0001-01-01T08:00:00'),
                    to: new Date('0001-01-01T09:15:00'),
                    checked: true,
                },
                {
                    id: 2,
                    name: "Fazer outra coisa",
                    label: 0,
                    from: new Date('0001-01-01T09:30:00'),
                    to: new Date('0001-01-01T10:00:00'),
                    checked: true,
                },
            ],
        },
        {
            weekDay: 6,
            activities: [
                {
                    id: 1,
                    name: "Fazer algo",
                    label: 1,
                    from: new Date('0001-01-01T08:00:00'),
                    to: new Date('0001-01-01T09:15:00'),
                    checked: true,
                },
                {
                    id: 2,
                    name: "Fazer outra coisa",
                    label: 2,
                    from: new Date('0001-01-01T09:30:00'),
                    to: new Date('0001-01-01T10:00:00'),
                    checked: true,
                },
            ],
        },
        {
            weekDay: 0,
            activities: [
                {
                    id: 1,
                    name: "Fazer algo",
                    label: 3,
                    from: new Date('0001-01-01T08:00:00'),
                    to: new Date('0001-01-01T09:15:00'),
                    checked: true,
                },
                {
                    id: 2,
                    name: "Fazer outra coisa",
                    label: 4,
                    from: new Date('0001-01-01T09:30:00'),
                    to: new Date('0001-01-01T10:00:00'),
                    checked: true,
                },
            ],
        },
    ];

    return (
        <div className="grid grid-cols-6 gap-4">
            {week.map(day => <div key={day.weekDay} className={ [6, 0].includes(day.weekDay) ? "" : "row-span-2" }>
                <Day day={day} ></Day>
                </div>)}
        </div>
    )
}
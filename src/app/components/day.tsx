import datetime from "../utils/datetime";
import Activity from "./activity";

export default function Day({ day }: { day: { weekDay: number, activities: { id: number, name: string, label: number, from: Date, to: Date, checked: boolean }[] } }) {
    return <div className="p-6 pt-3 flex flex-col day gap-1">
        <p className="font-bold text-center">{datetime.getWeekDayName(day.weekDay).toLocaleUpperCase()}</p>
        <hr className="mb-2"></hr>
        <div className="grid gap-2">
            { day.activities.map(activity => <Activity key={activity.id} activity={activity}></Activity>) }
        </div>
    </div>
}
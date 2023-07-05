'use client';
import { ChangeEvent, useState } from "react";
import datetime from "../utils/datetime";

const labelColors = [
    'bg-gray-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-blue-500',
    'bg-orange-500',
    'bg-green-500',
];


export default function Activity ({ activity }: { activity: { id: number, name: string, label: number, from: Date, to: Date, checked: boolean } }) {
    const [isChecked, setIsChecked] = useState(activity.checked);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };
  
    return (
        <div className={`flex gap-3 ${labelColors[activity.label]} bg-opacity-30 rounded p-2 items-center`}>
            <div className="flex flex-col justify-between h-full">
                <span className="text-xs">{datetime.getTimeString(activity.from)}</span>
                <span className="text-xs">{datetime.getTimeString(activity.to)}</span>
            </div>
            <span className="flex-grow">{activity.name}</span>
            <div className="flex">
                <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}></input>
            </div>
        </div>
    );
}
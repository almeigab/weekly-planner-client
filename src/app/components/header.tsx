'use client';
import { ChangeEvent, useState } from "react";
import datetime from "../utils/datetime";
import Input from "./shared/input";

export default function Header() {

    const [weekStart, updateWeekStart] = useState(datetime.getWeekStart(new Date()));
    const [weekEnd, updateWeekEnd] = useState(datetime.getWeekEnd(new Date()));

    function handleChangeWeekStart(event: ChangeEvent<HTMLInputElement>) {
        updateWeekStart(event.target.value);
    }
    
    function handleChangeWeekEnd(event: ChangeEvent<HTMLInputElement>) {
        updateWeekEnd(event.target.value);
    }

    return (
        <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-8">
            <button className="btn btn-blue">Histórico</button>
            <div className="flex justify-center items-center">
                <div className="w-2/6">
                    <Input id='week-start' type="text" value={weekStart} onChange={handleChangeWeekStart}></Input>
                </div>
                &nbsp;a&nbsp;
                <div className="w-2/6">
                    <Input id='week-end' type="text" value={weekEnd} onChange={handleChangeWeekEnd}></Input>
                </div>
            </div>
            <button className="btn btn-blue">Completar semana</button>
        </div>
    );
}
import { ChangeEvent, MouseEvent, useState } from "react";
import datetime from "../utils/datetime";
import Input from "./shared/input";
import Select from "./shared/select";

const HOURS = (() => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
        hours.push(i);
    }
    return hours;
})();
const MINUTES = (() => {
    const minutes = [];
    for (let i = 0; i < 60; i+=15) {
        minutes.push(i);
    }
    return minutes;
})();
const WEEKDAYS = (() => {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
        weekDays.push(i);
    }
    return weekDays;
})();

const LABELS = [
    { value: 0 }, { value: 1 }
]

export default function NewActivityForm({ onConfirm }: { onConfirm: () => void }) {

    const [name, updateName] = useState("");
    function handleUpdateName(event: ChangeEvent<HTMLInputElement>) {
        updateName(event.target.value);
    }

    const [weekDay, updateWeekDay] = useState(new Date().getDay());
    function handleUpdateWeekDay(event: ChangeEvent<HTMLSelectElement>) {
        updateWeekDay(parseInt(event.target.value));
    }
    
    const [label, updateLabel] = useState(LABELS[0].value);
    function handleUpdateLabel(event: ChangeEvent<HTMLSelectElement>) {
        updateLabel(parseInt(event.target.value));
    }

    function handleSubmit(event?: MouseEvent<HTMLButtonElement>) {
        event?.preventDefault();
        onConfirm();
    }

    return (
        <form className="w-full">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <Input id="name" type="text" label="Nome" placeholder="Jogar videogame" value={name} onChange={handleUpdateName}></Input>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Select id="weekday" label="Dia da semana" options={WEEKDAYS.map((day) => ({
                        value: day,
                        label: datetime.getWeekDayName(day),
                    }))} value={weekDay} onChange={handleUpdateWeekDay}></Select>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Select id="label" label="Categoria" options={LABELS} value={label} onChange={handleUpdateLabel}></Select>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Input id="from" type="text" label="Início" placeholder="08:00"></Input>

                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Input id="to" type="text" label="Fim" placeholder="10:45"></Input>
                </div>
            </div>
            <div className="flex justify-end">
                <button type="submit" className="btn btn-blue" onClick={handleSubmit}>Salvar</button>
            </div>
            </form>
    )
}
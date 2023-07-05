import { InputHTMLAttributes, OptionHTMLAttributes, SelectHTMLAttributes } from "react"

export default function Select({ id, value, onChange, options, label, hint, validate, errorMessage } : props) {
    return (
        <>
        { label != null && <label htmlFor={`select-${id}`}>{label}</label> }
        <div className="relative">
            <select id={`select-${id}`} value={value} onChange={onChange}>
                { options != null && options.map(({ value, label}, index) => (
                    <option key={index} value={value}>{label != null ? label : value}</option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        {hint != null && <p className="text-gray-600 text-xs italic mt-3">{hint}</p>}
        {errorMessage != null && validate !=null && !validate(value) && (
            <p className="text-red-500 text-xs italic">{errorMessage}</p>
        )}
        </>
    )
}

type props = {
    id: string,
    value?: SelectHTMLAttributes<HTMLSelectElement>['value'],
    onChange?: SelectHTMLAttributes<HTMLSelectElement>['onChange'],
    options?: option[],
    label?: string,
    hint?: string,
    validate?: (value: InputHTMLAttributes<HTMLInputElement>['value']) => boolean,
    errorMessage?: string
}

type option = {
    value: OptionHTMLAttributes<HTMLOptionElement>['value'],
    label?: string
}
import { HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"

export default function Input({ id, type, value, onChange, label, placeholder, hint, validate, errorMessage }: props) {
    return (
        <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
            {label != null && <label htmlFor={`input-${id}`}>{label}</label>}
            <input id={`input-${id}`} type={type} placeholder={placeholder} value={value} onChange={onChange}>
            </input>
            {hint != null && <p className="text-gray-600 text-xs italic mt-3">{hint}</p>}
            {errorMessage != null && validate !=null && !validate(value) && (
                <p className="text-red-500 text-xs italic">{errorMessage}</p>
            )}
            </div>
        </div>
    )
}

type props = {
    id: string,
    type: HTMLInputTypeAttribute,
    value?: InputHTMLAttributes<HTMLInputElement>['value'],
    onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'],
    label?: string,
    placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'],
    hint?: string,
    validate?: (value: InputHTMLAttributes<HTMLInputElement>['value']) => boolean,
    errorMessage?: string
}
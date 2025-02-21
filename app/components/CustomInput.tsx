import React from 'react'

interface CustomInputProps {
    htmlFor:string,
    label:string ,
    value:string,
    name:string,
    placeholder:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type:string,
    required:boolean,
    id: string,
}

const CustomInput :React.FC<CustomInputProps> = ({
    htmlFor,
    label,
    id,
    required,
    value,
    onChange,
    name,
    placeholder ,
    type ,
  })=> {
  return (
    <>
       <div>
                <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-900">
                  {label}
                </label>
                <div className="mt-2">
                  <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    required = {required}
                    autoComplete={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-black placeholder:text-gray-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                  />
                </div>
              </div>
    </>
  )
}

export default CustomInput
import React, { FC } from "react";

interface InputProps {
  content?: string;
  description?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;

}

const Input: FC<InputProps> = ({
  content,
  value,
  onChange,

}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">
      <input
        content={content}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light bg-white"
        
      />
      </label>
    </div>
  );
};

export default Input;
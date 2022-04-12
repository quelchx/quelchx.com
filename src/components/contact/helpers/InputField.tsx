interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const InputField = ({
  label,
  name,
  type,
  placeholder,
}: InputProps): JSX.Element => {
  return (
    <>
      <label className="font-medium text-gray-900 dark:text-cyan-50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="block w-full px-4 py-4 mt-2 text-xl text-gray-700 placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-600 focus:ring-opacity-50"
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;

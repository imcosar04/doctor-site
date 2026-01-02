interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={props.id || props.name} className="block text-base font-semibold text-gray-900 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-gray-700 ${className}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      />
    </div>
  )
}


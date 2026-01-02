interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

export default function TextArea({ label, className = '', ...props }: TextAreaProps) {
  return (
    <div>
      <label htmlFor={props.id || props.name} className="block text-base font-semibold text-gray-900 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
        {label}
      </label>
      <textarea
        {...props}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical text-gray-700 ${className}`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      />
    </div>
  )
}


export default function InputField({ 
  type = 'text', 
  placeholder = '', 
  value, 
  onChange, 
  className = '', 
  ...props 
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${className}`}
      {...props}
    />
  );
}
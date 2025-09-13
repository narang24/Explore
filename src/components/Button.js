export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  radius = 'full',
  className = '',
  ...props
}) {
  const radii = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const baseStyles = `font-semibold ${radii[radius] || radii.full} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-500',
    outline: 'border-2 border-current bg-transparent hover:bg-current hover:bg-opacity-10',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300'
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

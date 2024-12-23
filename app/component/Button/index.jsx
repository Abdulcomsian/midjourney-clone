export default function Button({
  children,
  className,
  onClick = () => {},
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
}

export const Button = ({
  active,
  name,
  onClick,
  fullWidth,
}: {
  active: boolean;
  name: string;
  onClick: () => void;
  fullWidth?: boolean;
}) => {
  return (
    <button 
      className={`p-2 rounded-xl ${fullWidth ? 'w-full' : ''}`}
      style={{
        backgroundColor: active ? 'var(--primary-blue)' : 'transparent',
        border: '1px solid',
        borderColor: active ? 'var(--primary-blue)' : 'var(--primary-blue)',
        color: active ? '#F8F8F8' : 'var(--primary-blue)',
        fontFamily: 'var(--font-lato)',
        fontSize: '17.25px',
        fontWeight: '500',
      }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

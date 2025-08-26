export const RadioButton = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="w-5 h-5 rounded-full transition-all duration-200"
      style={{
        backgroundColor: active ? 'var(--primary-blue)' : 'white',
        border: '1px solid',
        borderColor: active ? 'var(--primary-blue)' : 'var(--secondary-white)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    />
  );
};

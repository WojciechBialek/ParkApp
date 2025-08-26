import { RadioButton } from '../../components/RadioButton/RadioButton';

export const PilotPagination = ({
  totalPilots,
  currentPilot,
  onPilotChange,
}: {
  totalPilots: number;
  currentPilot: number;
  onPilotChange: (pilotIndex: number) => void;
}) => {
  return (
    <div className="flex gap-6 items-center justify-center mt-8">
      {Array.from({ length: totalPilots }, (_, index) => (
        <RadioButton
          key={index}
          active={currentPilot === index}
          onClick={() => onPilotChange(index)}
        />
      ))}
    </div>
  );
};

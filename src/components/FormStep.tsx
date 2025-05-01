
interface FormStepProps {
  isVisible: boolean;
  children: React.ReactNode;
}

export const FormStep: React.FC<FormStepProps> = ({ isVisible, children }) => {
  if (!isVisible) return null;
  
  return (
    <div className="animate-fade-in">
      {children}
    </div>
  );
};

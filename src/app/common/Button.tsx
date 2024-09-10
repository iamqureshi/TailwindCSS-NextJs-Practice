interface ButtonProps {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        type={props.type}
        className={`flexCenter gap-3 rounded-full border ${props.variant} ${
          props.full && "w-full"
        }`}
      >
        {props.icon && (
          <img src={props.icon} width={24} height={24} alt={props.title} />
        )}
        <label className="bold-16 whitespace-nowrap cursor-pointer">
          {props.title}
        </label>
      </button>
    </>
  );
};

export default Button;

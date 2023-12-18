import { Slot } from "@radix-ui/react-slot";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = ({ asChild, ...props }: Props) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className="py-2 px-5 bg-cyan-400 text-white rounded"
      {...props}
    />
  );
};

export default Button;

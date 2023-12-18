import { twMerge } from "tailwind-merge";

type Props<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Button = <T extends React.ElementType = "button">(props: Props<T>) => {
  const Component = props.as || "button";

  return (
    <Component
      {...props}
      className={twMerge(
        "py-2 px-5 bg-cyan-400 text-white rounded",
        props.className,
      )}
    />
  );
};

export default Button;

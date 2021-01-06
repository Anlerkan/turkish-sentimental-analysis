import React, {useState} from "react";
import classNames from "classnames";


export interface FormProps<FormValues> {
  onSubmit: (values: FormValues) => void;
  knownErrorKeys: string[] | null;
  values: FormValues;
  children?: React.ReactNode;
  onChange?: (event: React.SyntheticEvent) => void;
  customClassName?: string;
  isSubmitAllowed?: boolean;
}

function Form<FormValues>(props: FormProps<FormValues>) {
  const {
    children,
    onSubmit,
    customClassName,
    isSubmitAllowed = true,
    values
  } = props;
  const [isPristine, setPristine] = useState(true);
  const containerClassName = classNames("form", customClassName);


  return (
    <form
      className={containerClassName}
      onChange={handleFormChange}
      onSubmit={handleSubmit}>

      {children}
    </form>
  );

  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.stopPropagation();
    event.preventDefault();

    if (isSubmitAllowed) {
      onSubmit(values);
    }
  }

  function handleFormChange(event: React.SyntheticEvent) {
    const {onChange} = props;

    if (isPristine) {
      setPristine(false);
    }

    if (onChange) {
      onChange(event);
    }
  }
}

export default Form;

import { Fragment } from "react";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export type FormInputProps = {
  control: Control<any>;
  name: string;
  rules?: Omit<
    RegisterOptions<FieldValues, FieldPath<FieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  label: string;
  type?: string | undefined;
  inputProps?: any;
  className: string;
  options?: Array<{ id: number | string; name: string }>;
};

function FormInput(props: FormInputProps) {
  const {
    control,
    name,
    rules,
    label,
    type,
    inputProps,
    className,
    options = [],
  } = props;
  const { className: inputClass = "" } = inputProps ?? {};

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className={className}>
          {label && type !== "checkbox" ? (
            <label
              className={`gray_light fz15 regular_font ${
                fieldState.error ? "text-danger" : ""
              }`}
            >
              {label}
            </label>
          ) : (
            <Fragment />
          )}
          {type === "select" ? (
            <select
              {...field}
              value={field.value}
              {...inputProps}
              className={`${
                inputClass ? inputClass : ""
              } form-control custom_form_control p-0 m-0 ${
                fieldState.error ? "is-invalid" : ""
              }`}
            >
              <option style={{ display: "none" }} />
              {options?.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          ) : type === "textarea" ? (
            <textarea
              {...field}
              {...inputProps}
              className={`${
                inputClass ? inputClass : ""
              } form-control custom_form_control ${
                fieldState.error ? "is-invalid" : ""
              }`}
            ></textarea>
          ) : type === "checkbox" ? (
            <Fragment>
              <input
                {...field}
                type={type}
                {...inputProps}
                className={`${inputClass ? inputClass : ""} mx-1 mt-3 ${
                  fieldState.error ? "is-invalid" : ""
                }`}
                name={label.replaceAll(" ", "_")}
              />
              <label
                htmlFor={label.replaceAll(" ", "_")}
                className={`gray_light fz15 regular_font ${
                  fieldState.error ? "text-danger" : ""
                }`}
              >
                {label}
              </label>
            </Fragment>
          ) : (
            <input
              {...field}
              type={type}
              {...inputProps}
              className={`${
                inputClass ? inputClass : ""
              } form-control custom_form_control ${
                fieldState.error ? "is-invalid" : ""
              }`}
            />
          )}

          {fieldState.error ? (
            <small className="text-danger">{fieldState.error?.message}</small>
          ) : (
            <Fragment />
          )}
        </div>
      )}
    />
  );
}

export default FormInput;

import React from "react";

interface IProps {
  label: string;
}

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle,
};

const DateInput = ({
  label,
  ...props
}: IProps & React.ComponentProps<"input">) => {
  return (
    <div>
      <label htmlFor={label} style={labelStyle}>
        {label}
      </label>
      <input
        style={inputStyle}
        type="date"
        id={label}
        name={label}
        {...props}
      />
    </div>
  );
};

export default DateInput;

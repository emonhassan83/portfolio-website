import { Controller } from "react-hook-form";

const PortfolioTextArea = ({ type, name, label, placeholder }) => {
  return (
    <div style={{ marginBottom: "7px" }}>
      <p style={{ marginBottom: "5px", fontSize: "14px" }}>{label ? label : null}</p>
      <Controller
        name={name}
        render={({ field }) => (
          <textarea
            type={type}
            id={name}
            placeholder={placeholder}
            {...field}
            className={`textarea textarea-bordered h-28`}
          ></textarea>
        )}
      />
    </div>
  );
};

export default PortfolioTextArea;

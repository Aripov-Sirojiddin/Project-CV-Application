import "./Input.css";

export default function Input({
  label,
  placeholder = label,
  applicantInfo,
  type = "text",
  minLength,
  setApplicantInfo,
}) {
  const handleOnChange = (e) => {
    const newInfo = {
      ...applicantInfo,
      [e.target.name]: e.target.value,
    };
    setApplicantInfo(newInfo);
  };
  if (applicantInfo[label.toLowerCase()] === undefined) {
    applicantInfo[label.toLowerCase()] = "";
  }

  return (
    <input
      id={label.toLowerCase()}
      placeholder={placeholder}
      name={label.toLowerCase()}
      value={applicantInfo[label.toLowerCase()]}
      type={type}
      minLength={minLength}
      onChange={(e) => handleOnChange(e)}
    ></input>
  );
}

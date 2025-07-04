import "react-phone-number-input/style.css";

import Input from "../input/Input.jsx";

export default function EducationInformation({
  applicantInfo,
  setApplicantInfo,
}) {
  return (
    <>
      <h2>What was your most recent education?</h2>
      <Input
        label="schoolName"
        placeholder="School Name"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
        minLength={1}
      />
      <select
        name="degree"
        id="degree"
        placeholder="Degree Level"
        value={applicantInfo.degree !== undefined ? applicantInfo.degree : ""}
        onChange={(e) => {
          const newInfo = {
            ...applicantInfo,
            degree: e.target.value,
          };
          setApplicantInfo(newInfo);
        }}
      >
        <option value="">Select</option>
        <option value="Doctorate">Doctorate</option>
        <option value="Masters">Masters</option>
        <option value="Bachelors">Bachelors</option>
        <option value="Associates">Associates</option>
        <option value="High School Diploma">High School Diploma</option>
      </select>
      <Input
        label="major"
        placeholder="Major type"
        type="text"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <div className="horizontal-container">
        <Input
        label="startDate_Education"
        placeholder="The start date of your education."
        type="date"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      <Input
        label="endDate_Education"
        placeholder="The end date of your education."
        type="date"
        applicantInfo={applicantInfo}
        setApplicantInfo={setApplicantInfo}
      />
      </div>
    </>
  );
}

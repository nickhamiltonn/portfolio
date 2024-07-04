import "../styles/pages.css";

function Resume() {
  return (
    <div className="page">
      <div className="resume">
        <embed
          type="application/pdf"
          src={require("../resources/resume.pdf")}
        />
      </div>
    </div>
  );
}

export default Resume;

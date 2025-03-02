const BUTTON_TEXT = "Download CV";
const CVDownload = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./CV_resume.pdf";
    link.download = "CV_resume.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="group inline-block py-[10px] px-[18px] sm:py-[12.5px] sm:px-[22.5px] md:py-[15px] md:px-[30px] bg-light border-[2px] border-light border-solid shadow-light text-xs sm:text-sm md:text-base font-black  pointer mr-[15px] transition-[0.3s] text-nowrap hover:bg-transparent hover:shadow-none "
      onClick={handleDownload}
    >
      <a className="text-dark group-hover:text-light" href="#hero">
        {BUTTON_TEXT}
      </a>
    </button>
  );
};

export default CVDownload;

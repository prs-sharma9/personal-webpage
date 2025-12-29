const Experience = () => {
  const exp_info = [
    {
      years: "Jun 2011 - Jul 2021",
      company: "Samsung Electronics",
      logo: "images/company_logo/Samsung_Wordmark.jpg",
      highlight: [
        "Developed and maintained six high-performance Android applications.",
        "Orchestrated a multidisciplinary team of six specialized engineers.",
        "Earned the prestigious Samsung India Innovation Award in 2018.",
      ],
      position: "left",
    },
    {
      years: "Aug 2021 - Feb 2023",
      company: "Blue Yonder",
      logo: "images/company_logo/BY.png",
      highlight: [
        "Refactored legacy systems, reducing technical debt by 40 percent.",
        "Enhanced platform performance by 25 percent via bottleneck analysis.",
        "Engineered a robust testing framework for multi-threaded systems.",
      ],
      position: "right",
    },
    {
      years: "Aug 2023 - Nov 2023",
      company: "Mint Solutions",
      logo: "images/company_logo/mint_solutions_logo.jpeg",
      highlight: [
        "Improved site responsiveness by 40 percent using modern web tools.",
        "Decreased UI-related bug reports by 70 percent within two sprints.",
        "Partnered cross-functionally to revamp legacy eCommerce components.",
      ],
      position: "left",
    },
    {
      years: "Jan 2024 - Present",
      company: "Southern Alberta Institute of Technology",
      logo: "images/company_logo/SAIT.jpg",
      highlight: [
        "Delivered 100+ hours of live technical instruction to 120+ students.",
        "Designed curriculum modules achieving a 94 percent satisfaction rate.",
        "Integrated real-world challenges to boost application-based learning.",
      ],
      position: "right",
    },
  ];

  return (
    <section id="experience-section">
      <div className="my-8 bg-primary/50 rounded-xl border border-primary/70 sm:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 justify-center items-center p-10">
            <h2 className="font-semibold text-4xl bg-linear-to-b from-text-secondary/70 to-text-secondary/50 bg-clip-text text-transparent">
              The Story So Far...
            </h2>
            <p className="text-text-primary/70">
              14+ years of global experience in delivering cross functional
              software solutions
            </p>
          </div>

          <div className="">
            {exp_info.map((exp, key) => {
              return (
                <div key={key}>
                  <div className="mb-5">
                    <div className="flex flex-col md:flex-row justify-between md:justify-center items-center">
                      <div
                        className={`flex-1 ${
                          exp.position === "left" ? "md:order-1" : "md:order-2"
                        }`}
                      >
                        <div className="flex flex-col justify-center items-center">
                          <p className="text-xl font-extrabold px-6 text-center">
                            {exp.company}
                          </p>
                          <p className="text-lg sm:text-sm md:text-md">
                            {exp.years}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flex-1.5 ${
                          exp.position === "left" ? "md:order-2" : "md:order-1"
                        }`}
                      >
                        <ul className="border bg-black/60 border-black/70 m-5 p-4 rounded-xl">
                          {exp.highlight.map((item, itemKey) => {
                            return <li key={itemKey}>✔︎ {item}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;

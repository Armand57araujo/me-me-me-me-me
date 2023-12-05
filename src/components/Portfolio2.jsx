import Project from "./Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js
  const projects = [
    {
      name: "Horisean Consultants",
      // description: "HTML/JS/CSS",
      link: "https://armand57araujo.github.io/Horisean-Consultants/",
      repo: "https://github.com/Armand57araujo/Horisean-Consultants",
      image: "hc",
    },
    {
      name: "Space Jam X",
      // description: "NRG Stack",
      link: "https://dee-here.github.io/space-jam-x/",
      repo: "https://github.com/dee-here/space-jam-x",
      image: "sjx",
    },
    {
      name: "Busy Bees",
      // description: "NRG Stack",
      link: "https://armand57araujo.github.io/busy-bees-need-schedules/",
      repo: "https://github.com/Armand57araujo/busy-bees-need-schedules",
      image: "bb",
    },
    {
      name: "Hush Hush Password Generator",
      // description: "NRG Stack",
      link: "https://armand57araujo.github.io/the-hush-hush-secret-password-generator/",
      repo: "https://github.com/Armand57araujo/the-hush-hush-secret-password-generator",
      image: "hh",
    },
    {
      name: "Weather Wizard",
      // description: "NRG Stack",
      link: "https://armand57araujo.github.io/weather-wizard/",
      repo: "https://github.com/Armand57araujo/weather-wizard",
      image: "ww",
    },
    {
      name: "Taskmaster",
      // description: "NRG Stack",
      link: "https://afternoon-fjord-75374-a13fb0ac8a5e.herokuapp.com/",
      repo: "https://github.com/Armand57araujo/taskmaster",
      image: "tm",
    },
    {
      name: "Coming Soon",
      // description: "NRG Stack",
      link: "",
      repo: "",
      image: "cs",
    },
  ];

  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="d-flex flex-wrap">
        {projects.map((project) => (
          <Project project={project} key={"project-" + project.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
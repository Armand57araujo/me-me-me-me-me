import React from 'react';

function Portfolio() {
  // Dummy data for portfolio items (replace with actual data)
  const portfolioItems = [
    {
      title: 'Project 1',
      imageUrl: 'image_url_1',
      deployedLink: 'deployed_link_1',
      githubLink: 'github_link_1',
    },
    // Add more portfolio items as needed
  ];

  return (
    <section>
      <div className="portfolio">
        <h2>Portfolio</h2>
        <div className="portfolio-items">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <h3>{item.title}</h3>
              <img src={item.imageUrl} alt={item.title} />
              <div className="links">
                <a href={item.deployedLink} target="_blank" rel="noopener noreferrer">
                  Deployed App
                </a>
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

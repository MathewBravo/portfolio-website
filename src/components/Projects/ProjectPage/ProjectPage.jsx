import { useState } from "react";

import { MultiSelect } from "@mantine/core";

export default function ProjectPage() {
  return (
    <>
      <div className="project">
        <h1 className="project-yellow">
          Projects <span className="project-gray">[</span>
        </h1>
        <div className="project-display">
          <h4 className="project-red">
            "more_one_github" <span className="project-gray">:</span>{" "}
            <span className="project-green">
              <a href="https://github.com/MathewBravo" target="_blank">
                "https://github.com/MathewBravo"
              </a>
            </span>
            <span className="project-gray">,</span>
            <div>
              <h4 className="project-gray">&#123;</h4>
              <div className="project-interior">
                <h4 className="project-red">
                  project_name <span className="project-gray">:</span>{" "}
                  <span className="project-green">"Capstone Project"</span>
                  <span className="project-gray">,</span>
                </h4>
                <h4 className="project-red">
                  primary_stack <span className="project-gray">: [</span>{" "}
                  <span className="project-green">
                    "React", "Golang", "Auth0"
                  </span>
                  <span className="project-gray"> ],</span>
                </h4>
                <h4 className="project-red">
                  learning <span className="project-gray">: [</span>{" "}
                </h4>
                <div className="project-learning">
                  <span className="project-green">
                    "Collaborated with a team of developers to design and
                    implement a RESTful API for a student project, using Golang
                    and Gin to handle user authentication, data retrieval and
                    manipulation, and error handling."
                  </span>
                  <span className="project-gray">,</span>
                  <br />
                  <br />
                  <span className="project-green">
                    "Utilized SQL and Postgres to create and maintain a scalable
                    database schema, optimizing query performance and ensuring
                    data integrity throughout the development lifecycle."
                  </span>
                  <span className="project-gray">,</span>
                  <br />
                  <br />
                  <span className="project-green">
                    "Design and develop a responsive, client-facing web
                    application using React and Reacthooks, utilizing Bootstrap
                    & Mantine components to ensure a consistent user experience
                    across all devices."
                  </span>
                  <br />
                  <br />
                </div>
                <span className="project-gray"> ],</span>
              </div>
              <h4 className="project-gray">&#125;</h4>
            </div>
            <div>
              <h4 className="project-gray">&#123;</h4>
              <div className="project-interior">
                <h4 className="project-red">
                  project_name <span className="project-gray">:</span>{" "}
                  <span className="project-green">"A* Java Project"</span>
                  <span className="project-gray">,</span>
                </h4>
                <h4 className="project-red">
                  primary_stack <span className="project-gray">: [</span>{" "}
                  <span className="project-green">"Java"</span>
                  <span className="project-gray"> ],</span>
                </h4>
                <h4 className="project-red">
                  learning <span className="project-gray">: [</span>{" "}
                </h4>
                <div className="project-learning">
                  <span className="project-green">
                    "Implemented A* algorithm in Java to compute shortest paths
                    in a graph, demonstrating proficiency in data structures and
                    algorithm design."
                  </span>
                  <span className="project-gray">,</span>
                  <br />
                  <br />
                  <span className="project-green">
                    "Developed heuristic function to optimize A* performance,
                    achieving efficient and accurate pathfinding in a range of
                    applications."
                  </span>
                  <span className="project-gray">,</span>
                  <br />
                  <br />
                </div>
                <span className="project-gray"> ],</span>
              </div>
              <h4 className="project-gray">&#125;</h4>
            </div>
            <div>
              <h4 className="project-gray">&#123;</h4>
              <div className="project-interior">
                <h4 className="project-red">
                  project_name <span className="project-gray">:</span>{" "}
                  <span className="project-green">"CAD/Euro Best Buy"</span>
                  <span className="project-gray">,</span>
                </h4>
                <h4 className="project-red">
                  primary_stack <span className="project-gray">: [</span>{" "}
                  <span className="project-green">
                    "Python", "Matplotlib", "Pandas"
                  </span>
                  <span className="project-gray"> ],</span>
                </h4>
                <h4 className="project-red">
                  learning <span className="project-gray">: [</span>{" "}
                </h4>
                <div className="project-learning">
                  <span className="project-green">
                    "Developed a Python-based data visualization project that
                    retrieved and analyzed historical exchange rate data for
                    CAD/EUR from an API, demonstrating proficiency in data
                    retrieval, preprocessing, and analysis."
                  </span>
                  <span className="project-gray">,</span>
                  <br />
                  <br />
                  <span className="project-green">
                    "Created data visualizations using matplotlib to identify
                    trends and patterns in the data and make informed decisions
                    on the best time to transfer CAD to EUR, highlighting skills
                    in data visualization and dashboard development."
                  </span>
                  <span className="project-gray">,</span>
                  <br />
                  <br />
                </div>
                <span className="project-gray"> ],</span>
              </div>
              <h4 className="project-gray">&#125;</h4>
            </div>
            <div>
              <h4 className="project-gray">&#123;</h4>
              <div className="project-interior">
                <h4 className="project-red">
                  project_name <span className="project-gray">:</span>{" "}
                  <span className="project-green">"Microservices Project"</span>
                  <span className="project-gray">,</span>
                </h4>
                <h4 className="project-red">
                  primary_stack <span className="project-gray">: [</span>{" "}
                  <span className="project-green">"Golang", "Docker" </span>
                  <span className="project-gray"> ],</span>
                </h4>
                <h4 className="project-red">
                  learning <span className="project-gray">: [</span>{" "}
                </h4>
                <div className="project-learning">
                  <span className="project-green">
                    "Built a Golang microservices-based API using RESTful and
                    gRPC protocols, demonstrating proficiency in backend
                    development and distributed systems."
                  </span>
                  <span className="project-gray">,</span>
                  <br />
                  <br />
                  <span className="project-green">
                    "Implemented testing methodologies such as unit testing,
                    integration testing, and end-to-end testing to ensure the
                    functionality and reliability of the API, highlighting
                    skills in testing and quality assurance."
                  </span>
                  <span className="project-gray">,</span>
                  <br />
                  <br />
                  <span className="project-green">
                    "Utilized Docker containerization to deploy the
                    microservices-based API, showcasing proficiency in
                    containerization, orchestration, and deployment."
                  </span>
                  <br />
                  <br />
                </div>
                <span className="project-gray"> ],</span>
              </div>
              <h4 className="project-gray">&#125;</h4>
            </div>
          </h4>
        </div>
        <h1 className="project-gray">] </h1>
      </div>
    </>
  );
}

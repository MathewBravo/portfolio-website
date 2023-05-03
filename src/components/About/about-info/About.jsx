import { HoverCard, Text } from "@mantine/core";

export default function AboutPage() {
  const currentAge =
    new Date().getFullYear() - new Date("1994-09-28").getFullYear() - 1;

  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-bio">
        {" "}
        <p>
          "I am a {currentAge}-year-old software developer with a passion for
          creating, learning, and building. I am currently a student pursuing a
          bachelor's degree in the field. While I previously studied Business
          Administration and grew up surrounded by business environments and
          finance, my passion and interests from a young age have always been
          technology based.
        </p>
        <p>
          This change to Software Development came in 2019, I made a serious
          life change after I lost 155lbs and realized the importance of
          prioritizing what's best for your longevity. It is my goal to pursue a
          career in software development, and turn that career into a
          significant impact in the world of Cloud Computing or Machine
          Learning"{" "}
        </p>
        <p></p>
      </div>
      <div className="about-table">
        <div>
          <h3 className="about-table__title">
            <span className="about-table__title__class">enum&nbsp; </span>{" "}
            Interests &#123;
          </h3>
          <div>
            <p className="about-table__title__content">Weightlifting,</p>
            <p className="about-table__title__content">Cycling,</p>
            <p className="about-table__title__content">Travelling,</p>
            <p className="about-table__title__content">
              Energy_Effecient_Development,
            </p>
            <p className="about-table__title__content">Databases,</p>
            <p className="about-table__title__content">Backend_Systems,</p>
            <p className="about-table__title__content">Game Development,</p>
            <p className="about-table__title__content">Entrepreneurship,</p>
          </div>
          <h3 className="about-table__title">&#125;</h3>{" "}
        </div>
      </div>
    </div>
  );
}

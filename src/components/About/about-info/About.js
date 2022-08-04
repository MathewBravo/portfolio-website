import { HoverCard, Text } from '@mantine/core';

export default function AboutPage() {
  const currentAge =
    new Date().getFullYear() -
    new Date('1994-09-28').getFullYear() -
    1;

  return (
    <div className='about'>
      <div className='about-title'>
        <h1>About Me</h1>
      </div>
      <div className='about-bio'>
        {' '}
        <p>
          I am a {currentAge} year old software developer
          with a passion for creating, learning, and
          building. I am currently a student pursuing a
          bachelors degree in the field. While, I previously
          studied Business Administration and grew up
          surrounded by business environments and finance,
          my passion and interests from a young age have
          always been technology based. In 2019, I made a
          serious life change after I lost a signfificant
          amount of my weight and developed a love for
          physical activity(reflected in many of my
          projects).
        </p>
        <p>
          It is my goal to pursue a career in software
          development, engineering, or a related field. I am
          currently in the process of attaining{' '}
          <strong>
            <HoverCard width={280} shadow='md'>
              <HoverCard.Target>
                <span>
                  <u>European Citizenship</u>&nbsp;
                </span>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size='sm'>
                  Current Status: Awaiting return message
                  from the Portuguese consulate.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </strong>
          through my parents, and currently am able to
          relocate with assistance or work from my home in
          Canada. Willing to attend language classes to
          learn any local languages.
        </p>
        <p></p>
      </div>
      <div className='about-table'>
        <div>
          <h3 className='about-table__title'>
            Hobbies and Interests
          </h3>
          <div className='about-table__interests'>
            <ul>
              <li>Travel</li>
              <li>AI / ML</li>
              <li>Fin Tech</li>
              <li>Fitness Apps</li>
              <li>Agri Tech</li>
            </ul>
            <ul>
              <li>Cycling</li>
              <li>Powerlifting</li>
              <li>Hiking </li>
              <li>Movies</li>
              <li>Gaming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  Card,
  SimpleGrid,
  Group,
  Text,
  Button,
  Badge,
  Image,
  MantineProvider,
} from '@mantine/core';

import { IconBrandGithub } from '@tabler/icons';

import { projects } from '../ProjectInfo/projects';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ choices }) {
  const break1000 = useMediaQuery(
    '(min-width: 1000px)',
    false
  );
  const break700 = useMediaQuery(
    '(min-width: 700px)',
    false
  );
  const navigate = useNavigate();
  const filterChoices = (project) => {
    let check = false;
    choices.map((choice) => {
      if (project.type.includes(choice)) {
        console.log(true);
        check = true;
      }
      return check;
    });
    return check;
  };

  const projectCard = projects.map(
    (project) =>
      filterChoices(project) && (
        <Card shadow='lg' p='lg' radius='md' withBorder>
          <Card.Section>
            <Image
              src={project.image}
              height={200}
              alt={project.title}
            />
          </Card.Section>
          <div className='project-card'>
            <Group position='apart' mt='md' mb='xs'>
              <Text size='xl' weight={700}>
                {project.title}
              </Text>
            </Group>
            <div className='project-card__description'>
              {project.description}
            </div>
            <div className='project-card__badge'>
              <Badge color='dark' variant='outline'>
                {project.badge}
              </Badge>
            </div>
            {project.moreinfo && (
              <div className='project-card__moreinfo'>
                <Button
                  variant='outline'
                  color='dark'
                  size='md'
                  href={project.moreinfolink}
                  component='a'
                >
                  More Info
                </Button>
              </div>
            )}
            {project.githublink && !project.moreinfo && (
              <div className='project-card__githublink'>
                <Button
                  variant='outline'
                  color='dark'
                  size='md'
                  component='a'
                  href={project.githublink}
                  target='_blank'
                >
                  <IconBrandGithub />
                </Button>
              </div>
            )}
          </div>
        </Card>
      )
  );

  return (
    <>
      <MantineProvider
        theme={{
          fontFamily: 'Courier New, Courier, monospace',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
        }}
      >
        <div className='project-page'>
          <SimpleGrid cols={break1000 ? 3 : break700 ? 2 : 1} spacing='lg'>
            {projectCard}
          </SimpleGrid>
        </div>
      </MantineProvider>
    </>
  );
}

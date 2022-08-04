import { useState } from 'react';

import {
  Modal,
  Box,
  Image,
  SimpleGrid,
} from '@mantine/core';
import {
  IconBrandGoogleDrive,
  IconBrandLinkedin,
  IconGlobe,
} from '@tabler/icons';
import { useMediaQuery } from '@mantine/hooks';

import map from './allplacesmap.png';

export default function HomeInfo() {
  const [opened, setOpened] = useState(false);
  const media450 = useMediaQuery('(min-width: 900px)');
  return (
    <div className='home'>
      <Modal
        size='xl'
        opened={opened}
        sx={{}}
        overlayColor='gray'
        onClose={() => setOpened(false)}
      >
        <Box mx='auto'>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            className='home-modal'
          >
            <SimpleGrid cols={media450 ? 3 : 1}>
              <div>
                <h4>Actively Seeking Work In:</h4>
                <ul>
                  <li>Switzerland</li>
                  <li>The Netherlands </li>
                  <li>Belgium</li>
                  <li>Germany</li>
                  <li>The United Kingdom</li>
                  <li>British Colombia</li>
                  <li>Ontario</li>
                  <li>California</li>
                  <li>New York</li>
                </ul>
              </div>
              <div>
                <h4>Will Consider Offers From:</h4>
                <ul>
                  <li>France</li>
                  <li>Austria</li>
                  <li>New Zealand</li>
                  <li>Denmark</li>
                  <li>Sweden</li>
                  <li>Norway</li>
                  <li>South Korea</li>
                  <li>Japan</li>
                  <li>Washington</li>
                  <li>Massachusetts</li>
                  <li>Rhode Island</li>
                  <li>Oregan</li>
                  <li>Quebec</li>
                </ul>
              </div>
              <div>
                <h4>
                  Will Consider Exceptional Offers From:
                </h4>
                <li>Spain</li>
                <li>Italy</li>
                <li>Slovenia</li>
                <li>Alberta</li>
                <li>Minnesota</li>
                <li>Illinois</li>
                <li>Virginia</li>
                <li>Maryland</li>
                <li>New Jersey</li>
                <li>Connecticut</li>
                <li>Vermont</li>
                <li>New Hampshire</li>
                <li>Maine</li>
                <li>Colorado</li>
                <li>New Mexico</li>
                <li>China</li>
              </div>
            </SimpleGrid>
          </div>
        </Box>
      </Modal>
      <div className='home-info'>
        <p className='home-info__paragraph'>
          To learn more about me, the things I've done or to
          contact me feel free to click any of the above
          buttons. To get a google doc link to my resume or
          to visit my LinkedIn click either button below.
          Lastly click the bottom to View a list of places
          I'd be willing to work.
        </p>
      </div>
      <div className='home-buttons'>
        <div className='home-buttons__resume'>
          <a
            href='https://docs.google.com/document/d/1nzgJjwF19D4rfvZvoam4GbjlTPNlHvuXNqwDWdI-wzc/edit?usp=sharing'
            target={'_blank'}
            rel='noopener noreferrer'
          >
            <IconBrandGoogleDrive />
            RESUME
          </a>
        </div>
        <div className='home-buttons__linkedin'>
          <a
            href='https://www.linkedin.com/in/mathew-bravo-9b55a61a4'
            target={'_blank'}
            rel='noopener noreferrer'
          >
            <IconBrandLinkedin />
            LINKEDIN
          </a>
        </div>
      </div>
      <div className='home-map'>
        <p
          className='home-map__button'
          onClick={() => setOpened(true)}
        >
          <IconGlobe />
          Where I'll Work
        </p>
      </div>
    </div>
  );
}

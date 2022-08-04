import { useNavigate, useLocation } from 'react-router-dom';

import {
  Group,
  Avatar,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigateTo = (event) => {
    switch (event.target.innerText) {
      case 'About':
        navigate('/about');
        break;
      case 'Projects':
        navigate('/projects');
        break;
      case 'Contact':
        navigate('/contact');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div>
      <Group className='navbar-main'>
        <Group className='navbar-main__logo'>
          <UnstyledButton
            component='a'
            href='https://github.com/MathewBravo'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Avatar size={50}>
              <IconBrandGithub />
            </Avatar>
          </UnstyledButton>
          <div onClick={navigateTo}>
            <Text>Mathew Bravo</Text>
            <Text size='xs' color='dimmed'>
              mathewbravo@gmail.com
            </Text>
          </div>
        </Group>
        <Group
          className='navbar-main__navigators'
          sx={{ display: 'flex' }}
        >
          <div class='row'>
            <button onClick={navigateTo}>
              <span class='button_hole'>
                <span class='button_key button_key--wide'>
                  {location.pathname === '/about' ? (
                    <span class='button_text'>Home</span>
                  ) : (
                    <span class='button_text'>About</span>
                  )}
                </span>
              </span>
            </button>
            <button>
              <span
                onClick={navigateTo}
                class='button_hole'
              >
                <span class='button_key button_key--wide'>
                  {location.pathname === '/projects' ? (
                    <span class='button_text'>Home</span>
                  ) : (
                    <span class='button_text'>
                      Projects
                    </span>
                  )}
                </span>
              </span>
            </button>
            <button>
              <span
                onClick={navigateTo}
                class='button_hole'
              >
                <span class='button_key button_key--wide'>
                  {location.pathname === '/contact' ? (
                    <span class='button_text'>Home</span>
                  ) : (
                    <span class='button_text'>Contact</span>
                  )}
                </span>
              </span>
            </button>
          </div>
        </Group>
      </Group>
    </div>
  );
}

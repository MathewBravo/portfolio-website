import {
  CopyButton,
  ActionIcon,
  Tooltip,
} from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons';

export default function ContactPage() {
  return (
    <>
      <div className='contact'>
        <h1>Contact Info</h1>
        <h3 className='contact-email'>
          Email{' '}
          <CopyButton
            value='https://mantine.dev'
            timeout={2000}
          >
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? 'Copied' : 'Copy'}
                withArrow
                position='right'
              >
                <ActionIcon
                  color={copied ? 'teal' : 'dark'}
                  onClick={copy}
                >
                  {copied ? (
                    <IconCheck size={16} />
                  ) : (
                    <IconCopy size={16} />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </h3>
        <p>mathewbravo94@gmail.com</p>
        <h3>LinkedIn</h3>
        <p>
          <a
            href='https://www.linkedin.com/in/mathew-bravo-9b55a61a4'
            target='_blank'
            rel='noreferrer'
          >
            Mathew Bravo
          </a>
        </p>
        <h3>GitHub</h3>
        <p>
          <a
            href='https://github.com/MathewBravo'
            target='_blank'
            rel='noreferrer'
          >
            Mathew Bravo
          </a>
        </p>
        <h3>Phone</h3>
        <p>(647) - 771 - 6658</p>
      </div>
    </>
  );
}

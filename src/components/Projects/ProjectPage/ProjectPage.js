import { useState } from 'react';

import { MultiSelect } from '@mantine/core';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function ProjectPage() {
  const choices = [
    'React',
    'Angular',
    'C#',
    'Python',
    'Documentation',
    'Blog',
    'TypeScript',
    'Javascript',
    'NodeJS',
    'MySQL',
  ];
  const [selected, setSelected] = useState(choices);

  function handleChange(val) {
    if (val.length === 0) {
      setSelected(choices);
    } else {
      setSelected(val);
    }
    return;
  }

  return (
    <>
      <div className='project'>
        <div className='project-choices'>
          <h4 className='project-choices__title'>
            Languages:{' '}
          </h4>
          <MultiSelect
            data={choices}
            onChange={(event) => {
              handleChange(event);
            }}
            placeholder='Includes'
            searchable
            clearable
            nothingFound='Nothing found'
          />
        </div>
        <div>
          {selected.length > 0 && (
            <ProjectCard choices={selected} />
          )}
        </div>
      </div>
    </>
  );
}

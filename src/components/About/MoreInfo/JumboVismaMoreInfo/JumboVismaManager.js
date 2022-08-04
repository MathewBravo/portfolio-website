import { Badge, Image, Title } from '@mantine/core';

import riderStructure from './RiderDatabaseTableStructure.PNG';

export default function JumboVismaManager() {
  return (
    <>
      <div className='title'>TJV Rider Manager</div>

      <div className='body'>
        <div className='body__intro'>
          <Badge size='xl' color='dark' variant='outline'>
            Work In Progress
          </Badge>
          <h1>Why This Project?</h1>
          <p>
            This project was started during the later stages
            of my previous project,
            <em> Rider Finder WebApp</em>, which was an
            Angular, .Net and C# endevour for learning full
            stack application development.
          </p>
          <p>
            I wanted to test my ability to create a similar
            project with complete backend, server and
            frontend using the opposite stack React, Node.js
            and MySQL. Something that while I had used in
            passing during school, and personal learning
            projects, I had never created a start to finish
            application with no guidance.
          </p>
          <p>
            In 2019 I developed an intense passion for
            cycling and watching professional cycling events
            and wanted to use that passion as the basis of a
            personal project to help with my productivity.
          </p>
          <p>
            This year with the 2022 Tour de france being in
            my opinion the best TDF that has occured ever. I
            wanted to pay homage to the team that made it
            the spectacle it was. That was why I chose Team
            Jumbo Visma as my inspiration for{' '}
            <em>staff management system</em>.
          </p>
          <div className>
            <h2>What This Project Is and Is Not.</h2>
            <p>
              This project was built strictly for learning,
              and was not build with scalability or
              efficiency in mind. I wanted to explore
              building SQL tables, and extracting data using
              JOINS and SQL queries via Node.js.
            </p>
            <p>
              Due to this some queries, useEffects and loops
              were made with the mentallity of getting the
              job done knowing that the project wasn't meant
              to be infinitely scalable.
            </p>
          </div>
          <hr></hr>
          <div>
            <h2>Planning & Initial Execution.</h2>
            <p>
              I ran into two major problems during planning
              and the initial stages of creating the
              project. The first was the need to create a
              project based on a stack I was unfamiliar with
              and did not have the experience to pre-plan
              implementation of certain features. The second
              large issue was that I had no knowledge about
              how{' '}
              <a
                className='TJV-links'
                href='https://en.wikipedia.org/wiki/Directeur_sportif'
                target='_blank'
                rel='noreferrer'
              >
                Sports Directors
              </a>{' '}
              operated, the information they required to do
              their job or even the very basics of what
              their job entailed.
            </p>
            <p>
              The first problem had to be addressed during
              the process of creating the application and is
              an issue still today while completing the
              project that I have to be aware of. However,
              there were a few things I was able to do to
              alieviate the additional time having to learn
              while I build caused. Those things included;
              <ul>
                <li>Using Prebuild Styling Frameworks</li>
                <ul>
                  <li>Mantine</li>
                  <li>Tailwind</li>
                </ul>
                <li>Using Prebuild Components</li>
                <ul>
                  <li>Calendars</li>
                  <li>Planners</li>
                  <li>Graphs</li>
                  <li>Ect.</li>
                </ul>
              </ul>
            </p>
            <p>
              The second issue was addressed through scope
              planning. Originally prior to research I had
              planned a ton of features that I ended up
              leaving out of the project moving past the
              planning stage. Features like: Planning Rider
              Workouts, Managing Rider Contracts. While it
              would have been nice to include these
              features, even via faking their data (since
              many API's I wanted to use during this project
              are costly or inaccessible to students), they
              are not just outside of the time scope I had
              to complete this project but outside of the
              scope of the Sports Director job itself.
            </p>
            <p>
              The director of larger teams, like Team Jumbo
              Visma (TJV), revolve largely around planning.
              Knowing who's at what races, when the races
              occur, and the overall condition of the
              riders. Coaches and Trainers will deal with
              the specifics of the riders conditions. Chefs
              and nutritionists deal with keeping the riders
              healthy. Owners and financiers deal with
              contract negotiations. Riders deal with riding
              the actual races.
            </p>
            <p>
              Beyond this I didn't want to spend too much
              time on authorization and users. I made that a
              large part of my Angular, C# project, and I
              have plans for future projects that focus on
              this.
            </p>
          </div>
          <hr></hr>
          <div>
            <h2>Implementation.</h2>
            <h3>Building the Database</h3>
            <p>
              The first thing I did was to create a database
              for the project. This was a simple SQL
              database that I created using MySQL Workbench.
              Unlike my previous project I created the
              database manually, and not programatically.
              This was to refresh my knowledge of SQL
              commands.
            </p>
            <p>
              As of this moment the database contains 11
              tables:
              <ul>
                <li>
                  <strong>Riders</strong>
                </li>
                <li>
                  <strong>Rider Weights</strong>
                  <ul>
                    <li>
                      A faked weigh-in database that in the
                      real world I would use (inaccessible
                      to students) apis that give access
                      directly to riders electric scale
                      readings{' '}
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Locations</strong>
                </li>
                <li>
                  <strong>Media-Events</strong>
                  <ul>
                    <li>
                      Database of theorized and made-up
                      media events
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Training Phases for Riders
                  </strong>
                </li>
                <li>
                  <strong>Races on Calendar</strong>
                </li>
                <li>
                  <strong>Riders Selected for Races</strong>
                </li>
                <li>
                  <strong>Staff</strong>
                </li>
                <li>
                  <strong>Staff Positions</strong>
                </li>
                <li>
                  <strong>Staff-Assignments</strong>
                </li>
                <li>
                  <strong>Notifications</strong>
                  <ul>
                    <li>
                      To simulate if the application had
                      more than just Sports Directors as
                      users.
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <p>
              The tables themselves hold various information
              but the creation of a table can be seen below
              in example.
              <div className='tjv-image'>
                <Image
                  src={riderStructure}
                  width={200}
                  alt='Database Structure'
                  sx={{
                    paddingLeft: '3rem',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                  }}
                />
              </div>
            </p>
          </div>
          <div>
            <h3>Building the Server</h3>
          </div>
        </div>
      </div>
    </>
  );
}

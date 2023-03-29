import {
  Grid,
  Title,
  Divider,
  List,
  Text,
  NavLink,
  Image,
  Center,
} from "@mantine/core";

import {
  IconPhoto,
  IconTrendingUp,
  IconRefresh,
  IconBarbell,
  IconChartInfographic,
  IconInfoSquare,
} from "@tabler/icons";

export default function FilmMaking() {
  return (
    <div className="container">
      <Grid>
        <Grid.Col span={8}>
          <Title order={1}>Film Making</Title>
          <Divider my="sm" />
          <Divider my="sm" variant="dashed" />
          <Divider my="sm" variant="dotted" />
          <Title order={2}>What is film making? </Title>
          <Divider my="sm" variant="dashed" />
          <Text size={"sm"}>
            Film making is a term used to describe the creation of a motion
            picture. Which is a visual art representation that communicates
            ideas, simulates experiences or tells stores through the use of
            moving pictures. The Story of the Kelly Gang which was shown in
            Melbourne Australia in 1906 is widely considered the first ever
            motion picture. Below I have embedded a full version available for
            free on Youtube.
          </Text>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1A6niZmzvoc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <br></br>
          <br></br>
          <Title order={3} id="evolution">
            How are films made?
          </Title>
          <Divider my="sm" />
          <Text size={"sm"}>
            Production of film fits itself into many distinct phases. Many
            integrate the pre-production and development phases but for the
            purposes of this post we will separate them as to not clutter and
            confuse our explanations.
          </Text>
          <br></br>
          <List>
            <List.Item>Development</List.Item>
            <List.Item>Pre-production</List.Item>
            <List.Item>Production</List.Item>
            <List.Item>Post-production</List.Item>
            <List.Item>Distribution</List.Item>
          </List>
          <br></br>
          <Text size={"sm"}>
            For the purposes of discussing purely about film making we will
            exclude, Distribution, since you can certainly make a film that no
            one sees.
          </Text>
          <br></br>
          <Title order={3} id="still">
            Development
          </Title>
          <Divider my="sm" />
          <Text size={"sm"}>
            During the development phase of film making the general ideas for a
            film are outlined. A script can be written but does not have to be
            finalized during development. Ideation is also best assisted by the
            uses of story-boarding. This is the process of creating visual
            mockups that are accompanied by things such as scene descriptions,
            notes, setting, dialog, required prop elements. Depending on the
            scope of the project the storyboard can be as bare bones or details
            as needed.
          </Text>
          <div style={{ width: 440, marginLeft: "auto", marginRight: "auto" }}>
            <Image
              radius="md"
              src="https://images.unsplash.com/photo-1569766670290-f5581d3bb53f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1503&q=80"
              alt="Raster vs Vector"
            />
          </div>
          <br></br>
          <Text size={"sm"}>
            {" "}
            Development is also a prime time to generally outline what settings
            scenes will have, determine interior and exterior scenes. Decide on
            what props are key to each scene and what costumes are required to
            convey the message of your film. For example if you're doing a
            1950's film you may need many vintage props and outfits, you
            establish those things here, but don't have to set anything in stone
            during development.
          </Text>
          <br></br>
          <Text size={"sm"}>
            These details about what is required for the shoot form the
            "breakdown" phase of development, this uses a sheet that shares that
            same name, which outline each individual scene. This sheet includes
            things lie; props, cast in scene, makeup, extras, costumes and even
            music.
          </Text>
          <br></br>
          <br></br>
          <Title order={3} id="3d">
            Pre-production
          </Title>
          <Divider my="sm" />
          <Text size={"sm"}>
            Once outlines for a film shoot have been made, prepoduction can
            begin. This is when those ideas on paper are made into tangeble
            actions. Cast is hired if required, visiting possible filming
            locations, constructing sets and props.
          </Text>
          <br></br>
          <div style={{ width: 640, marginLeft: "auto", marginRight: "auto" }}>
            <Image
              radius="md"
              src="https://images.unsplash.com/photo-1548944588-bd022d6b3a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
              alt="Raster vs Vector"
            />
          </div>
          <br></br>
          <Text size={"sm"}>
            Not all filming is usually done before the steps involved in
            post-production begin. The majority of this phase is comprised of
            reviewing the footage with the director and assembling the film out
            of selected takes, also called editing. Sound is also added and
            edited; music tracks and songs are composed and recorded if a film
            requires them, furthermore sound effects are designed and recorded
            and added on top of existing sounds to enhance their impact.
          </Text>
          <br></br>
          <Title order={3} id="3d">
            Post-production
          </Title>
          <Divider my="sm" />
          <Text size={"sm"}>
            Once outlines for a film shoot have been made, pre-production can
            begin. This is when those ideas on paper are made into tangible
            actions. Cast is hired if required, visiting possible filming
            locations, constructing sets and props.
          </Text>
          <br></br>
          <br></br>
          <Text size={"sm"}>
            Things from the development stage such as, script-writing,
            story-boarding, costume design and breakdown sheets can also be
            altered or completely remade during this phase.
          </Text>
          <br></br>
          <br></br>
          <Title order={3} id="3d">
            Key Terms:
          </Title>
          <br></br>
          <Divider my="sm" />
          <List>
            <List.Item>
              Match Cut
              <List withPadding listStyleType="disc">
                <List.Item>
                  a cut from one shot to another where the composition of the
                  two shots are matched by the action or subject and subject
                  matter.
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              Jump Cut
              <List withPadding listStyleType="disc">
                <List.Item>
                  an edit to a single, sequential shot that makes the action
                  appear to leap forward in time
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              Parallel Editing
              <List withPadding listStyleType="disc">
                <List.Item>
                  the process of alternating between two or more scenes that
                  happen simultaneously in different locations within the world
                  of the film
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              L-Cut
              <List withPadding listStyleType="disc">
                <List.Item>see a speaker before he begins to speak</List.Item>
              </List>
            </List.Item>
            <List.Item>
              J-Cut
              <List withPadding listStyleType="disc">
                <List.Item>
                  the reverse of an L-Cut. The first speaker continues for a bit
                  as the second speaker starts to talk.
                </List.Item>
              </List>
            </List.Item>
          </List>
        </Grid.Col>

        <Grid.Col span={4} className="topicTable">
          Table of Topics
          <Divider my="sm" />
          <NavLink label="The Beginning of Computer-Based Imagery" />
          <NavLink
            label="How are films made?"
            component="a"
            href="#evolution"
          />
          <NavLink label="Development" component="a" href="#still" />
          <NavLink
            label="Pre-production & Post Production"
            component="a"
            href="#3d"
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}

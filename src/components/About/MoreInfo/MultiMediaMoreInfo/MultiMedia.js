import {
  Grid,
  Title,
  Divider,
  List,
  HoverCard,
  Text,
  NavLink,
} from "@mantine/core";

import {
  IconDeviceSpeaker,
  IconPhoto,
  IconVideo,
  IconVideoPlus,
  IconVolume,
  IconVolume3,
} from "@tabler/icons";

export default function MultiMedia() {
  return (
    <div className="container">
      <Grid>
        <Grid.Col span={8}>
          <Title order={1}>Multi Media Blog</Title>
          <Divider my="sm" />
          <Divider my="sm" variant="dashed" />
          <Divider my="sm" variant="dotted" />
          <Title order={2}>Recent Topics</Title>
          <Divider my="sm" variant="dashed" />
          <NavLink
            label="Images"
            description="The evolution of computer-based imagery. How it started. How it works.  The power it holds. "
            color={"dark"}
            icon={<IconPhoto size={46} stroke={2.5} />}
            href="/multimedia-course-notes/images"
            component="a"
          />
          <NavLink
            label="Sound"
            description="All about digital audio "
            color={"dark"}
            icon={<IconVolume size={46} stroke={2.5} />}
            href="/multimedia-course-notes/sound"
            component="a"
          />
          <NavLink
            label="Animation"
            description="Pixel by pixel, frame by frame, the evolution of computer-based animation."
            color={"dark"}
            icon={<IconVideo size={46} stroke={2.5} />}
            href="/multimedia-course-notes/animation"
            component="a"
          />
        </Grid.Col>
        <Grid.Col span={4} className="topicTable">
          Table of Topics
          <Divider my="sm" />
          <HoverCard width={280} shadow="md">
            <HoverCard.Target>
              <NavLink
                label="Images"
                icon={<IconPhoto size={26} stroke={1.5} />}
              />
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
                The evolution of computer-based imagery. How it started. How it
                works. The power it holds.
              </Text>
            </HoverCard.Dropdown>
          </HoverCard>
          <HoverCard width={280} shadow="md">
            <HoverCard.Target>
              <NavLink
                label="Sound"
                icon={<IconDeviceSpeaker size={26} stroke={1.5} />}
              />
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">All about digital audio</Text>
            </HoverCard.Dropdown>
          </HoverCard>
          <HoverCard width={280} shadow="md">
            <HoverCard.Target>
              <NavLink
                label="Animation"
                icon={<IconVideoPlus size={26} stroke={1.5} />}
              />
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text size="sm">
                Pixel by pixel, frame by frame, the evolution of computer-based
                animation.
              </Text>
            </HoverCard.Dropdown>
          </HoverCard>
        </Grid.Col>
      </Grid>
    </div>
  );
}

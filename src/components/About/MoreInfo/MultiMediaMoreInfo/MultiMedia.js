import { Grid, Title, Divider, List, HoverCard, Text } from "@mantine/core";

export default function MultiMedia() {
  return (
    <div className="container">
      <Grid>
        <Grid.Col span={8}>
          <Title order={1}>Multi Media Blog</Title>
          <Divider my="sm" />
          <Divider my="sm" variant="dashed" />
          <Divider my="sm" variant="dotted" />
        </Grid.Col>
        <Grid.Col span={4} className="topicTable">
          Table of Topics
          <Divider my="sm" />
          <List withPadding>
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <List.Item>Hover a topic to read more.</List.Item>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  There are currently no topics to display. When there have been
                  discussions posted, you can click them here to be taken to the
                  discussion.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </List>
        </Grid.Col>
      </Grid>
    </div>
  );
}

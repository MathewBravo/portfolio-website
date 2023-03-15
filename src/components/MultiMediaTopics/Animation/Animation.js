import {
  Grid,
  Title,
  Divider,
  List,
  Text,
  NavLink,
  Image,
  Spoiler,
  Loader,
  RingProgress,
  Center,
  Slider,
} from "@mantine/core";

import {
  IconQuestionMark,
  IconWaveSine,
  IconVideo,
  IconGitCompare,
  IconVolume,
  IconFileArrowLeft,
  IconTypography,
  IconGlass,
  IconSchool,
} from "@tabler/icons";

import { useState } from "react";

export default function Anim() {
  const [value, setValue] = useState(0);
  return (
    <div className="container">
      <Grid>
        <Grid.Col span={8}>
          <Title order={1}>Animation</Title>
          <Divider my="sm" />
          <Divider my="sm" variant="dashed" />
          <Divider my="sm" variant="dotted" />
          <Title order={2}>Increasing Engagement One Frame At A Time </Title>
          <Divider my="sm" variant="dashed" />
          <Title order={3}>What is Animation?</Title>
          <Divider my="sm" />
          <Text size={"sm"}>
            Animation is the process of creating the illusion of motion through
            a series of still images. The illusion of motion is created by
            displaying a series of images in rapid succession. The images are
            displayed in a sequence that is similar to the way we see things
            move in the real world.
          </Text>
          <br></br>
          <Text size={"sm"}>
            Animation has come a long way since 1834 when William George Horner
            invented the zoetrope, a rotating drum lined by a band of pictures
            that could be changed. Digital animation, has come even further
            since Toy Story (1995).
          </Text>
          <br></br>
          <Text size={"sm"}>
            These days animation comes in many forms, from 2D to 3D, from
            traditional to digital, and from hand drawn to computer generated.
            Using a plethora of different softwares and techniques, such as 3D
            animation in AutoDesk and Blender, or 2D animation in Adobe After
            Effects and Adobe Animate.
          </Text>
          <br></br>
          <br></br>
          <Title order={3} id="evolution">
            The Science Behind It
          </Title>
          <Divider my="sm" />
          <Grid>
            <Grid.Col span={6}>
              <Text size={"sm"}>
                Animation is made possible because of persistence of vision and
                phi
              </Text>
              <br></br>
              <Text size={"sm"}>
                Persistence of is the optical illusion that occurs when visual
                perception of an object does not cease after the rays of light
                proceeding from it have ceased to enter the eye.
              </Text>
              <br></br>
              <Text size={"sm"}>
                Phi is an optical illusion that results in someone being able to
                see still images as moving images. Phi is the result of the
                persistence of vision.
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <div
                style={{ width: 200, marginLeft: "auto", marginRight: "auto" }}
              >
                <Image
                  radius="md"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Magniphy8x51ms.gif/220px-Magniphy8x51ms.gif"
                  caption="Persistence Effect"
                  alt="Raster vs Vector"
                />
              </div>
            </Grid.Col>
          </Grid>
          <br></br>
          <br></br>
          <Title order={3} id="still">
            Types of Animation
          </Title>
          <Divider my="sm" />
          <br></br>
          <Title order={4}>Cell Animation</Title>
          <br></br>
          <Text size={"sm"}>
            Cel (Celluloid) animation begins with keyframes, a drawing or shot
            that defines the starting and ending points of a smooth transition .
            Cel animation is a technique in which a series of progressively
            different graphics are used on each frame of movie film.
          </Text>
          <br></br>
          <Title order={4}>Computer-Generated Animations</Title>
          <br></br>
          <Text size={"sm"}>
            Computer animation works largely the same way as cel animation, but
            instead of using a series of drawings, the computer generates the
            images. Computer animation is a digital art form that uses computers
            to create animated images. The images can be two or three
            dimensional and can be created in a variety of styles.
          </Text>
          <br></br>
          <br></br>
          <Title order={4}>Stop Motion</Title>
          <br></br>
          <Text size={"sm"}>
            Cel (Celluloid) animation begins with keyframes, a drawing or shot
            that defines the starting and ending points of a smooth transition .
            Cel animation is a technique in which a series of progressively
            different graphics are used on each frame of movie film.
          </Text>
          <br></br>
          <br></br>
          <Title order={4}>Rotoscoping</Title>
          <br></br>
          <Text size={"sm"}>
            Cel (Celluloid) animation begins with keyframes, a drawing or shot
            that defines the starting and ending points of a smooth transition .
            Cel animation is a technique in which a series of progressively
            different graphics are used on each frame of movie film.
          </Text>
          <br></br>

          <br></br>
          <Title order={4}>Terms</Title>
          <br></br>
          <List>
            <List.Item>
              Kinematics
              <List withPadding listStyleType="disc">
                <List.Item>study of motion of joint structures</List.Item>
              </List>
            </List.Item>
            <List.Item>
              Inverse kinematics
              <List withPadding listStyleType="disc">
                <List.Item>
                  Linking of objects and definition of their relationships.
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              Tweening
              <List withPadding listStyleType="disc">
                <List.Item>Filling the action between action</List.Item>
              </List>
            </List.Item>
          </List>
          <br></br>
          <Title order={3} id="compare">
            Test It Out! (Drag The Bar)
          </Title>
          <br></br>
          <Center>
            <RingProgress
              sections={[{ value: value, color: "teal" }]}
              label={<Center>{value}</Center>}
            />
          </Center>
          <Slider
            color="red"
            value={value}
            onChange={setValue}
            labelAlwaysOn
            marks={[
              { value: 20, label: "20%" },
              { value: 50, label: "50%" },
              { value: 80, label: "80%" },
            ]}
          />
          <br></br>
          <Title order={3} id="compare">
            Animation In The Web Experience
          </Title>
          <br></br>
          <Divider my="sm" />
          <Spoiler
            maxHeight={40}
            showLabel="Uncover Explanation"
            hideLabel="Hide"
          >
            <br></br>
            <br></br>
            <Text size={"sm"}>
              Animation has plenty of uses in the web experience, it can be used
              to draw attention to a certain element, or to make a website feel
              more alive. Or like we did here to show and hide information.
              There are however a few do's and don'ts when it comes to
              animation.
            </Text>
            <br></br>
            <Title order={5} id="compare">
              Do's
            </Title>
            <br></br>
            <Text size={"sm"}></Text>
            <br></br>
            <Text size={"sm"}>
              Consider device sizes. Many web users are on mobile devices, and
              animations can translate poorly when not designed intentionally.
              Keep animations consistent with your design philosophy. Animations
              that stray too far from the color scheme or principles outlined in
              the rest of your application.
            </Text>
            <br></br>
            <Title order={5} id="compare">
              Dont's
            </Title>
            <br></br>
            <Text size={"sm"}>
              Make sure that the animation is used with intent. Animations are
              not "cheap" and should not be used to fill space. If you are going
              to use animation, make sure it is used to enhance the user
              experience.
            </Text>
            <br></br>
          </Spoiler>

          <br></br>
          <br></br>
          <Title order={3} id="format">
            Example In Use
          </Title>
          <br></br>
          <Divider my="sm" />
          <List>
            <List.Item>
              Buttons On The Top Right
              <List withPadding listStyleType="disc">
                <List.Item>
                  React to both hover and click via animations
                </List.Item>
              </List>
            </List.Item>
            <br></br>
            <List.Item>
              Loading Bars
              <List withPadding listStyleType="disc">
                <List.Item>
                  <Loader />
                  <Loader color="pink" size="lg" variant="bars" />
                </List.Item>
              </List>
            </List.Item>
            <br></br>
          </List>
          <br></br>
          <br></br>
        </Grid.Col>

        <Grid.Col span={4} className="topicTable">
          Table of Topics
          <Divider my="sm" />
          <NavLink
            label="What is Sound?"
            icon={<IconQuestionMark size={26} stroke={1.5} />}
          />
          <NavLink
            label="Science Behind It"
            component="a"
            href="#evolution"
            icon={<IconSchool size={26} stroke={1.5} />}
          />
          <NavLink
            label="Types of Animation"
            component="a"
            href="#still"
            icon={<IconTypography size={26} stroke={1.5} />}
          />
          <NavLink
            label="Animation In WEB"
            component="a"
            href="#compare"
            icon={<IconVideo size={26} stroke={1.5} />}
          />
          <NavLink
            label="Audio Storage: File Formats"
            component="a"
            href="#format"
            icon={<IconGitCompare size={26} stroke={1.5} />}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}

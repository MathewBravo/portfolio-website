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

export default function Images() {
  return (
    <div className="container">
      <Grid>
        <Grid.Col span={8}>
          <Title order={1}>Images</Title>
          <Divider my="sm" />
          <Divider my="sm" variant="dashed" />
          <Divider my="sm" variant="dotted" />
          <Title order={2}>
            The evolution of computer-based imagery. How it started. How it
            works. The power it holds.{" "}
          </Title>
          <Divider my="sm" variant="dashed" />
          <Title order={3}>Where it all Began </Title>
          <Divider my="sm" />
          <Text size={"sm"}>
            Sometime in the 1950’s a photo of a woman drawn using vector-based
            radar locations on a computer system called a Semi-Automatic Ground
            Environment or SAGE appeared. This is largely considered the oldest
            known computer-based drawing. We’ve come a long way from requiring
            radar blips to compose pin-up drawings, and today we utilize a
            variety of computer-based graphics systems capable of displaying
            nearly anything imaginable.
          </Text>
          <div style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}>
            <Image
              radius="md"
              src="https://cdn.theatlantic.com/media/mt/science/sage_pinup.jpg"
              alt="Random unsplash image"
            />
          </div>
          <br></br>
          <br></br>
          <Title order={3} id="evolution">
            The Evolution
          </Title>
          <Divider my="sm" />
          <Text size={"sm"}>
            The evolution of computer-based imagery has been a long and winding
            road. The first computer-based imagery systems were developed in the
            1950’s and 1960’s. These systems were used to display radar data on
            a CRT screen. The first computer-based imagery systems were
            developed by the United States Air Force.
          </Text>
          <br></br>
          <Text size={"sm"}>
            It was Ivan Sutherland’s 1963 Sketchpad program that was the first
            to allow users to draw on a computer screen. This inspired Ford and
            General Motors to developer their computer graphics systems.
            Eventually leading to the creation ofthe IBM 2250 vector graphgics
            display.
          </Text>
          <br></br>
          <Text size={"sm"}>
            The 1970’s, and maybe even late 1960’s, saw the introduction and
            rapid adoption of raster-based graphics systems. These systems were
            capable of displaying images in a variety of colors and resolutions.
            However they wouldn't see commercial success until the improvements
            to personal computing that came in the 1990’s.
          </Text>
          <br></br>
          <br></br>
          <Title order={3} id="still">
            Still Imagery
          </Title>
          <Divider my="sm" />
          <Text size={"sm"}>
            Now that we've covered the creation of both Raster and Vector based
            images. Let's explain what they are. These two types of images are
            the fundamental building blocks for still imagery.
          </Text>
          <div style={{ width: 440, marginLeft: "auto", marginRight: "auto" }}>
            <Image
              radius="md"
              src="https://www.simplyprint.net/wp-content/uploads/2020/10/Vector-v-raster.jpg"
              alt="Raster vs Vector"
            />
          </div>
          <br></br>
          <Grid justify="center">
            <Grid.Col span={5}>
              <Center>Raster</Center>
              <br></br>
              <List>
                <List.Item>Smallest Element is A Pixel</List.Item>
                <List.Item>Made up of a matrix or grid of pixels</List.Item>
                <List.Item>
                  Well Suited for:
                  <List withPadding listStyleType="disc">
                    <List.Item>Photography</List.Item>
                    <List.Item>Complex Drawings</List.Item>
                    <List.Item>Fine Details</List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  Formats
                  <List withPadding listStyleType="disc">
                    <List.Item>BMP</List.Item>
                    <List.Item>GIF</List.Item>
                    <List.Item>JPG</List.Item>
                    <List.Item>PNG</List.Item>
                    <List.Item>TIFF</List.Item>
                  </List>
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col span={1}></Grid.Col>
            <Grid.Col span={5}>
              <Center>Vector</Center>
              <br></br>
              <List>
                <List.Item>
                  Comprised of Vectors (Lines described by 2 locations)
                </List.Item>
                <List.Item>
                  Uses Cartesian Coordinates (numbers used to describe 2d or 3d
                  space X,Y,Z)
                </List.Item>
                <List.Item>
                  Well Suited for:
                  <List withPadding listStyleType="disc">
                    <List.Item>Photography</List.Item>
                    <List.Item>Complex Drawings</List.Item>
                    <List.Item>Fine Details</List.Item>
                  </List>
                </List.Item>
                <List.Item>
                  Formats
                  <List withPadding listStyleType="disc">
                    <List.Item>ESP</List.Item>
                    <List.Item>SVG</List.Item>
                    <List.Item>AI</List.Item>
                  </List>
                </List.Item>
              </List>
            </Grid.Col>
          </Grid>
          <br></br>
          <Title order={4}>Exploring Further: Raster</Title>
          <Text size={"sm"}>
            {" "}
            Raster images are the most common type of image used today. They are
            images that are made up of a collection of pixels. These pixels
            contain information on the tone, color, and intensity of the image.
            Raster images are resolution dependent, meaning that the more pixels
            that are used to create the image the higher the resolution. This is
            why raster images are not well suited for large scale printing.{" "}
          </Text>
          <br></br>
          <Title order={4}>Exploring Further: Vector</Title>
          <Text size={"sm"}>
            {" "}
            Vector are not resolution dependent, they display as per the
            capabilities of the output of the render device. They are incredibly
            versatile because they do not require knowledge of pixel placement
            can therefore store their images in a much smaller file size.
            Instead of pixels they are comprized of vectors, which are lines
            described by 2 locations. These vectors are then used to create the
            image.{" "}
          </Text>
          <br></br>
          <br></br>
          <Title order={3} id="3d">
            3D Images
          </Title>
          <Divider my="sm" />
          <Text size={"sm"}>
            {" "}
            I've always been an individual who was passionate about the creation
            of 3D projects from animated movies to 3D art. I have experience
            working with 3D software like blender, 3DS Max, Maya, cinema 4D,
            Houdini and a few more. 3D images share a lot of the same principles
            and traits of vector images because they are in fact of 3D vector
            representation of an image. We now add the Z axis to an X&Y 2D axis
            vector and have a 3 dimensional space period.{" "}
          </Text>
          <br></br>
          <div style={{ width: 640, marginLeft: "auto", marginRight: "auto" }}>
            <Image
              radius="md"
              src="https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              caption="3D Movie Being Played in a 3D Render of a Movie Theater"
              alt="Raster vs Vector"
            />
          </div>
          <br></br>
          <Text size={"sm"}>
            {" "}
            There are many types of 3D models, it's used widely throughout the
            CAD industry, architectural industries, auto manufacturing
            industries, movie industries, and video game industry. As well as
            with the ease of use and with the technology we have available
            within our homes becoming better every year a common methodology
            used to style modern day websites the three JS library assist
            greatly in this.{" "}
          </Text>
          <br></br>

          <Text size={"sm"}>
            {" "}
            A 3D pipeline throughout all industries follows roughly the same
            three-step process, the block out, the Poly model, rendering. In the
            block out stage depending on how detailed your item and how
            preplanned your item is you are essentially forming a base layer of
            your object a silhouette in shadow. Block outs for architecture
            might just be a bunch of squares to get a room layout, for
            automotive they might just be a black and white silhouette of the
            shape of a car, for CAD industries it might be a hand drawn sketch
            with dimensions. After you're done your block out you do your Poly
            modeling. This is when you make your shape in your modeling software
            of choice using techniques such as extrusions, beveling, in setting,
            slicing to get the shape that you want typically made out of quads
            or triangles. Finally you render an output and the computer uses
            complex algorithms to formulate a physical in space representation
            using your vectors of what your image is and then can convert that
            to a 2D image that is displayed on your output device.{" "}
          </Text>
          <br></br>
          <br></br>
          <Title order={3} id="3d">
            Interesting Facts.
          </Title>
          <br></br>
          <Divider my="sm" />
          <List>
            <List.Item>Both GIF and PNG-8 allow only 256 Colors</List.Item>
            <List.Item>JPG allows up to 16 million colors.</List.Item>
            <List.Item>PNG-24 and SVG allow unlimited colors.</List.Item>
            <List.Item>
              Videos can be compressed to a much smaller size and lose nearly no
              quality.
            </List.Item>
            <List.Item>
              The advantage of lossy methods over lossless methods is that in
              some cases a lossy method can produce a much smaller compressed
              file
            </List.Item>
            <List.Item>
              The most common palettes are 1, 4, 8, 16, and 24-bit deep.
            </List.Item>
          </List>
        </Grid.Col>

        <Grid.Col span={4} className="topicTable">
          Table of Topics
          <Divider my="sm" />
          <NavLink
            label="The Beginning of Computer-Based Imagery"
            icon={<IconTrendingUp size={26} stroke={1.5} />}
          />
          <NavLink
            label="The Evolution of Computer-Based Imagery"
            component="a"
            href="#evolution"
            icon={<IconRefresh size={26} stroke={1.5} />}
          />
          <NavLink
            label="About Still Imagery"
            component="a"
            href="#still"
            icon={<IconBarbell size={26} stroke={1.5} />}
          />
          <NavLink
            label="About 3D Imagery"
            component="a"
            href="#3d"
            icon={<IconChartInfographic size={26} stroke={1.5} />}
          />
          <NavLink
            label="Random Facts"
            component="a"
            href="#random"
            icon={<IconInfoSquare size={26} stroke={1.5} />}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}

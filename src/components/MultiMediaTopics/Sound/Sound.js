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
  IconChartInfographic,
  IconInfoSquare,
  IconQuestionMark,
  IconWaveSine,
  IconVideo,
  IconGitCompare,
  IconVolume,
  IconFileArrowLeft,
} from "@tabler/icons";

export default function Sound() {
  return (
    <div className="container">
      <Grid>
        <Grid.Col span={8}>
          <Title order={1}>Sound</Title>
          <Divider my="sm" />
          <Divider my="sm" variant="dashed" />
          <Divider my="sm" variant="dotted" />
          <Title order={2}>All About Digital Audio and Sound. </Title>
          <Divider my="sm" variant="dashed" />
          <Title order={3}>What is sound?</Title>
          <Divider my="sm" />
          <Text size={"sm"}>
            Sound is the product of energy creation through vibrations. Often
            misconstrued to be only what we hear as the result of this energy
            expenditure, this is false. Our ears can only hear certain
            frequencies of these vibrations, but even if we cannot hear it sound
            is produced. Putting to rest once and for all the answer to the
            great human mystery “if a tree falls in the woods and no one is
            around to hear it does it make a sound?”, yes.
          </Text>
          <br></br>
          <Text size={"sm"}>
            As mentioned earlier, sounds are comprised of frequencies. A
            frequency is measured in Hertz and is the number of vibrations per
            unit of measure, usually seconds. If a sound has too low or too high
            a frequency, humans are incapable of hearing it. However some
            animals like cats can detect a range of frequencies up to 8 times
            higher than humans.
          </Text>
          <br></br>
          <Text size={"sm"}>
            There’s another word you’ve probably heard surrounding sound. Pitch.
            This is in fact not a scientific measurement of any aspect of sound.
            Pitch is a completely perceptual property, and is merely a label
            attributed to the listeners perceived scale of a sound’s frequency.
          </Text>
          <br></br>
          <br></br>
          <Title order={3} id="evolution">
            Sound in the digital age
          </Title>
          <Divider my="sm" />
          <Grid>
            <Grid.Col span={6}>
              <Text size={"sm"}>
                For the purpose of evaluation we can overlook the invention of
                the telephone as a production of digital sound. Instead focusing
                strictly on the first computer recorded audio. This feat was
                attributed to Max Mathew’s in 1957. The first commercial
                recordings however, were released in 1971 by the “Japan
                Broadcasting Corporation”, formally known as NHK.
              </Text>
              <br></br>
              <Text size={"sm"}>
                Today audio has come a long was from simple two channel
                broadcast capabilities and below we will discuss more about the
                modern state of sound in the digital world.
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <div
                style={{ width: 350, marginLeft: "auto", marginRight: "auto" }}
              >
                <Image
                  radius="md"
                  src="  https://i0.wp.com/120years.net/wordpress/wp-content/uploads/500004418-03-01.jpg?ssl=1"
                  caption="Max Mathews"
                  alt="Raster vs Vector"
                />
              </div>
            </Grid.Col>
          </Grid>
          <br></br>
          <br></br>
          <Title order={3} id="still">
            Types of Audio
          </Title>
          <Divider my="sm" />
          <br></br>
          <Title order={4}>Digital Audio</Title>
          <br></br>
          <Text size={"sm"}>
            A form of audio that represents any and all sound recorded digitally
            or converted to a digital format. It uses something called samples
            to encode the sound, samples are a signal representation of
            frequencies. These frequencies represent the “sampling rate” which
            is the number of samples per second. The closer the sampling rate is
            to the actual frequency the more closely a digital sound will
            represent the actual recording.
          </Text>
          <br></br>
          <Text size={"sm"}>
            Bit depth also affects the sounds quality, essentially bit depth is
            the number of bits used by your computer to store the audio. The
            higher the bit depth the larger the dynamic range, which is scale in
            values between an audio files lowest and highest volume.
          </Text>
          <br></br>
          <Text size={"sm"}>
            There are many types of sampling rates, and each has an individual
            best use case as shown below:
          </Text>
          <List>
            <List.Item>
              8 kHz - 22.225 kHz
              <List withPadding listStyleType="disc">
                <List.Item>Multimedia</List.Item>
              </List>
            </List.Item>
            <List.Item>
              32 kHz
              <List withPadding listStyleType="disc">
                <List.Item>Dialog and ambient sound</List.Item>
              </List>
            </List.Item>
            <List.Item>
              44.1 kHz
              <List withPadding listStyleType="disc">
                <List.Item>CDs</List.Item>
              </List>
            </List.Item>
            <List.Item>
              48 kHz
              <List withPadding listStyleType="disc">
                <List.Item>Majority of digital audio</List.Item>
              </List>
            </List.Item>
            <List.Item>
              88.2 kHz
              <List withPadding listStyleType="disc">
                <List.Item>
                  High resolution audio, good for converting to compatible 44.1
                  kHz formats
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              96 kHz
              <List withPadding listStyleType="disc">
                <List.Item>
                  Widely regarded as the professional standard in the modern
                  era.
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              192 kHz
              <List withPadding listStyleType="disc">
                <List.Item>
                  While mainly used for master recording for music, it is slowly
                  becoming the audiophiles rate of choice.
                </List.Item>
              </List>
            </List.Item>
          </List>
          <br></br>
          <Title order={4}>MIDI</Title>
          <Grid>
            <Grid.Col span={6}>
              <Text size={"sm"}>
                A communication platform that allows various digital recording
                and processing hardware to communicate. Whilst MIDI is a
                communication platform is it not relaying actual digital audio,
                instead it is storing and passing shorthand representations of
                sound via a numeric format. You can think of it as the
                difference between a song and a score. In a film digital audio
                would be each individual soundtrack that plays, whilst MIDI
                files would represent the entire score as a whole composition.
                The when and what to play.
              </Text>
              <br></br>
              <Text size={"sm"}>
                MIDI requires many things to work and create scores, notation
                software, synthesizers, keyboards and other digital instruments
                as well as a sequencer. A piece of software that puts everything
                together.
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <div
                style={{ width: 350, marginLeft: "auto", marginRight: "auto" }}
              >
                <Image
                  radius="md"
                  src="https://m.media-amazon.com/images/I/61lQrW7H53L._AC_SL1048_.jpg"
                  caption="MIDI Cable"
                  alt="Raster vs Vector"
                />
              </div>
            </Grid.Col>
          </Grid>
          <br></br>
          <br></br>
          <Title order={3} id="compare">
            Comparing The Two
          </Title>
          <br></br>
          <Divider my="sm" />
          <Text size={"sm"}>
            The comparison between song and score allows us to make further
            comparisons between digital audio and the MIDI format.
          </Text>
          <br></br>
          <Text size={"sm"}>
            The first being that the quality of your digital audio recording
            depends purely on the capabilities of your sound system while MIDI
            depends not only on the capabilities of your sound system but also
            on the quality of what produced the sound, like an instrument. This
            makes MIDI device dependent.
          </Text>
          <br></br>
          <Text size={"sm"}>
            Secondly, whilst it's hard to see why MIDI is worth the hassle for
            anyone who is in a professional musician, the file sizes are
            significantly smaller than the equivalent digital audio files. This
            means that if you were to embed them in a website they would play
            much quicker.
          </Text>
          <br></br>
          <Text size={"sm"}>
            MIDI Also brings you the benefit of being completely editable, you
            can even change something like the length of a file without
            worsening audio quality.
          </Text>
          <br></br>
          <Text size={"sm"}>
            However, digital audio is often preferred for pieces with spoken
            audio, large and part due to the consistent playback quality, it
            also as discussed above is much easier to work with.
          </Text>
          <br></br>
          <br></br>
          <Title order={3} id="fformat">
            Audio Storage: File Formats
          </Title>
          <br></br>
          <Divider my="sm" />
          <List>
            <List.Item>
              Wave (uncompressed)
              <List withPadding listStyleType="disc">
                <List.Item>
                  Often seen as the standard for device default formatting.
                  Basically identical to the below AIFF format.
                </List.Item>
              </List>
            </List.Item>
            <List.Item>Audio Interchange File Format (uncompressed)</List.Item>
            <List.Item>
              Free Lossless Audio Codec (lossless)
              <List withPadding listStyleType="disc">
                <List.Item>
                  A lossless format that allows compression of up to 60% while
                  maintaining identical data copy. It also allows conversion to
                  any other lossless format like WMA or Wave.
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              MP3 (lossy)
              <List withPadding listStyleType="disc">
                <List.Item>
                  Whilst lossy, it provides the significant benefit of being a
                  very small space consuming format. Was popularized during an
                  era when harddrive space was at a premium.
                </List.Item>
              </List>
            </List.Item>
            <List.Item>
              Ogg (lossy)
              <List withPadding listStyleType="disc">
                <List.Item>
                  Can be thought of as an open source MP3 format
                </List.Item>
              </List>
            </List.Item>
          </List>
          <br></br>
          <br></br>
          <Title order={3} id="bonusvideo">
            Kbps comparison example
          </Title>
          <br></br>
          <Divider my="sm" />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hx3NG-bKPyE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Grid.Col>

        <Grid.Col span={4} className="topicTable">
          Table of Topics
          <Divider my="sm" />
          <NavLink
            label="What is Sound?"
            icon={<IconQuestionMark size={26} stroke={1.5} />}
          />
          <NavLink
            label="Sound in the Digital Age"
            component="a"
            href="#evolution"
            icon={<IconVolume size={26} stroke={1.5} />}
          />
          <NavLink
            label="Types of Audio"
            component="a"
            href="#still"
            icon={<IconWaveSine size={26} stroke={1.5} />}
          />
          <NavLink
            label="Comparing the Two"
            component="a"
            href="#compare"
            icon={<IconGitCompare size={26} stroke={1.5} />}
          />
          <NavLink
            label="Audio Storage: File Formats"
            component="a"
            href="#fformat"
            icon={<IconFileArrowLeft size={26} stroke={1.5} />}
          />
          <NavLink
            label="Bonus Video"
            component="a"
            href="#bonusvideo"
            icon={<IconVideo size={26} stroke={1.5} />}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
}

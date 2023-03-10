import { MediaType } from "@/db";
import { Pause, PlayArrow, SkipPrevious } from "@mui/icons-material";
import { IconButton, Slider, Stack, Typography } from "@mui/material";
import { useAudio, useVideo } from "react-use";

type Url = string;

interface HandlersProps {
  url: Url;
}

interface MediaHandlerProps extends HandlersProps {
  type: MediaType;
}

const mediaTypeMap: (
  url: Url
) => Record<Lowercase<MediaType>, React.ReactNode> = url => ({
  audio: <AudioHandler url={url} />,
  image: <ImageHandler url={url} />,
  video: <VideoHandler url={url} />,
});

const MediaHandler: React.FC<MediaHandlerProps> = ({ type, url }) => {
  const media = mediaTypeMap(url)[type.toLowerCase() as Lowercase<MediaType>];
  return <>{media}</>;
};

const AudioHandler: React.FC<HandlersProps> = ({ url }) => {
  const [audio, state, controls, ref] = useAudio({
    src: url,
  });

  const handleChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    const val = typeof value === "object" ? value[0] : value;
    (val * 100) / state.duration;
    controls.seek(val);
  };

  const togglePause = () => {
    state.paused ? controls.play() : controls.pause();
  };

  return (
    <>
      {audio}
      <Stack>
        <Typography mt={4} variant='h4' fontWeight={300} component='h2'>
          Listen to the audio!
        </Typography>
        <Stack
          direction='row'
          gap={2}
          alignItems='center'
          justifyContent='space-between'
        >
          <Stack direction='row' gap={2}>
            <IconButton onClick={() => controls.seek(0)}>
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={togglePause}>
              {state.paused ? <PlayArrow /> : <Pause />}
            </IconButton>
          </Stack>
          {audio}
          {state && (
            <>
              <Slider
                value={state.time}
                onChange={handleChange}
                max={state.duration}
              />
            </>
          )}
        </Stack>
      </Stack>
    </>
  );
};

const VideoHandler: React.FC<HandlersProps> = ({ url }) => {
  const [video, state, controls, ref] = useVideo({
    src: url,
  });
  return <>{video}</>;
};

const ImageHandler: React.FC<HandlersProps> = ({ url }) => {
  return <></>;
};

export default MediaHandler;

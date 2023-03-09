import { MediaType } from "@/db";
import { Slider, Stack } from "@mui/material";
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
  image: <></>,
  video: <></>,
});

const MediaHandler: React.FC<MediaHandlerProps> = ({ type, url }) => {
  const Media = mediaTypeMap(url)[type];
  return <Media />;
};

const AudioHandler: React.FC<HandlersProps> = ({ url }) => {
  const [audio, state, controls, ref] = useAudio({
    src: url,
  });
  return (
    <>
      {audio}
      <Stack alignItems='center'>
        <Slider value={state.time} max={state.duration} min={0} />
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

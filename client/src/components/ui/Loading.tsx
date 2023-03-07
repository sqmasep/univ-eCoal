import { CircularProgress, Stack, Typography } from "@mui/material";

interface LoadingProps {
  loading?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading = false }) => {
  return (
    <>
      {loading && (
        <Stack alignItems='center' justifyContent='center'>
          <Typography>Loading...</Typography>
          <CircularProgress />
        </Stack>
      )}
    </>
  );
};

export default Loading;

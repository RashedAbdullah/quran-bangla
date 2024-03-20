import { Box, Skeleton } from "@mui/material";

const Loading = () => {
  return (
    <div className="flex h-screen justify-center align-middle mt-20">
      <Box sx={{ width: 300 }}>
        <Skeleton className="bg-primary" />
        <Skeleton className="bg-primary" animation="wave" />
        <Skeleton className="bg-primary" animation={false} />
      </Box>
    </div>
  );
};

export default Loading;

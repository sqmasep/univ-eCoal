import { Grid } from "@mui/material";

export interface ListProps<T> {
  of: T[];
  children: (item: T, index: number, arr: T[]) => React.ReactNode;
  key: (item: T) => React.Key;
}

const List = <T,>({ of, children, key, ...props }: ListProps<T>) => {
  return (
    <Grid container>
      {of.map((item, index, arr) => (
        <Grid item key={key(item)}>
          {children(item, index, arr)}
        </Grid>
      ))}
    </Grid>
  );
};

export default List;

import { Grid } from "@mui/material";

export interface ListProps<T> {
  of: T[];
  children: (item: T, index: number, arr: T[]) => React.ReactNode;
  gridKey: (item: T) => React.Key;
}

const List = <T,>({
  of,
  children,
  gridKey,
  ...props
}: ListProps<T> & Omit<React.ComponentProps<typeof Grid>, "children">) => {
  return (
    <Grid container {...props}>
      {of.map((item, index, arr) => (
        <Grid item xs={12} key={gridKey(item) ?? index}>
          {children(item, index, arr)}
        </Grid>
      ))}
    </Grid>
  );
};

export default List;

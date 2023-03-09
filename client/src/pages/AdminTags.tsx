import { tags } from "@/lib/query/tags";
import { useQuery } from "@tanstack/react-query";

const AdminTags: React.FC = () => {
  const { data } = useQuery(tags.keys.all, tags.queries.all);
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default AdminTags;

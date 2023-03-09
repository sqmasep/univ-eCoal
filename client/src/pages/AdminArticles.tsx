import { articles } from "@/lib/query/articles";
import { useQuery } from "@tanstack/react-query";

const AdminArticles: React.FC = () => {
  const { data } = useQuery(articles.keys.all, articles.queries.all);
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default AdminArticles;

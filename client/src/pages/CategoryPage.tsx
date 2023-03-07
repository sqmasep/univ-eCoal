import Loading from "@/components/ui/Loading";
import { articles } from "@/lib/query/articles";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const CategoryPage: React.FC = () => {
  const { tag } = useParams();
  const { data } = useQuery(
    articles.keys.byTag(tag),
    articles.queries.byTag(tag)
  );

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default CategoryPage;

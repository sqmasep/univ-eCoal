import useUser from "@/store/userStore";
import { ArrowBack } from "@mui/icons-material";
import { Container, IconButton, Tab, Tabs, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminArticles from "./AdminArticles";
import AdminTags from "./AdminTags";

const tabs = [
  {
    label: "Articles",
    value: "articles",
  } as const,
  {
    label: "Categories",
    value: "tags",
  } as const,
] satisfies { label: string; value: string }[];

type TabValues = typeof tabs[number]["value"];

const AnimatedTabSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <motion.div>{children}</motion.div>;
};

const tabMap: Record<TabValues, React.ReactNode> = {
  articles: <AdminArticles />,
  tags: <AdminTags />,
};

const Admin: React.FC = () => {
  const user = useUser(state => state.user);
  const [selectedTab, setSelectedTab] = useState<TabValues>(tabs[0].value);

  const handleChange = (e: React.SyntheticEvent, newValue: TabValues) => {
    setSelectedTab(newValue);
  };

  return (
    <Container sx={{ mt: 16 }}>
      <IconButton component={Link} to='/profile'>
        <ArrowBack fontSize='large' />
      </IconButton>
      {user?.role === "ADMIN" && (
        <Typography mt={2} variant='h2' fontWeight={400}>
          Admin panel
        </Typography>
      )}
      <Tabs sx={{ mt: 4, mb: 2 }} value={selectedTab} onChange={handleChange}>
        {tabs.map(tab => (
          <Tab key={tab.value} value={tab.value} label={tab.label} />
        ))}
      </Tabs>

      <AnimatePresence mode='wait'>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{
            duration: 0.2,
          }}
          key={selectedTab}
        >
          {tabMap[selectedTab]}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default Admin;

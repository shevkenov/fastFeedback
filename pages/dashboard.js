import React from "react";
import DashboardShell from "../compnents/DashboardShell";
import EmptyState from "../compnents/EmptyState";
import FreePlanEmptyState from "../compnents/FreePlanEmptyState";
import { useAuth } from "../lib/auth";

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) return "Loading ......";

  return (
    <DashboardShell>
      <EmptyState /> :
    </DashboardShell>
  );
};

export default Dashboard;

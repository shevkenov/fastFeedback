import React from "react";
import useSWR from "swr";

import AddSite from "../components/AddSite";
import DashboardShell from "../components/DashboardShell";
import EmptyState from "../components/EmptyState";
import FreePlanEmptyState from "../components/FreePlanEmptyState";
import SitesTable from "../components/SitesTable";
import LoadingSkeleton from "../components/SkeletonLoading";
import TableHeader from "../components/TableHeader";
import { useAuth } from "../lib/auth";
import fetcher from "../utils/fetcher";

const Dashboard = () => {
  const auth = useAuth();
  const { data, error } = useSWR(
    auth.user ? ["/api/sites", auth.user] : null,
    fetcher
  );

  if (!data)
    return (
      <DashboardShell>
        <TableHeader text="Sites">
          <AddSite colorScheme="teal">+ Add Site</AddSite>
        </TableHeader>
        <LoadingSkeleton />
      </DashboardShell>
    );

  return (
    <DashboardShell>
      <TableHeader text="Sites">
        <AddSite colorScheme="teal">+ Add Site</AddSite>
      </TableHeader>

      {!data.length ? <EmptyState /> : <SitesTable sites={data} />}
    </DashboardShell>
  );
};

export default Dashboard;

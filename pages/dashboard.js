import React from "react";
import useSWR from "swr";

import DashboardShell from "../compnents/DashboardShell";
import EmptyState from "../compnents/EmptyState";
import FreePlanEmptyState from "../compnents/FreePlanEmptyState";
import SitesTable from "../compnents/SitesTable";
import LoadingSkeleton from "../compnents/SkeletonLoading";
import { useAuth } from "../lib/auth";
import fetcher from '../utils/fetcher';

const Dashboard = () => {
  const auth = useAuth();
  const {data, error} = useSWR('/api/sites', fetcher);

  if(!data) return (
      <DashboardShell>
          <LoadingSkeleton />
      </DashboardShell>
  )

  return (
    <DashboardShell>
        {
            !data.length ? <EmptyState /> : <SitesTable sites={data}/>
        }
    </DashboardShell>
  );
};

export default Dashboard;

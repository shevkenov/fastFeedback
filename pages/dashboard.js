import React from "react";
import useSWR from "swr";

import DashboardShell from "../components/DashboardShell";
import EmptyState from "../components/EmptyState";
import FreePlanEmptyState from "../components/FreePlanEmptyState";
import SitesTable from "../components/SitesTable";
import LoadingSkeleton from "../components/SkeletonLoading";
import fetcher from '../utils/fetcher';

const Dashboard = () => {
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

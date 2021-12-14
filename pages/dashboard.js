import React from "react";
import useSWR from "swr";

import DashboardShell from "../components/DashboardShell";
import EmptyState from "../components/EmptyState";
import FreePlanEmptyState from "../components/FreePlanEmptyState";
import SitesTable from "../components/SitesTable";
import LoadingSkeleton from "../components/SkeletonLoading";
import { useAuth } from "../lib/auth";
import fetcher from '../utils/fetcher';

const Dashboard = () => {
  const auth = useAuth();

  const {data, error} = useSWR(auth.user ? ['/api/sites', auth.user.token] : null, fetcher);

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

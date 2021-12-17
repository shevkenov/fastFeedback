import React from "react";
import useSWR from "swr";

import DashboardShell from "../components/DashboardShell";
import EmptyState from "../components/EmptyState";
import FeedbackTable from "../components/FeedbackTable";
import FreePlanEmptyState from "../components/FreePlanEmptyState";
import LoadingSkeleton from "../components/SkeletonLoading";
import TableHeader from "../components/TableHeader";
import { useAuth } from "../lib/auth";
import fetcher from "../utils/fetcher";

const Feedback = () => {
  const auth = useAuth();
  const {data, error} = useSWR(auth.user ? ['/api/feedbacks', auth.user] : null, fetcher);

  if (!data)
    return (
      <DashboardShell>
        <TableHeader text="Feedbacks"/>
        <LoadingSkeleton />
      </DashboardShell>
    );

  return (
    <DashboardShell>
      <TableHeader text="Feedbacks"/>
      {!data.length ? <EmptyState /> : <FeedbackTable feedbacks={data} />}
    </DashboardShell>
  );
};

export default Feedback;

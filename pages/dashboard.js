import React from 'react';
import DashboardShell from '../compnents/DashboardShell';
import EmptyState from '../compnents/EmptyState';
import FreePlanEmptyState from '../compnents/FreePlanEmptyState';
import { useAuth } from '../lib/auth';

const Dashboard = () => {
    const auth = useAuth();
    return (
        <DashboardShell>
            {
                auth.user ? 
                <EmptyState /> :
                <FreePlanEmptyState />

            }
        </DashboardShell>
    )
}

export default Dashboard

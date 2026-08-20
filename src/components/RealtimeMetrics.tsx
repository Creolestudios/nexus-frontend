import React from 'react';

export const RealtimeMetrics: React.FC<{ tenantId: string }> = ({ tenantId }) => {
  return (
    <div className="p-4 rounded-lg bg-card border border-border">
      <h3 className="font-semibold text-foreground">Live Telemetry Throughput</h3>
      <p className="text-sm text-muted-foreground">Streaming real-time events for tenant {tenantId}</p>
    </div>
  );
};

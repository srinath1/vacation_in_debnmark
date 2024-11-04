import { fetchReservationsStats } from "@/utils/actions";
import React from "react";
import Statscard from "../admin/Statscard";

const Stats = async () => {
  const stats = await fetchReservationsStats();

  return (
    <div className="mt-8 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
      <Statscard title="properties" value={stats.properties} />
      <Statscard title="nights" value={stats.nights} />
      <Statscard title="amount(DKK)" value={stats.amount} />
    </div>
  );
};

export default Stats;

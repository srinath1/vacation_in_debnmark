import { fetchStats } from "@/utils/actions";
import React from "react";
import Statscard from "./Statscard";
const StatsContainer = async () => {
  const data = await fetchStats();

  return (
    <div className="mt-8 grid md:grid-cols-2 gap-4  lg:grid-cols-3">
      <Statscard title="users" value={data.usersCount || 0} />
      <Statscard title="properties" value={data.propertiesCount || 0} />
      <Statscard title="bookings" value={data.bookingsCount || 0} />
    </div>
  );
};

export default StatsContainer;

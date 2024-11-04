import React, { Suspense } from "react";
import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from "../../components/admin/Loading";
import StatsContainer from "@/components/admin/StatsContainer";
import ChartsContainer from "../../components/admin/ChartsContainer";

const Adminpage = () => {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>

      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
};

export default Adminpage;

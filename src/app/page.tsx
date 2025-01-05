import dynamic from "next/dynamic";

const Overview = dynamic(() => import("../components/section/Overview"));

export default function OverviewPage() {
  return <Overview />;
}

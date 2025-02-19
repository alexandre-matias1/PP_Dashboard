import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { ToggleTheme } from "./theme/toggle-theme";

export function Header() {
  return (
    <>
      <div className="p-7 flex items-center justify-between border-b">
        <div className="flex gap-4 items-center">
          <ChartNoAxesColumnIncreasing className="w-7 h-7"/>
          <p className="font-bold text-lg text-muted-foreground">Dashboard Sorter</p>
        </div>
        <ToggleTheme />
      </div>
    </>
  );
}

import { Charts } from "@/components/charts";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ChartsContext } from "@/context/ChartsContext";
import { Package, PackageSearch, PackageX } from "lucide-react";
import { useContext } from "react";

export function Content() {
  const { chart } = useContext(ChartsContext);

  const totalInd = chart.reduce((acc, item) => acc + item.qtdInd, 0);
  const totalRec = chart.reduce((acc, item) => acc + item.qtdRec, 0);
  const totalRej = chart.reduce((acc, item) => acc + item.qtdRej, 0);

  return (
    <div className="w-100 justify-cente mt-5 flex flex-col items-center gap-10">
      <div className="flex gap-6">
        <Card>
          <CardTitle className="flex w-[410px] items-center justify-between p-5">
            Volumetria
            <Package />
          </CardTitle>
          <CardContent className="font-semibold text-pink-600">
            {totalInd}
          </CardContent>
        </Card>{" "}
        <Card>
          <CardTitle className="flex w-[410px] items-center justify-between p-5">
            Recirculação
            <PackageSearch />
          </CardTitle>
          <div className="flex gap-4">
            <CardContent className="flex w-full justify-between">
              <p className="font-semibold text-pink-600">{totalRec}</p>
              <p className="font-semibold text-amber-300">{((totalRec/totalInd)*100).toFixed(2)}</p>
            </CardContent>{" "}
          </div>
        </Card>{" "}
        <Card>
          <CardTitle className="flex w-[410px] items-center justify-between p-5">
            Rejeito
            <PackageX />
          </CardTitle>
          <div className="flex gap-4">
            <CardContent className="flex w-full justify-between">
              <p className="font-semibold text-pink-600">{totalRej}</p>
              <p className="font-semibold text-amber-300">{((totalRej/totalInd)*100).toFixed(2)}</p>
            </CardContent>{" "}
          </div>
        </Card>
      </div>
      <div className="w-[1280px]">
        <Charts />
      </div>
    </div>
  );
}

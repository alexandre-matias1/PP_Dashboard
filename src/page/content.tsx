import { Charts } from "@/components/charts";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Package, PackageSearch, PackageX } from "lucide-react";





export function Content() {

  return (
    <div className="w-100 justify-cente mt-5 flex flex-col items-center gap-10">
      <div className="flex gap-6">
        <Card>
          <CardTitle className="flex w-[410px] items-center justify-between p-5">
            Volumetria
            <Package />
          </CardTitle>
          <CardContent className="font-semibold text-pink-600">
            3000
          </CardContent>
        </Card>{" "}
        <Card>
          <CardTitle className="flex w-[410px] items-center justify-between p-5">
            Recirculação
            <PackageSearch />
          </CardTitle>
          <div className="flex gap-4">
            <CardContent className="font-semibold text-pink-600">
              3000
            </CardContent>{" "}
          </div>
        </Card>{" "}
        <Card>
          <CardTitle className="flex w-[410px] items-center justify-between p-5">
            Rejeito
            <PackageX />
          </CardTitle>
          <div className="flex gap-4">
            <CardContent className="font-semibold text-pink-600">
              200
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

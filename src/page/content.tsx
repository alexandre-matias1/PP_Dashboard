import { Charts } from "@/components/charts";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function Content() {
  return (
    <div className="w-100 justify-cente mt-5 flex flex-col items-center gap-10">
      <div className="flex gap-6">
        <Card>
          <CardTitle className="flex w-[410px] items-center justify-start p-5">
            Volumetria
          </CardTitle>
          <CardContent className="font-semibold text-pink-600">
            20301
          </CardContent>
        </Card>{" "}
        <Card>
          <CardTitle className="flex w-[410px] items-center justify-start p-5">
            Recirculação
          </CardTitle>
          <div className="flex gap-4">
            <CardContent className="font-semibold text-pink-600">
              3000
            </CardContent>{" "}
            <CardContent className=" text-emerald-600">
              3%
            </CardContent>
          </div>
        </Card>{" "}
        <Card>
          <CardTitle className="flex w-[410px] items-center justify-start p-5">
            Rejeito
          </CardTitle>
          <div className="flex gap-4">
            <CardContent className="font-semibold text-pink-600">
              200
            </CardContent>{" "}
            <CardContent className=" text-emerald-600">
              3%
            </CardContent>
          </div>
        </Card>
      </div>
      <div className="w-[1280px]">
        <Charts />
      </div>
    </div>
  );
}

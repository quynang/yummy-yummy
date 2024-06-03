import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area"


export default function Home() {
  return (
    <div className="container">
      <div className="flex justify-center pt-[150px] items-center flex-col">
        <div className="font-heading text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#27c4f5] via-[#ba37ce] to-[#27c4f5] bg-[length:500%] animate-[gradientAnimation_7s_linear_infinite] font-extrabold leading-tight">
          Yummy Yummy !
        </div>
        <Tabs defaultValue="rice" className="flex justify-center mt-[32px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger className="min-w-[120px]" value="rice">Cơm</TabsTrigger>
            <TabsTrigger className="min-w-[120px]" value="broth">Món nước</TabsTrigger>
            <TabsContent className="w-[350px]" value="rice">
              <ScrollArea className="h-72  rounded-md border">

              </ScrollArea>
            </TabsContent>
            <TabsContent className="w-[350px]" value="broth">
              <ScrollArea className="h-72  rounded-md border">

              </ScrollArea>
            </TabsContent>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}

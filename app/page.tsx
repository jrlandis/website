import { Separator } from "@/components/ui/separator"
import { BadgeCheckIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const standards = [
  { id: 1, title: "ISO 9001"},
  { id: 2, title: "ASME NQA-1"},
  { id: 3, title: "AS 9100"},
  { id: 4, title: "NADCAP"},
  { id: 5, title: "IATF 16949"},
  { id: 6, title: "ISO 29001"},
];

const services = [
  { id: 1, title: "Automated Audits", content:"Complete audit checklists, perform equivelancy analysis and understand risks"},
  { id: 2, title: "Manage Workflows", content:"Track Prodution Process Approval Processes, Vendor Qualifications, and Internal Audits"},
  { id: 3, title: "Generate Documents", content:"Create and maintain SOPs, Work Instructions, PPAP Documents, Quality Procedures, and more"},
  { id: 4, title: "Vendor Compliance", content:"Perform upstream vendor risk assessment, review quality documentation and ensure supplier audits are completed"},
  { id: 5, title: "Non-Conformances", content:"Support non-conformance reporting, root cause analysis, and CAPA tracking"},
  { id: 6, title: "AI Integration", content:"Eliminate the need to manually find documents by using AI to extract and analyze data from your systems"},
];

export default function Home() {
  return (
    <div className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)
                  grid grid-flow-col grid-rows-1 gap-4 items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20">
    <main className="w-8/10 flex flex-col flex-wrap gap-[64px] row-start-1 items-start">
      
      <div className="grid grid-col-2 w-full space-y-10 space-x-20 max-w-7xl mx-auto">
            <div className="col-1 w-full space-y-8">
              <h1 className="w-full text-4xl sm:text-5xl font-bold flex-wrap items-left justify-left text-left sm:text-left max-w-3xl">
              Compliance automation<br/><span className="underline underline-offset-3 decoration-6 decoration-blue-400 dark:decoration-blue-600">built for SMBs</span></h1>

              <p className="max-w-xl justify-center text-justify align-middle">
                We automate compliance so you can focus on what matters most: <br/>building <span className="underline underline-offset-3 decoration-2 decoration-blue-400 dark:decoration-blue-600">trust</span>, delivering <span className="underline underline-offset-3 decoration-2 decoration-blue-400 dark:decoration-blue-600">quality</span>, and growing your <span className="underline underline-offset-3 decoration-2 decoration-blue-400 dark:decoration-blue-600">business</span>
              </p>
            </div>
      
            <div className="col-1 w-full space-y-10 space-x-4">
              <div className="gap-4 space-y-2 space-x-10" >
                <div className="col-span-6 space-y-2 p-4">
                  <h3 className="text-lg leading-none font-large">Built for industry <span className="underline underline-offset-3 decoration-2 decoration-blue-400 dark:decoration-blue-600">quality</span> standards:</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {standards.map((standards) => (
                    <Item variant="outline" className = "bg-white shadow-sm p-2" key={standards.id}>
                      <ItemHeader>
                        <ItemContent className="text-center">{standards.title}</ItemContent>
                      </ItemHeader>
                    </Item>
                  ))}
              </div>
            </div>
          </div>
      </div>
   {/*    <Separator className="space-y-2"/>
      
      <div className="w-full space-y-2 max-w-7xl mx-auto">

        <h1 className="w-full text-4xl sm:text-4xl font-bold flex-wrap items-center justify-center text-center sm:text-center max-w-4xl mx-auto">
        One platform to manage all compliance activities:</h1>
        <p className="max-w-4xl justify-center text-center align-middle mx-auto">
          AI agents extract data from manufacturing systems to generate and maintain compliance documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto my-w-2xl max-w-5xl">
                  {services.map((services) => (
                    <Item variant="outline" className = "bg-white p-4 w-full shadow-md" key={services.id}>
                      <ItemHeader>
                        <ItemTitle className= "text-2xl text-center">{services.title}</ItemTitle>
                      </ItemHeader>
                      <ItemMedia>
                        <BadgeCheckIcon className="size-5" />
                      </ItemMedia>
                      <ItemContent>
                        {services.content}
                      </ItemContent>
                    </Item>
                  ))}
              </div> */}

      <Separator/>

      <div className="w-full grid grid-flow-col grid grid-col-2 gap-8  max-w-7xl mx-auto">
        <h1 className="col-start-1 text-4xl sm:text-4xl font-bold flex-wrap items-left justify-left text-left sm:text-left max-w-3xl">
        Why Parallel.OS?</h1>
        <div>
          <div className="space-y-4">
            <h3 className="text-lg leading-none font-large">Ready out-of-the-box</h3>
            <p className="text-muted-foreground text-sm">
              Built to work on top of your existing systems <br/> no extensive setup or configuration needed.
            </p>
          </div>
          <Separator className="my-4" />
                    <div className="space-y-4">
            <h3 className="text-lg leading-none font-large">Transparent Pricing</h3>
            <p className="text-muted-foreground text-sm">
              No hidden fees or surprise costs - pricing that aligns <br/> with the value we add to your business
            </p>
          </div>
          <Separator className="my-4" />
                    <div className="space-y-4">
            <h3 className="text-lg leading-none font-large">Built by Manufacturers</h3>
            <p className="text-muted-foreground text-sm">
              We believe technology needs to adapt to <br/> the way manufacturers work, not the other way around.
            </p>
          </div>
        </div>
        </div>
        <Separator className="my-4" />
        
        <div className="w-full max-w-7xl mx-auto">

        <h1 className="w-full text-4xl sm:text-4xl font-bold flex-wrap items-center justify-center text-center sm:text-center max-w-4xl mx-auto">
        Join a pilot!</h1>
        <p className="max-w-4xl justify-center text-center align-middle mx-auto">
          Become an early partner and help us shape the future <br/> of compliance at SMB manufacturers.
        </p>
        <div className="flex justify-center mt-6">
            <Button asChild variant="outline">
              <a href="mailto:contact@parallelos.co">Contact Us</a>
            </Button>
        </div>
      </div>
      </main>
    </div>
  );
}
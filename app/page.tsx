import { Separator } from "@/components/ui/separator"
import { BadgeCheckIcon } from "lucide-react"
import Link from 'next/link'
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

import { 
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card"

const standards = [
  { id: 1, title: "ISO 9001"},
  { id: 2, title: "ASME NQA-1"},
  { id: 3, title: "AS 9100"},
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
      <div className="w-full space-y-10 space-x-20 max-w-7xl mx-auto">
            <div className="w-full space-y-8 flex-wrap items-center justify-center text-center sm:text-center">
              <h1 className="text-4xl mt-24 space-x-20 md:text-6xl lg:text-7xl">
                 Automation for<br/>Manufacturing Ops </h1>
              <p className="max-w-150 md:text-md lg:text-xl mx-auto text-center">
                Parallel OS is the operating system to help SMB manufacturers automate workflows to reduce costs, grow revenue and build trust.
              </p>
              <Button asChild size = "lg" variant="outline_blue" className="mt-6">
                <Link href="contact@parallelos.co">Join a Pilot</Link>
              </Button>
            </div>
      </div>

      <Separator className="my-4" />

   <div className="w-full mt-8 grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-8  max-w-7xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-lg leading-none font-large">Ready out-of-the-box</h3>
            <p className="text-muted-foreground text-sm">
              Built to work on top of your existing systems <br/> no extensive setup or configuration needed.
            </p>
          </div>
                    <div className="space-y-4">
            <h3 className="text-lg leading-none font-large">Transparent Pricing</h3>
            <p className="text-muted-foreground text-sm">
              No hidden fees or surprise costs - pricing that aligns <br/> with the value we add to your business
            </p>
          </div>
                    <div className="space-y-4">
            <h3 className="text-lg leading-none font-large">Built by Manufacturers</h3>
            <p className="text-muted-foreground text-sm">
              We believe technology needs to adapt to <br/> the way manufacturers work, not the other way around.
            </p>
          </div>
        </div>
<Separator className="my-4" />
      
      <div className="w-full space-y-10 space-x-20 max-w-7xl mx-auto">
          <div className="w-full space-y-8 flex-wrap items-center justify-center text-center sm:text-center">
            <h1 className="text-2xl mt-18 space-x-20 md:text-2xl lg:text-4xl">
              One integrated platform <br/>to manage all worklfows</h1>
              <div className="grid mb-8 mt-24 md:mb-12 lg:grid-cols-2">
                    <figure className="flex flex-col bg-gray-100 justify-center p-8 rounded-t-base md:rounded-t-none md:rounded-ss-base md:border-e">
                      <h3 className="text-3xl text-left pl-8">Knowledge Assistant</h3>
                      <p className="text-muted-foreground text-left text-md m-w-1/3 pl-8 pt-8">
                        Spend less time finding and analyzing internal data. Access all of your company data from one centralized platform with natural language.
                      </p>
                    </figure>
                    <figure className="flex flex-col bg-gray-200 p-8 rounded-t-base md:rounded-t-none md:rounded-ss-base md:border-e">
                    
                      <div className="mt-6 flex md: flex-1 justify-center">
                        <img src="/assistant2.svg" alt="Assistant"  />
                      </div>
                    
                    </figure>
              </div>
          </div>

      <div className="grid mb-8 mt-8 md:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col bg-gray-200 p-8 rounded-t-base md:rounded-t-none md:rounded-ss-base md:border-e">
            <div className="mt-6 flex justify-center">
              <img src="/examples.svg" alt="Examples" />
            </div>
          </figure>
          <figure className="flex flex-col bg-gray-100 justify-center p-8 text-center rounded-t-base md:rounded-t-none md:rounded-ss-base md:border-e">
            <h3 className="text-3xl text-left pl-8 items-left">Workflow Automation</h3>
            <p className="text-muted-foreground text-left text-md pl-8 pt-8 m-w-1/3 items-left">
              Create custom automations to manage your existing workflows: from compliance and quality to production planning and cost estimation. 
            </p>
          </figure>
      </div>
      </div>
      </main>
    </div>
  );
}
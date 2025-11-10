
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"

export default function Contact() {
  return (
    <div className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)
     grid grid-flow-col grid-rows-1 gap-4 items-start justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-[64px] row-start-1 items-start">  
            <div className="grid grid-flow-col grid grid-col-1 gap-8  max-w-3xl">
              <h1 className="col-start-1 text-4xl sm:text-4xl font-bold flex-wrap items-center justify-center text-center sm:text-center max-w-3xl">
              Partner with us!</h1>
              <p className="col-start-1 max-w-2xl justify-center text-center align-middle">
                Become an early partner and help us shape the future <br/> of compliance at SMB manufacturers.
              </p>
            </div>

          <div className="w-full max-w-md space-y-6">
            <FieldSet>
              <FieldGroup>
                <div className="grid grid-cols-2 gap-2">
                  <Field>
                    <Input className="bg-white" id="first name" type="text" placeholder="First Name" />
                  </Field>
                  <Field>
                    <Input className="bg-white" id="last name" type="text" placeholder="Last Name" />
                  </Field>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Field>
                    <Input className="bg-white" id="company" type="text" placeholder="Company" />
                  </Field>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Field>
                    <Input className="bg-white" id="phone" type="phone number" placeholder="Phone Number" />
                  </Field>
                  <Field>
                    <Input className="bg-white" id="email" type="email" placeholder="Email" />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>

            <Button type="submit" variant="outline" className="w-full">
              Start a Pilot
            </Button>
          </div>
      </main>
    </div>
  );
}
"use client"

import { useState } from "react"
import { Plane } from "lucide-react"

import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { RadioButton } from 'primereact/radiobutton'
import { Dropdown } from 'primereact/dropdown'
import { TabView, TabPanel } from 'primereact/tabview'

export function QuoteForm() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [aircraftType, setAircraftType] = useState('single')

  const packageOptions = [
    { label: 'Essential Detail', value: 'essential' },
    { label: 'Premium Detail', value: 'premium' },
    { label: 'Diamond Detail', value: 'diamond' },
    { label: 'Urgent Detail', value: 'urgent' },
    { label: 'Custom Package', value: 'custom' }
  ]

  const header = (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Request a Quote</h2>
      <p className="mt-4 text-lg text-gray-400">Tell us about your aircraft and detailing needs</p>
      <div className="mt-4 inline-flex items-center gap-2 bg-red-600/20 px-4 py-2 rounded-full border border-red-400/30">
        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
        <span className="text-red-200 font-medium text-sm">Urgent & same-day service available</span>
      </div>
    </div>
  )

  const customFormHeader = (
    <div className="flex items-center gap-2">
      <Plane className="h-5 w-5" />
      <h3 className="text-lg font-semibold">Aircraft Details</h3>
      <p className="text-sm text-gray-700 ml-auto">Fill out the form below for a custom quote</p>
    </div>
  )

  const googleFormHeader = (
    <div>
      <h3 className="text-lg font-semibold">Google Form</h3>
      <p className="text-sm text-gray-700">Fill out our Google Form for a detailed quote</p>
    </div>
  )

  return (
    <section id="quote" className="py-20 bg-navy-900 text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          {header}

          <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
            <TabPanel header="Custom Form" className="text-black">
              <Card className="border-white/10 bg-black/30 text-white">
                <div className="p-4">
                  {customFormHeader}
                  <form className="space-y-6 mt-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium block">Full Name</label>
                        <InputText
                          id="name"
                          placeholder="John Doe"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium block">Email</label>
                        <InputText
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium block">Phone Number</label>
                        <InputText
                          id="phone"
                          placeholder="(123) 456-7890"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-medium block">Location/Airport</label>
                        <InputText
                          id="location"
                          placeholder="KTRK - Truckee Tahoe Airport"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium block">Aircraft Type</label>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <RadioButton
                            inputId="single"
                            name="aircraftType"
                            value="single"
                            onChange={(e) => setAircraftType(e.value)}
                            checked={aircraftType === 'single'}
                          />
                          <label htmlFor="single" className="cursor-pointer">Single Engine</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioButton
                            inputId="twin"
                            name="aircraftType"
                            value="twin"
                            onChange={(e) => setAircraftType(e.value)}
                            checked={aircraftType === 'twin'}
                          />
                          <label htmlFor="twin" className="cursor-pointer">Twin Engine</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioButton
                            inputId="turboprop"
                            name="aircraftType"
                            value="turboprop"
                            onChange={(e) => setAircraftType(e.value)}
                            checked={aircraftType === 'turboprop'}
                          />
                          <label htmlFor="turboprop" className="cursor-pointer">Turboprop</label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioButton
                            inputId="jet"
                            name="aircraftType"
                            value="jet"
                            onChange={(e) => setAircraftType(e.value)}
                            checked={aircraftType === 'jet'}
                          />
                          <label htmlFor="jet" className="cursor-pointer">Jet</label>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="make" className="text-sm font-medium block">Aircraft Make</label>
                        <InputText
                          id="make"
                          placeholder="Cessna, Cirrus, Gulfstream, etc."
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="model" className="text-sm font-medium block">Aircraft Model</label>
                        <InputText
                          id="model"
                          placeholder="172, SR22, G650, etc."
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="package" className="text-sm font-medium block">Desired Package</label>
                        <Dropdown
                          id="package"
                          options={packageOptions}
                          placeholder="Select a package"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="urgency" className="text-sm font-medium block">Service Urgency</label>
                        <Dropdown
                          id="urgency"
                          options={[
                            { label: 'Standard (3-7 days)', value: 'standard' },
                            { label: 'Priority (1-2 days)', value: 'priority' },
                            { label: 'Urgent (Same day)', value: 'urgent' },
                            { label: 'ASAP (Within hours)', value: 'asap' }
                          ]}
                          placeholder="Select urgency level"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium block">Additional Details</label>
                      <InputTextarea
                        id="message"
                        placeholder="Tell us about any specific areas of concern, special requests, or urgent timeline requirements..."
                        className="w-full min-h-[100px]"
                        rows={5}
                      />
                    </div>

                    <Button label="Submit Quote Request" className="w-full" />
                  </form>
                </div>
              </Card>
            </TabPanel>

            <TabPanel header="Google Form" className="text-black">
              <Card className="border-white/10 bg-black/30 text-white">
                <div className="p-4">
                  {googleFormHeader}
                  <div className="mt-4 aspect-video w-full rounded-md overflow-hidden bg-white">
                    {/* Replace with actual Google Form embed code */}
                    <div className="h-full w-full flex items-center justify-center text-black">
                      <p className="text-center">
                        Google Form would be embedded here.
                        <br />
                        Replace with actual embed code.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </section>
  )
}

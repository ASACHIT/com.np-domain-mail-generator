import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { useToPng } from '@hugocxl/react-to-image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'

function App() {

  const [_, convertToJpeg, letterref] = useToPng<HTMLDivElement>({
    quality: 0.95,
    backgroundColor: 'white',
    // generate a4 size
    width: 794,
    height: 1123,
    onSuccess: data => {
      const link = document.createElement('a')
      link.href = data
      link.download = 'letter.jpeg'
      link.click()
    }
  })
  const [companyName, setCompanyName] = useState('Company Name')
  const [domainName, setDomainName] = useState('protozoahost.com.np')
  const [primaryNameServer, setPrimaryNameServer] = useState('ns1.protozoahost.com')
  const [secondaryNameServer, setSecondaryNameServer] = useState('ns2.protozoahost.com')
  const [name, setName] = useState('Protu')
  const [address, setAddress] = useState('Kathmandu, Nepal')
  const date = new Date().toLocaleDateString()


  return (
    <>
      <div className="w-5/6 mt-5 md:mt-0">
        {/* input section */}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <div className="flex flex-col gap-4">
            <Tabs defaultValue='individual' className='w-full'>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="individual">individual</TabsTrigger>
                <TabsTrigger value="Business">Business</TabsTrigger>
              </TabsList>
              <TabsContent value="individual">
                <ForIndividual {...{ setDomainName, setPrimaryNameServer, setSecondaryNameServer, setName, setAddress }} />
              </TabsContent>

              <TabsContent value='Business'>
                <ForBusiness {...{ setcompanyName: setCompanyName, setDomainName, setPrimaryNameServer, setSecondaryNameServer, setName, setAddress }} />
              </TabsContent>
            </Tabs>

            <Button onClick={convertToJpeg}>Generate JPEG</Button>
          </div>

          {/* output section */}
          <Card className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4' >
            <div className="md:flex" ref={letterref} >
              <div className="p-14 flex flex-col gap-6">
                <div className="h-16"></div>
                <div className="uppercase tracking-wide text-sm text-black-500 font-normal w-full text-right">Date: {date}</div>
                <p className="block mt-1  font-normal text-gray-600 leading-6">
                  To,<br />
                  The Hostmaster,<br />
                  Mercantile Communication Pvt. Ltd.,<br />
                  Durbar Marg, Kathmandu
                </p>
                <p className="mt-2 text-gray-500">
                  Subject: NP Domain Registration
                </p>
                <p className="mt-2 text-gray-600">
                  Dear Sir/Madam,<br />
                  <br />
                  {companyName ? "I am writing this letter to request you to kindly register a domain for our company . I have provided our company registration certificate and PAN Card with this letter. I would be very glad if you approve my domain registration request." : " I am writing this letter to request you to kindly register a domain for me based on my name. I have provided my personal details, and also attached a scanned copy of my citizenship with this letter. I would be very glad if you approve my domain registration request."}

                </p>
                <p className="mt-2 text-gray-600">
                  Thank you very much for consideration. I look forward to hearing from you soon.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  <li>Domain name: {domainName}</li>
                  <li>Primary Name Server: {primaryNameServer}</li>
                  <li>Secondary Name Server:{secondaryNameServer}</li>
                </ul>
                <div className="footer">

                  <p className="mt-2 text-gray-600">
                    Sincerely, <br />
                    Name: {name} <br />
                    Address: {address}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default App


interface ForIndividualProps {
  setDomainName: (value: string) => void
  setPrimaryNameServer: (value: string) => void
  setSecondaryNameServer: (value: string) => void
  setName: (value: string) => void
  setAddress: (value: string) => void
}
interface ForBusinessProps {
  setcompanyName: (value: string) => void
  setDomainName: (value: string) => void
  setPrimaryNameServer: (value: string) => void
  setSecondaryNameServer: (value: string) => void
  setName: (value: string) => void
  setAddress: (value: string) => void
}

function ForIndividual({ setDomainName, setPrimaryNameServer, setSecondaryNameServer, setName, setAddress }: ForIndividualProps) {
  return (
    <>
      <Card className='w-96 flex flex-col gap-4 p-6'>
        <div className="dn">
          <CardTitle className='my-3'>Domain Name</CardTitle>
          <Input type='text' placeholder='protozoahost.com.np' onChange={(e) => { setDomainName(e.target.value) }} />
        </div>
        <div className="pns">
          <CardTitle className='my-3'>Primary NameServer</CardTitle>
          <Input type='text' placeholder='ns1.protoahost.com' onChange={(e) => { setPrimaryNameServer(e.target.value) }} />
        </div>
        <div className="sns">
          <CardTitle className='my-3'>Secondary name Server</CardTitle>
          <Input type='text' placeholder='n2.protozoahost.com' onChange={(e) => { setSecondaryNameServer(e.target.value) }} />
        </div>
        <div className="name">
          <CardTitle className='my-3'>Your Name</CardTitle>
          <Input type='text' placeholder='your name' onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div className="add">
          <CardTitle className='my-3'>Your Address</CardTitle>
          <Input type='text' placeholder='Kathmandu' onChange={(e) => { setAddress(e.target.value) }} />
        </div>
      </Card>
    </>
  )
}
function ForBusiness({ setcompanyName, setDomainName, setPrimaryNameServer, setSecondaryNameServer, setName, setAddress }: ForBusinessProps) {
  return (
    <>
      <Card className='w-96 flex flex-col gap-4 p-6'>
        <div className="dn">
          <CardTitle className='my-3'>Company Name</CardTitle>
          <Input type='text' placeholder='Protozoa Host Pvt. Ltd' onChange={(e) => { setcompanyName(e.target.value) }} />
        </div>
        <div className="dn">
          <CardTitle className='my-3'>Domain Name</CardTitle>
          <Input type='text' placeholder='protozoahost.com.np' onChange={(e) => { setDomainName(e.target.value) }} />
        </div>
        <div className="pns">
          <CardTitle className='my-3'>Primary NameServer</CardTitle>
          <Input type='text' placeholder='ns1.protoahost.com' onChange={(e) => { setPrimaryNameServer(e.target.value) }} />
        </div>
        <div className="sns">
          <CardTitle className='my-3'>Secondary name Server</CardTitle>
          <Input type='text' placeholder='n2.protozoahost.com' onChange={(e) => { setSecondaryNameServer(e.target.value) }} />
        </div>
        <div className="name">
          <CardTitle className='my-3'>Your Name</CardTitle>
          <Input type='text' placeholder='your name' onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div className="add">
          <CardTitle className='my-3'>Your Address</CardTitle>
          <Input type='text' placeholder='Kathmandu' onChange={(e) => { setAddress(e.target.value) }} />
        </div>
      </Card>
    </>
  )
}
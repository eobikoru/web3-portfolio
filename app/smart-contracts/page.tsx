import { Footer } from "@/src/components/footer";
import { Navbar } from "@/src/components/navbar";
import { SmartContracts } from "@/src/components/smart-contracts";


export default function SmartContractsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <SmartContracts />
      </div>
      <Footer />
    </main>
  )
}

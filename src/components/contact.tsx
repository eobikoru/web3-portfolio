import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-sm font-medium">
            Contact
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-background/50 border-border" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-background/50 border-border" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" className="bg-background/50 border-border" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} className="bg-background/50 border-border" />
              </div>

              <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <Card className="bg-secondary/10 border-border hover:bg-secondary/20 transition-colors">
                <CardContent className="flex items-start p-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mr-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">emekadaniel916@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/10 border-border hover:bg-secondary/20 transition-colors">
                <CardContent className="flex items-start p-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mr-3">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">+234 701 753 9913</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/10 border-border hover:bg-secondary/20 transition-colors">
                <CardContent className="flex items-start p-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 mr-3">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">Lagos , Nigeria</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/10 border-border hover:bg-secondary/20 transition-colors">
                <CardContent className="p-6">
                  <h4 className="font-medium mb-3">Availability</h4>
                  <p className="text-muted-foreground mb-2">
                    I'm currently available for freelance work and consulting.
                  </p>
                  <p className="text-muted-foreground">
                    Response time: <span className="font-medium text-foreground">Within 24 hours</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


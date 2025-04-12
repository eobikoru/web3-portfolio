"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
      isValid = false
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  type FormField = "name" | "email" | "subject" | "message"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    const fieldName = id as FormField

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }))

    // Clear error when user types
    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "",
      }))
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const service_id = "service_omc1mbn"
    const template_id = "template_exj2pod"
    const publicKey = "PYPtHROMI9zP1upDE"

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "ObikoruCv",
      subject: formData.subject,
      message: `name: ${formData?.name} ,  email: ${formData?.email} ,  subject: ${formData?.subject}  , messsage: ${formData.message}`,
    }
   
    emailjs
      .send(service_id, template_id, templateParams, publicKey)
      .then((response) => {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error("Error sending email:", error)
        toast({
          title: "Failed to send message",
          description: "Please try again later or contact me directly via email.",
          variant: "destructive",
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className={`bg-background/50 border-border ${errors.name ? "border-red-500" : ""}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className={`bg-background/50 border-border ${errors.email ? "border-red-500" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className={`bg-background/50 border-border ${errors.subject ? "border-red-500" : ""}`}
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className={`bg-background/50 border-border ${errors.message ? "border-red-500" : ""}`}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
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
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
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

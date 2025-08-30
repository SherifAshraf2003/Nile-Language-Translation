"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/app/hooks/use-toast";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    serviceType: "",
    date: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Request Submitted!",
      description:
        "Thank you for your request. We'll get back to you within 24 hours.",
    });
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      serviceType: "",
      date: "",
      location: "",
      message: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      serviceType: value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@nlsindy.com",
      description: "Send us an email anytime",
    },
    {
      icon: MapPin,
      title: "Service Area",
      content: "Indiana (Onsite) • Worldwide (Virtual)",
      description: "Flexible service options",
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      description: "Quick and reliable communication",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-sand">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let&apos;s Connect!
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to book an interpreter or have questions about our services?
            We&apos;re here to help you communicate clearly and professionally.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="shadow-card border-0 text-center">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-4 mx-auto">
                      <IconComponent className="h-8 w-8 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-ochre font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-beige-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Request an Interpreter
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and we&apos;ll respond promptly with
                availability and next steps.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground flex items-center">
                      <MessageCircle className="h-6 w-6 mr-2 text-ochre" />
                      Interpreter Request Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="organization">Organization</Label>
                          <Input
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            placeholder="Hospital, law firm, business, etc."
                            className="mt-2"
                          />
                        </div>
                      </div>

                      {/* Service Details */}
                      <div>
                        <Label htmlFor="serviceType">
                          Type of Service Needed *
                        </Label>
                        <Select onValueChange={handleSelectChange} required>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="onsite-medical">
                              Onsite Medical Interpretation
                            </SelectItem>
                            <SelectItem value="onsite-legal">
                              Onsite Legal Interpretation
                            </SelectItem>
                            <SelectItem value="onsite-business">
                              Onsite Business Interpretation
                            </SelectItem>
                            <SelectItem value="onsite-education">
                              Onsite Educational Interpretation
                            </SelectItem>
                            <SelectItem value="virtual-medical">
                              Virtual Medical Interpretation
                            </SelectItem>
                            <SelectItem value="virtual-legal">
                              Virtual Legal Interpretation
                            </SelectItem>
                            <SelectItem value="virtual-business">
                              Virtual Business Interpretation
                            </SelectItem>
                            <SelectItem value="virtual-conference">
                              Virtual Conference/Event
                            </SelectItem>
                            <SelectItem value="other">
                              Other (Please specify in message)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="date">Preferred Date</Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Location/Platform</Label>
                          <Input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="Address or virtual platform"
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Additional Details</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please provide any additional details about your interpretation needs, duration, special requirements, etc."
                          className="mt-2"
                          rows={5}
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        className="w-full"
                      >
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact */}
              <div className="space-y-6">
                <Card className="shadow-card border-0 bg-ochre text-background">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">
                      Need Immediate Assistance?
                    </h3>
                    <p className="text-ochre-light mb-4">
                      For urgent interpretation needs or general questions,
                      reach out directly:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3" />
                        <span>info@nlsindy.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      What Happens Next?
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-ochre text-background rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                          1
                        </div>
                        <p>We review your request within 24 hours</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-ochre text-background rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                          2
                        </div>
                        <p>We confirm availability and provide a quote</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-ochre text-background rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                          3
                        </div>
                        <p>We match you with the perfect interpreter</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-sand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Let&apos;s Connect!
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Ready to book an interpreter or have questions about our services?
            We&apos;re here to help you communicate clearly and professionally.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="shadow-card border-0 text-center">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-hero rounded-2xl mb-3 sm:mb-4 mx-auto">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-foreground" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-ochre font-medium mb-1 text-sm sm:text-base">
                      {info.content}
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-beige-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Request an Interpreter
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Fill out the form below and we&apos;ll respond promptly with
                availability and next steps.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-foreground flex items-center">
                      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-ochre" />
                      Interpreter Request Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-6"
                    >
                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <Label
                            htmlFor="fullName"
                            className="text-sm sm:text-base"
                          >
                            Full Name *
                          </Label>
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
                          <Label
                            htmlFor="email"
                            className="text-sm sm:text-base"
                          >
                            Email Address *
                          </Label>
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <Label
                            htmlFor="phone"
                            className="text-sm sm:text-base"
                          >
                            Phone Number *
                          </Label>
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
                          <Label
                            htmlFor="organization"
                            className="text-sm sm:text-base"
                          >
                            Organization
                          </Label>
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
                        <Label
                          htmlFor="serviceType"
                          className="text-sm sm:text-base"
                        >
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

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <Label
                            htmlFor="date"
                            className="text-sm sm:text-base"
                          >
                            Preferred Date
                          </Label>
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
                          <Label
                            htmlFor="location"
                            className="text-sm sm:text-base"
                          >
                            Location/Platform
                          </Label>
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
                        <Label
                          htmlFor="message"
                          className="text-sm sm:text-base"
                        >
                          Additional Details
                        </Label>
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
              <div className="space-y-4 sm:space-y-6">
                <Card className="shadow-card border-0 bg-ochre text-background">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                      Need Immediate Assistance?
                    </h3>
                    <p className="text-sm sm:text-base text-ochre-light mb-3 sm:mb-4">
                      For urgent interpretation needs or general questions,
                      reach out directly:
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                        <span className="text-sm sm:text-base">
                          info@nlsindy.com
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                      What Happens Next?
                    </h3>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-start">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ochre text-background rounded-full flex items-center justify-center text-xs font-bold mr-2 sm:mr-3 mt-0.5">
                          1
                        </div>
                        <p>We review your request within 24 hours</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ochre text-background rounded-full flex items-center justify-center text-xs font-bold mr-2 sm:mr-3 mt-0.5">
                          2
                        </div>
                        <p>We confirm availability and provide a quote</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ochre text-background rounded-full flex items-center justify-center text-xs font-bold mr-2 sm:mr-3 mt-0.5">
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

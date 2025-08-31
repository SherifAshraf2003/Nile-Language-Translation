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
import { Mail, MapPin, Clock, MessageCircle, Phone } from "lucide-react";

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
      title: "Email & Phone",
      content: "info@nlsindy.com",
      phone1: "+1 (765) 586-4317",
      phone2: "+1 (765) 532-4052",
      description: "Send us an email or call anytime",
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
      content: "Within a couple hours",
      description: "Quick and reliable communication",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-beige-dark via-beige-light to-beige-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-ochre/10 via-transparent to-sand/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-text-primary via-ochre to-text-primary bg-clip-text text-transparent leading-tight">
              Ready to Connect?
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4">
              Have questions about our interpretation services or ready to book
              an interpreter? We&apos;re here to help you communicate clearly
              and professionally across all languages.
            </p>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-10">
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <Mail className="h-5 w-5 text-ochre mr-3" />
                <span className="text-text-primary font-medium">
                  Email: info@nlsindy.com
                </span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="h-5 w-5 text-ochre mr-3" />
                <span className="text-text-primary font-medium">
                  Call: +1 (765) 586-4317
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center space-x-4 opacity-20">
              <div className="w-16 h-16 rounded-full bg-ochre/30"></div>
              <div className="w-12 h-12 rounded-full bg-sand/30 mt-4"></div>
              <div className="w-20 h-20 rounded-full bg-ochre/20"></div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Information */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div className="group">
                  <Card
                    key={index}
                    className="h-full shadow-2xl hover:shadow-3xl transition-all duration-500 bg-beige-dark backdrop-blur-sm overflow-hidden relative border-2 border-amber-500 text-center"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

                    <CardContent className="p-8 sm:p-10 relative z-10">
                      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-[#e3d7c6] rounded-2xl mb-6 sm:mb-8 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                        <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-black" />
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-ochre font-medium mb-1 text-sm sm:text-base">
                        {info.content}
                      </p>
                      {info.phone1 && (
                        <>
                          <p className="text-ochre font-medium mb-1 text-sm sm:text-base">
                            {info.phone1}
                          </p>
                          <p className="text-ochre font-medium mb-1 text-sm sm:text-base">
                            {info.phone2}
                          </p>
                        </>
                      )}
                      <p className="text-muted-foreground text-xs sm:text-sm lg:text-base">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
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
                Do you have a Question ?
              </h2>
              <h3 className=" text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-amber-400 font-bold mb-3 sm:mb-4">
                Contact Us
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4">
                If you need a Quote or want to contact us please send us a
                message or call us.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Fill out the form below and we&apos;ll respond promptly with
                availability and next steps.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 bg-beige-dark backdrop-blur-sm overflow-hidden relative border-2 border-amber-500">
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
                        className="w-full text-white"
                      >
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact */}
              <div className="space-y-4 sm:space-y-6">
                <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 bg-ochre text-background overflow-hidden relative border-2 border-amber-500">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                      Need Immediate Assistance?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-100 mb-3 sm:mb-4">
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
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                        <span className="text-sm sm:text-base">
                          +1 (765) 586-4317
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                        <span className="text-sm sm:text-base">
                          +1 (765) 532-4052
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 bg-beige-dark backdrop-blur-sm overflow-hidden relative border-2 border-amber-500">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                      What Happens Next?
                    </h3>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-start">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-ochre text-background rounded-full flex items-center justify-center text-xs font-bold mr-2 sm:mr-3 mt-0.5">
                          1
                        </div>
                        <p>We review your request within a couple hours</p>
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
                        <p>We match you with a dedicated interpreter</p>
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

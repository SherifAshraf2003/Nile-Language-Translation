"use client";
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/app/hooks/use-toast";
import { Upload, Users, Award, Globe, Heart } from "lucide-react";

const JoinTeam = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    certifications: "",
    languages: "",
    availability: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Application Submitted!",
      description:
        "Thank you for your interest. We'll review your application and get back to you soon.",
    });
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      certifications: "",
      languages: "",
      availability: "",
      additionalInfo: "",
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

  const benefits = [
    {
      icon: Users,
      title: "Growing Network",
      description:
        "Join a professional team dedicated to connecting voices across communities.",
    },
    {
      icon: Award,
      title: "Professional Development",
      description:
        "Opportunities for continued education and certification advancement.",
    },
    {
      icon: Globe,
      title: "Flexible Work",
      description:
        "Choose from onsite assignments in Indiana or virtual interpretation worldwide.",
    },
    {
      icon: Heart,
      title: "Meaningful Impact",
      description:
        "Make a real difference by helping people communicate in critical moments.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-sand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Join Our Team
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Are you a skilled interpreter looking for new opportunities? Join
            Nile Language Services and become part of a growing network
            dedicated to connecting voices.
          </p>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              What We&apos;re Looking For
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              We&apos;re seeking interpreters with experience in medical, legal,
              business, and community interpretation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-lg transition-shadow duration-300 border-0 text-center"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-hero rounded-2xl mb-3 sm:mb-4 mx-auto">
                      <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-foreground" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-12 sm:py-16 lg:py-20 bg-beige-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Apply Now - It&apos;s Easy
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                Fill out the form below and upload your resume to get started.
              </p>
            </div>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-center text-foreground">
                  Interpreter Application
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Personal Information */}
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
                      <Label htmlFor="email" className="text-sm sm:text-base">
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

                  <div>
                    <Label htmlFor="phone" className="text-sm sm:text-base">
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

                  {/* Professional Information */}
                  <div>
                    <Label
                      htmlFor="experience"
                      className="text-sm sm:text-base"
                    >
                      Years of Interpretation Experience *
                    </Label>
                    <Input
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 3 years"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="certifications"
                      className="text-sm sm:text-base"
                    >
                      Certifications
                    </Label>
                    <Textarea
                      id="certifications"
                      name="certifications"
                      value={formData.certifications}
                      onChange={handleInputChange}
                      placeholder="List any relevant certifications (CCHI, BTG, etc.)"
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="languages" className="text-sm sm:text-base">
                      Languages & Specializations
                    </Label>
                    <Textarea
                      id="languages"
                      name="languages"
                      value={formData.languages}
                      onChange={handleInputChange}
                      placeholder="Languages you interpret and any specialized areas (medical, legal, business, etc.)"
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="availability"
                      className="text-sm sm:text-base"
                    >
                      Availability
                    </Label>
                    <Textarea
                      id="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      placeholder="Your availability preferences (days, times, onsite vs virtual)"
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <Label className="text-sm sm:text-base">
                      Resume/CV Upload
                    </Label>
                    <div className="mt-2 border-2 border-dashed border-border rounded-lg p-4 sm:p-6 lg:p-8 text-center hover:border-ochre transition-colors">
                      <Upload className="h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-3 sm:mb-4" />
                      <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                        Click to upload your resume or drag and drop
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                        PDF, DOC, or DOCX up to 10MB
                      </p>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="additionalInfo"
                      className="text-sm sm:text-base"
                    >
                      Additional Information
                    </Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Anything else you'd like us to know about your background or experience"
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 lg:py-20 bg-ochre text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            Questions About Joining?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-background/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            We&apos;re here to help! Contact us if you have any questions about
            interpreter opportunities or the application process.
          </p>
          <div className="space-y-2 text-background/80">
            <p className="text-sm sm:text-base">Email: info@nlsindy.com</p>
            <p className="text-sm sm:text-base">
              We&apos;ll respond to all inquiries within 24 hours
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinTeam;

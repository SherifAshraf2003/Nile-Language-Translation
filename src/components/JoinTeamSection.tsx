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
      <section className="py-20 bg-gradient-sand">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Are you a skilled interpreter looking for new opportunities? Join
            Nile Language Services and become part of a growing network
            dedicated to connecting voices.
          </p>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We&apos;re Looking For
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We&apos;re seeking interpreters with experience in medical, legal,
              business, and community interpretation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="shadow-card hover:shadow-lg transition-shadow duration-300 border-0 text-center"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-4 mx-auto">
                      <IconComponent className="h-8 w-8 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
      <section className="py-20 bg-beige-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Apply Now - It&apos;s Easy
              </h2>
              <p className="text-muted-foreground text-lg">
                Fill out the form below and upload your resume to get started.
              </p>
            </div>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-foreground">
                  Interpreter Application
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
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

                  {/* Professional Information */}
                  <div>
                    <Label htmlFor="experience">
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
                    <Label htmlFor="certifications">Certifications</Label>
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
                    <Label htmlFor="languages">
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
                    <Label htmlFor="availability">Availability</Label>
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
                    <Label>Resume/CV Upload</Label>
                    <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-stone-green transition-colors">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Click to upload your resume or drag and drop
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        PDF, DOC, or DOCX up to 10MB
                      </p>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">
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
      <section className="py-20 bg-stone-green text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Joining?
          </h2>
          <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
            We&apos;re here to help! Contact us if you have any questions about
            interpreter opportunities or the application process.
          </p>
          <div className="space-y-2 text-background/80">
            <p>Email: info@nlsindy.com</p>
            <p>We&apos;ll respond to all inquiries within 24 hours</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinTeam;

import { Navbar } from "./components/navbar";
import { CompetencyCard } from "./components/competency-card";
import { IndustryCard } from "./components/industry-card";
import { ProcessStep } from "./components/process-step";
import { Badge } from "./components/badge";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  Cpu,
  Lock,
  Layers,
  Zap,
  Activity,
  Eye,
  Shield,
  Target,
  MonitorCheck,
  Settings,
  Hammer,
  Scissors,
  Shirt,
  Paintbrush,
  Droplets,
  Grid3x3,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Download,
  Play
} from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0"></div>
        <div
          className="absolute inset-0 opacity-5 z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23071C2C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-[#071C2C] mb-6">
                Universal Plug-and-Play Edge Quality Control for Every Fabric, Every Machine, Everywhere.
              </h1>
              <p className="text-gray-600 text-xl mb-8">
                Predictable hardware-powered defect detection. Full-roll high-definition digitization.
                100% on-device performance—with zero cloud and zero integration.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="primary">Hardware Accelerated</Badge>
                <Badge variant="secondary">No Cloud Required</Badge>
                <Badge variant="accent">Universal Compatibility</Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#2E68FF] hover:bg-[#2E68FF]/90">
                  <Play className="w-5 h-5 mr-2" />
                  Request Demo
                </Button>
                <Button size="lg" variant="outline" className="border-[#071C2C] text-[#071C2C] hover:bg-[#071C2C] hover:text-white">
                  <Download className="w-5 h-5 mr-2" />
                  Download Technical Sheet
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1584269613077-1e64a0ac2779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwc2Nhbm5pbmclMjBtYWNoaW5lfGVufDF8fHx8MTc2MzgxMzYyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="FabricIRIS QC Device"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C2C]/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#11D1C2] rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#2E68FF] rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section id="competencies" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#071C2C] mb-4">
              Built on the Core Technologies That Modern Factories Actually Need.
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              FabricIRIS combines cutting-edge hardware with intelligent software to deliver
              unprecedented quality control capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CompetencyCard
              icon={<Activity className="w-6 h-6 text-white" />}
              title="Predictable Edge Intelligence"
              description="Stable, consistent performance with zero model drift."
            />
            <CompetencyCard
              icon={<Zap className="w-6 h-6 text-white" />}
              title="Ultra-Fast Processing"
              description="Instant defect detection in under 10 milliseconds—no external servers needed."
            />
            <CompetencyCard
              icon={<Layers className="w-6 h-6 text-white" />}
              title="Universal Machine Compatibility"
              description="Mount on any knitting, weaving, dyeing, finishing, printing, cutting, or garment line."
            />
            <CompetencyCard
              icon={<Lock className="w-6 h-6 text-white" />}
              title="100% On-Device Privacy"
              description="No cloud. No integration. No data sharing. Quality control stays on your floor."
            />
          </div>
        </div>
      </section>

      {/* Full-Roll Digitization Showcase */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#071C2C] mb-6">
                Full-Roll HD Digitization: Your Fabric, Captured Pixel by Pixel.
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#11D1C2] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[#071C2C] mb-1">High-definition roll scanning</h4>
                    <p className="text-gray-600">Capture every detail with precision optical sensors</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#11D1C2] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[#071C2C] mb-1">Works on greige, dyed, printed, or finished fabric</h4>
                    <p className="text-gray-600">Universal compatibility across all fabric types</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#11D1C2] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-[#071C2C] mb-1">Ideal for QC archives and disputes</h4>
                    <p className="text-gray-600">Complete digital record for quality assurance</p>
                  </div>
                </div>
              </div>

              <Button className="bg-[#071C2C] hover:bg-[#071C2C]/90">
                Learn More About HD Digitization
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <video
                  src="/src/Simple_Fabric_Inspection_Animation.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reference-Based Defect Detection Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#071C2C] mb-4">
              Consistent Quality Control Through Reference-Based Detection.
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Compare against golden standards with pixel-level precision, ensuring stable
              detection across all shifts and operators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#2E68FF]/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#2E68FF]" />
              </div>
              <h4 className="text-[#071C2C] mb-2">Golden Standard Comparison</h4>
              <p className="text-gray-600 text-sm">
                Reference your fabric against perfect samples for accurate defect identification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#2E68FF]/10 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-[#2E68FF]" />
              </div>
              <h4 className="text-[#071C2C] mb-2">Pixel-Level Deviation Mapping</h4>
              <p className="text-gray-600 text-sm">
                Detect even the smallest deviations with sub-millimeter precision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#2E68FF]/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#2E68FF]" />
              </div>
              <h4 className="text-[#071C2C] mb-2">Stable Detection Across Shifts</h4>
              <p className="text-gray-600 text-sm">
                Consistent performance 24/7, eliminating human variability and fatigue.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#2E68FF]/10 flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-[#2E68FF]" />
              </div>
              <h4 className="text-[#071C2C] mb-2">Zero Retraining Cost</h4>
              <p className="text-gray-600 text-sm">
                Zero-learning method means no retraining, recalibration, or maintenance cycles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process Flow */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#071C2C] mb-4">How It Works</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Five simple steps to transform your quality control process.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <ProcessStep
              number="1"
              icon={<Hammer className="w-8 h-8 text-white" />}
              title="Mount Device"
              description="Fits any machine in minutes."
            />

            <ProcessStep
              number="2"
              icon={<MonitorCheck className="w-8 h-8 text-white" />}
              title="Scan Fabric in Real Time"
              description="No slowdown."
            />

            <ProcessStep
              number="3"
              icon={<Cpu className="w-8 h-8 text-white" />}
              title="Hardware Analysis"
              description="Predictable intelligence at the edge."
            />

            <ProcessStep
              number="4"
              icon={<Eye className="w-8 h-8 text-white" />}
              title="Defect Highlighting"
              description="Clear visual flags on local interface."
            />

            <ProcessStep
              number="5"
              icon={<CheckCircle2 className="w-8 h-8 text-white" />}
              title="Operator Action"
              description="Instant corrections with zero technical dependency."
            />
          </div>

          <div className="bg-gradient-to-br from-[#071C2C] to-[#2E68FF] rounded-2xl p-8 text-white text-center">
            <p className="text-lg">
              Factory-ready. No programmable controllers. No servers. No calibration cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Coverage Section */}
      <section id="industries" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#071C2C] mb-4">
              One Device. The Entire Textile Factory.
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              From raw material to finished garment, FabricIRIS provides comprehensive quality control.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <IndustryCard
              icon={<Grid3x3 className="w-6 h-6 text-[#2E68FF]" />}
              title="Knitting"
              description="Real-time defect detection on circular and flat knitting machines."
            />

            <IndustryCard
              icon={<Layers className="w-6 h-6 text-[#2E68FF]" />}
              title="Weaving"
              description="Monitor warp and weft quality across all loom types."
            />

            <IndustryCard
              icon={<Droplets className="w-6 h-6 text-[#2E68FF]" />}
              title="Dyeing"
              description="Ensure color consistency and catch dye defects early."
            />

            <IndustryCard
              icon={<Activity className="w-6 h-6 text-[#2E68FF]" />}
              title="Finishing"
              description="Verify finishing quality including coating and treatment."
            />

            <IndustryCard
              icon={<Paintbrush className="w-6 h-6 text-[#2E68FF]" />}
              title="Printing"
              description="Pixel-perfect print quality verification for all patterns."
            />

            <IndustryCard
              icon={<Scissors className="w-6 h-6 text-[#2E68FF]" />}
              title="Cutting"
              description="Optimize cutting processes with defect mapping."
            />

            <IndustryCard
              icon={<Shirt className="w-6 h-6 text-[#2E68FF]" />}
              title="Garment QC"
              description="Final quality checks before shipping to customers."
            />

            <IndustryCard
              icon={<CheckCircle2 className="w-6 h-6 text-[#2E68FF]" />}
              title="Full Line Coverage"
              description="End-to-end quality assurance across your entire operation."
            />
          </div>
        </div>
      </section>

      {/* Competitive Edge Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#071C2C] mb-4">Why Choose FabricIRIS?</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Traditional QC systems create bottlenecks. FabricIRIS eliminates them.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Typical QC Systems */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-[#071C2C] mb-6 text-center">Typical QC Systems</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Requires cloud connectivity</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Requires installation teams</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Machine-specific solutions</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Ongoing subscription fees</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Slow integration timelines</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Model drift over time</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Heavy infrastructure footprint</span>
                </div>
              </div>
            </div>

            {/* FabricIRIS */}
            <div className="bg-gradient-to-br from-[#2E68FF]/5 to-[#11D1C2]/5 rounded-2xl p-8 border-2 border-[#2E68FF]">
              <h3 className="text-[#071C2C] mb-6 text-center">FabricIRIS</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#11D1C2] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Predictable on-device intelligence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#11D1C2] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Hardware-accelerated processing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#11D1C2] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Universal compatibility</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#11D1C2] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">No cloud, no technical dependencies</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#11D1C2] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Works offline</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#11D1C2] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Low total cost of ownership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section id="specs" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#071C2C] mb-4">Technical Specifications</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Enterprise-grade hardware built for industrial environments.
            </p>
          </div>

          <Tabs defaultValue="hardware" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="hardware">Hardware</TabsTrigger>
              <TabsTrigger value="optical">Optical Module</TabsTrigger>
              <TabsTrigger value="fpga">FPGA Engine</TabsTrigger>
              <TabsTrigger value="mounts">Supported Mounts</TabsTrigger>
              <TabsTrigger value="operating">Operating Conditions</TabsTrigger>
            </TabsList>

            <TabsContent value="hardware" className="bg-white rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#071C2C] mb-4">Device Specifications</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Dimensions</span>
                      <span className="text-[#071C2C]">280 x 120 x 85 mm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Weight</span>
                      <span className="text-[#071C2C]">2.4 kg</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Enclosure</span>
                      <span className="text-[#071C2C]">Industrial IP65</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Power</span>
                      <span className="text-[#071C2C]">24V DC, 45W max</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#071C2C] mb-4">Build Quality</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Housing</span>
                      <span className="text-[#071C2C]">Aluminum alloy</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Mounting</span>
                      <span className="text-[#071C2C]">Universal bracket</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Cooling</span>
                      <span className="text-[#071C2C]">Passive + Active hybrid</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">MTBF</span>
                      <span className="text-[#071C2C]">&gt;50,000 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="optical" className="bg-white rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#071C2C] mb-4">Camera & Sensor</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Resolution</span>
                      <span className="text-[#071C2C]">12 MP (4096 x 3000)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Frame Rate</span>
                      <span className="text-[#071C2C]">Up to 120 fps</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Pixel Size</span>
                      <span className="text-[#071C2C]">0.05 mm per pixel</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Sensor Type</span>
                      <span className="text-[#071C2C]">Global shutter CMOS</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#071C2C] mb-4">Lighting System</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Type</span>
                      <span className="text-[#071C2C]">Multi-angle LED array</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Color Temperature</span>
                      <span className="text-[#071C2C]">5000K - 6500K adjustable</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Uniformity</span>
                      <span className="text-[#071C2C]">&gt;95%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Lifetime</span>
                      <span className="text-[#071C2C]">100,000 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fpga" className="bg-white rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#071C2C] mb-4">Processing Power</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">FPGA Model</span>
                      <span className="text-[#071C2C]">Xilinx Kintex UltraScale+</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Processing Latency</span>
                      <span className="text-[#071C2C]">&lt;10ms end-to-end</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Memory</span>
                      <span className="text-[#071C2C]">8GB DDR4</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Storage</span>
                      <span className="text-[#071C2C]">256GB NVMe SSD</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#071C2C] mb-4">Performance</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Throughput</span>
                      <span className="text-[#071C2C]">Up to 200 m/min</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Defect Detection Rate</span>
                      <span className="text-[#071C2C]">&gt;99.5%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">False Positive Rate</span>
                      <span className="text-[#071C2C]">&lt;0.5%</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Power Efficiency</span>
                      <span className="text-[#071C2C]">15 TOPS/W</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mounts" className="bg-white rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-[#071C2C] mb-3">Knitting Machines</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Circular knitting</li>
                    <li>• Flat knitting</li>
                    <li>• Warp knitting</li>
                    <li>• Seamless knitting</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-[#071C2C] mb-3">Weaving Machines</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Rapier looms</li>
                    <li>• Air-jet looms</li>
                    <li>• Water-jet looms</li>
                    <li>• Projectile looms</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-[#071C2C] mb-3">Processing Lines</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Dyeing ranges</li>
                    <li>• Finishing lines</li>
                    <li>• Printing tables</li>
                    <li>• Inspection frames</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-[#071C2C] mb-3">Cutting Systems</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Manual cutting tables</li>
                    <li>• Automated cutters</li>
                    <li>• Laser cutters</li>
                    <li>• Die cutters</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-[#071C2C] mb-3">Garment Production</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Sewing lines</li>
                    <li>• QC stations</li>
                    <li>• Packing lines</li>
                    <li>• Final inspection</li>
                  </ul>
                </div>

                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="text-[#071C2C] mb-3">Custom Mounts</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Bespoke brackets</li>
                    <li>• Retrofit solutions</li>
                    <li>• Mobile stands</li>
                    <li>• Multi-position mounts</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="operating" className="bg-white rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#071C2C] mb-4">Environmental Range</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Operating Temperature</span>
                      <span className="text-[#071C2C]">0°C to 50°C</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Storage Temperature</span>
                      <span className="text-[#071C2C]">-20°C to 70°C</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Humidity</span>
                      <span className="text-[#071C2C]">10% to 90% RH, non-condensing</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Altitude</span>
                      <span className="text-[#071C2C]">Up to 2000m</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-[#071C2C] mb-4">Durability & Standards</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Vibration Tolerance</span>
                      <span className="text-[#071C2C]">IEC 60068-2-6 compliant</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Shock Resistance</span>
                      <span className="text-[#071C2C]">IEC 60068-2-27 compliant</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">EMC Compliance</span>
                      <span className="text-[#071C2C]">CE, FCC, RoHS certified</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Warranty</span>
                      <span className="text-[#071C2C]">3 years standard</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#071C2C] to-[#2E68FF] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white mb-6">
            Ready to transform your fabric quality control?
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Edge-only, universally compatible, and instantly deployable.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#071C2C] hover:bg-white/90">
              Contact Sales
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#071C2C]">
              Book a Factory Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071C2C] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#071C2C]" />
                </div>
                <span>FabricIRIS</span>
              </div>
              <p className="text-white/70 text-sm">
                Universal edge QC for the modern textile factory.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Product</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Specifications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
            <p>© 2025 FabricIRIS. All rights reserved. Built for the factories of tomorrow.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
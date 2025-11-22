import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Icon name="Target" size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">HR Consultant</h1>
                <p className="text-xs text-slate-500">Career Development with AI</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
                <Icon name="Home" size={18} />
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
                <Icon name="LineChart" size={18} />
                <span>Diagnostics</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 transition font-medium">
                <Icon name="User" size={18} />
                <span>Profile</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
                <Icon name="TrendingUp" size={18} />
                <span>Career</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
                <Icon name="Calendar" size={18} />
                <span>Plan</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition">
                <Icon name="BookOpen" size={18} />
                <span>Resources</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Alexey Petrov</h2>
              <p className="text-lg text-slate-600 mb-4">Middle Frontend Developer</p>
              <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                Middle
              </Badge>
            </div>
            <Button className="bg-white text-slate-700 border border-slate-200 hover:bg-slate-50">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Retake Assessment
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-100">
            <h3 className="text-sm font-medium text-slate-600 mb-4">AI Development Index</h3>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-5xl font-bold text-slate-900">72</span>
              <span className="text-2xl text-slate-500">/100</span>
            </div>
            <Progress value={72} className="mb-3 h-2" />
            <p className="text-sm text-slate-600">Overall development readiness indicator</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
            <h3 className="text-sm font-medium text-slate-600 mb-4">Skill Map Coverage</h3>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-5xl font-bold text-slate-900">68</span>
              <span className="text-2xl text-slate-500">%</span>
            </div>
            <Progress value={68} className="mb-3 h-2" />
            <p className="text-sm text-slate-600">Coverage of required competencies</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100">
            <h3 className="text-sm font-medium text-slate-600 mb-4">Career Readiness</h3>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-5xl font-bold text-slate-900">75</span>
              <span className="text-2xl text-slate-500">%</span>
            </div>
            <Progress value={75} className="mb-3 h-2" />
            <p className="text-sm text-slate-600">Readiness for Senior transition</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Icon name="BarChart3" size={24} />
              Competency Profile
            </h3>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="hard">Hard Skills</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">React / TypeScript</span>
                      <Badge variant="outline" className="text-xs">hard</Badge>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">System Design</span>
                      <Badge variant="outline" className="text-xs">hard</Badge>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900">Project Management</span>
                      <Badge variant="outline" className="text-xs">hard</Badge>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">52%</span>
                  </div>
                  <Progress value={52} className="h-2" />
                </div>
              </TabsContent>

              <TabsContent value="hard" className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-slate-900">React / TypeScript</span>
                    <span className="text-sm font-semibold text-slate-700">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-slate-900">System Design</span>
                    <span className="text-sm font-semibold text-slate-700">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-slate-900">Project Management</span>
                    <span className="text-sm font-semibold text-slate-700">52%</span>
                  </div>
                  <Progress value={52} className="h-2" />
                </div>
              </TabsContent>

              <TabsContent value="soft" className="space-y-6">
                <p className="text-slate-600 text-center py-8">No soft skills data available</p>
              </TabsContent>
            </Tabs>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Icon name="Award" size={24} />
              Recent Achievements
            </h3>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="GraduationCap" size={24} className="text-cyan-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-1">Completed Architecture Module</h4>
                  <p className="text-sm text-slate-600">October 15, 2024</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Code2" size={24} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-1">Conducted 12 Code Reviews</h4>
                  <p className="text-sm text-slate-600">October 28, 2024</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <div className="fixed bottom-6 right-6">
        <Button size="lg" className="rounded-full w-14 h-14 bg-cyan-500 hover:bg-cyan-600 shadow-lg">
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default Index;

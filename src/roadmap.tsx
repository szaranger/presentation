import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from "./components/ui/card";
import { Users, Cpu, BarChart, Wrench, TrendingUp, Handshake, Lightbulb, Trophy } from "lucide-react";

interface RoadmapSlide {
  title: string;
  subtitle: string;
  items: Array<{
    icon: React.ComponentType<{ className?: string }>;
    text: string;
  }>;
  highlight: string;
  bgColor: string;
  borderColor: string;
  iconColor: string;
}

interface RoadmapPresentationProps {
  className?: string;
}

export function RoadmapPresentation({ className }: RoadmapPresentationProps): React.JSX.Element {
  const roadmapData: RoadmapSlide[] = [
    {
      title: "0–3 Months: Foundation & Discovery",
      subtitle: "\"Laying the Tracks\" – Everything you do here determines the speed later.",
      items: [
        { icon: Users, text: "Build rapport with stakeholders and offshore consultancy team (weekly & after-hours touchpoints)" },
        { icon: Cpu, text: "Full tech stack & AWS audit, improve CI/CD pipeline and uplift code quality" },
        { icon: BarChart, text: "Meet George & Mark regularly; engage with customers & pre-sales" }
      ],
      highlight: "Early Wins: Quick fixes + test coverage + code quality uplift",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      title: "3–6 Months: Optimisation & Early Growth",
      subtitle: "\"Switching Gears\" – From audit mode to delivery mode.",
      items: [
        { icon: Wrench, text: "Implement platform & DevOps improvements" },
        { icon: Cpu, text: "Introduction of Frontend and backend best practices, bring in contractor for AWS heavy lifting" },
        { icon: Users, text: "Hire first engineers & start one-to-ones" }
      ],
      highlight: "Impact: Faster delivery, happier customers",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600"
    },
    {
      title: "6–9 Months: Scaling & Strategic Alignment",
      subtitle: "\"Accelerating the Train\" – More capacity, more impact.",
      items: [
        { icon: Users, text: "Expand team in line with roadmap needs" },
        { icon: Wrench, text: "Deliver major features based on feedback" },
        { icon: TrendingUp, text: "Targeted campaigns for new customers" }
      ],
      highlight: "Quote: \"More hands, more minds, more momentum\"",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600"
    },
    {
      title: "9–12 Months: Expansion & Future Positioning",
      subtitle: "\"Full Steam Ahead\" – Consolidate & set up for long-term growth.",
      items: [
        { icon: Handshake, text: "Build strategic partnerships/integrations" },
        { icon: Lightbulb, text: "Embed innovation sprints; cement culture" },
        { icon: Trophy, text: "Revenue growth & long-term scaling" }
      ],
      highlight: "Business + Tech = Sustainable Growth",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 ${className || ''}`}>
      {roadmapData.map((slide: RoadmapSlide, index: number) => (
        <Card key={index} className={`${slide.bgColor} ${slide.borderColor}`}>
          <CardHeader>
            <CardTitle className="text-xl font-bold">{slide.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="italic mb-4">{slide.subtitle}</p>
            {slide.items.map((item, itemIndex) => {
              const IconComponent = item.icon;
              return (
                <div key={itemIndex} className="flex items-center gap-3 mb-2">
                  <IconComponent className={slide.iconColor} />
                  {item.text}
                </div>
              );
            })}
            <div className={`${slide.bgColor.replace('bg-', 'bg-').replace('-50', '-100')} rounded p-2 mt-4 font-semibold`}>
              {slide.highlight}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

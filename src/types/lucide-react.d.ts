declare module 'lucide-react' {
  import * as React from 'react';
  
  export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  
  export type Icon = React.FC<IconProps>;
  
  export type LucideIcon = React.FC<IconProps>;
  
  // Define common icons used in the application
  export const Home: Icon;
  export const Truck: Icon;
  export const FileText: Icon;
  export const Phone: Icon;
  export const Menu: Icon;
  export const User: Icon;
  export const Briefcase: Icon;
  export const Moon: Icon;
  export const Sun: Icon;
  export const MoveRight: Icon;
  export const X: Icon;
  
  // Icons for features
  export const TruckIcon: Icon;
  export const DollarSign: Icon;
  export const Calendar: Icon;
  export const PieChart: Icon;
  export const HeadphonesIcon: Icon;
  export const CheckCircle: Icon;
  export const GripVertical: Icon;
  export const Zap: Icon;
  export const Check: Icon;
  export const ShieldCheck: Icon;
  export const Clock: Icon;
  export const BarChart3: Icon;
  
  // Additional icons for the accordion form
  export const ChevronDown: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  
  // Social media icons for footer
  export const Facebook: Icon;
  export const Twitter: Icon;
  export const Instagram: Icon;
  export const Linkedin: Icon;
}

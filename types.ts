export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SERVICES = 'services',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
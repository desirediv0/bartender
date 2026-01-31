import { CheckCircle2, ShieldCheck, UserCheck, Sparkles } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-brand-navy/30 flex items-center justify-center border border-brand-purple/20">
        <Icon className="w-6 h-6 text-brand-purple" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function WhyChoose() {
  const points = [
    {
      icon: CheckCircle2,
      title: 'PUNCTUALITY',
      description: 'You need not worry; our staff is on site, well dressed, and set up well before your guests arrive. We take pride in being on time and ready to work quietly right away.',
    },
    {
      icon: ShieldCheck,
      title: 'RELIABILITY',
      description: 'Planning takes time and attention. When you engage Bartenders Club Delhi, you can count on respect, patience, and courtesy. Our years of experience and network save you time and money.',
    },
    {
      icon: Sparkles,
      title: 'PRESENTATION VALUE',
      description: 'Your beverage area will always be well organized and beautifully maintained. Your guests will rave about how fantastic their drinks were and how kindly they were treated.',
    },
    {
      icon: UserCheck,
      title: 'EXPERIENCED TEAM',
      description: 'Since 2015, we have built strong relationships with catering companies and event planners, ensuring top-notch service delivery.',
    }
  ];

  return (
    <section className="py-24 bg-brand-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Why Choose Us?
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            The difference is in the details. Here&apos;s why Delhi prefers us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <FeatureItem key={index} {...point} />
          ))}
        </div>
      </div>
    </section>
  );
}

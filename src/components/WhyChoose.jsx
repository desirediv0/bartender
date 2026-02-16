import { CheckCircle2, ShieldCheck,  Sparkles } from 'lucide-react';
import Link from 'next/link';



export default function WhyChoose() {
  const points = [
    {
      icon: CheckCircle2,
      title: 'PUNCTUALITY',
      description: 'This is very important for any event or party. By our punctuality you need of worry of knowing that your bartending staff is on site, well dressed and has set up well before your guests start to arrive. You can check our staff to arrive on time and quietly ho to work right away.',
    },
    {
      icon: ShieldCheck,
      title: 'RELIABILITY',
      description: 'Planning and organising an event takes time and attention to detail. When you engage the bartending services of  Bartenders Club Delhi  to provide a bartender for your event you can always count on being treated with respect, patience, and courtesy throughout the process. By our years of experience , our knowledge and our valuable network of contacts will save your time and money.',
    },
    {
      icon: Sparkles,
      title: 'PRESENTATION VALUE',
      description: 'With us, your beverage area will always be well organized and well maintained. You\'ll love to see your bar organized beautifully and carefully. Our bartending services of  Bartenders Club Delhi team will have your guests raving about how fantastic , of fabulous their drinks were, and how kindly they were treated .',
    }
  ];

  return (
    <section className="py-12 md:py-14 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-royal-purple mb-6 font-heading">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-body text-lg">
            The difference is in the details. Here&apos;s why Delhi prefers us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100 feature-item">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-royal-purple/10 flex items-center justify-center border border-royal-purple/20">
                  <point.icon className="w-6 h-6 text-royal-purple" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-royal-purple mb-2 font-heading">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-body">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto p-10 bg-royal-purple rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-soft-gold/20 blur-[50px] rounded-full"></div>

          <p className="text-xl text-white font-medium leading-relaxed font-heading relative z-10 italic">
            &quot;For excellent service for your event, contact the Bartenders Club Delhi . Call us to discuss your bartending needs.&quot;
          </p>
          <div className="mt-8 relative z-10">
            <Link href="/contact" className="inline-block px-8 py-3 bg-white text-royal-purple font-heading font-bold uppercase tracking-wide hover:bg-soft-gold hover:text-royal-purple transition-all duration-300 shadow-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

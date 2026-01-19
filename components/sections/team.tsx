import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { User } from 'lucide-react';
import { teamContent } from '@/config/content';

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <Container>
        <SectionTitle title={teamContent.title} />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamContent.members.map((member) => (
            <div
              key={member.name}
              className="bg-muted/50 rounded-2xl p-6 border border-border text-center hover:border-primary/50 transition-colors duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-10 h-10 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
              <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

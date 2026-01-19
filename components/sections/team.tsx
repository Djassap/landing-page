import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import { User } from 'lucide-react';
import { teamContent } from '@/config/content';

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-to-b from-background via-muted/10 to-background">
      <Container>
        <SectionTitle
          badge="Équipe"
          title="Une équipe complémentaire et engagée"
          subtitle="Des profils techniques et business expérimentés, réunis autour d'une même vision : démocratiser le commerce digital en Afrique francophone."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamContent.members.map((member) => (
            <div
              key={member.name}
              className="group relative"
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl blur-xl transition-all duration-300 group-hover:from-primary/10" />

              {/* Card */}
              <div className="relative bg-background rounded-3xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                {/* Avatar */}
                <div className="flex mb-4 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-brand/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <User className="w-8 h-8 text-primary/60" />
                  </div>
                  {/* Name & Role */}
                  <div className="">
                    <h3 className="text-xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {member.role}
                    </p>
                  </div>
                </div>


                {/* Bio */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

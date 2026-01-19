import { Container } from '../ui/container';
import { SectionTitle } from '../ui/section-title';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqContent } from '@/config/content';

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <Container>
        <SectionTitle title={faqContent.title} />
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqContent.items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}

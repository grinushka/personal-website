import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

type SocialLink = {
  name: string;
  url: string;
  username?: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/grinushka",
    username: "@grinushka",
  },
  {
    name: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=slv.violetta@gmail.com",
    username: "slv.violetta@gmail.com",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/grinushka__/",
    username: "@grinushka__",
  },
];

export function ContactInfo() {
  const isMobile = useIsMobile();

  return (
    <div className="max-w-2xl">
      <p className="text-md pb-2">Reach out</p>
      <div className={`flex ${isMobile ? "flex-col gap-2" : "flex-row gap-3"}`}>
        {socialLinks.map(link => {
          const isExternalLink = link.url.startsWith("http");

          return (
            <Button
              key={link.name}
              asChild
              variant="secondary"
              className="justify-start gap-3 py-5 text-left w-1xs hover:cursor-pointer hover:bg-muted-foreground/12 dark:hover:bg-muted-foreground/15"
            >
              <a
                href={link.url}
                target={isExternalLink ? "_blank" : undefined}
                rel={isExternalLink ? "noopener noreferrer" : undefined}
                className="block "
              >
                <div>
                  <div className="font-medium text-xxs">{`> ${link.name}`}</div>
                  <div className="text-xxs text-muted-foreground">{link.username}</div>
                </div>
              </a>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

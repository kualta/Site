import { ContactIcon } from "components/ContactIcons";
import { Contact } from "@prisma/client";
import { FadeIn } from "@/components/FadeIn";
import { Card } from "@/components/Card";
import { fredoka } from "styles/fonts";

async function ContactsPage() {
  const contacts: Contact[] = await (
    await fetch("https://kualta.dev/api/contacts", { cache: "no-store" })
  ).json();

  return (
    <FadeIn>
      <div
        className={`flex justify-center items-center flex-col gap-4 h-[90vh] ${fredoka.className}`}
      >
        {contacts.map((contact: Contact) => {
          const icon = ContactIcon(contact, 22);
          return (
            <Card key={contact.link + contact.description}>
              <a
                className={
                  "flex gap-4 hover:underline p-1 px-2 items-center w-60"
                }
                href={contact.link}
              >
                <span>{icon}</span>
                <div>
                  <p>{contact.label}</p>
                  <p className="overflow-x-visible w-fit text-xs text-secondary-text">
                    {contact.description}
                  </p>
                </div>
              </a>
            </Card>
          );
        })}
      </div>
    </FadeIn>
  );
}

export default ContactsPage;

import { LinkHeader } from "components/LIstTitle";
import { Contact, Project } from "@prisma/client";
import { ContactList, DataList } from "components/DataList";
import { getAllPosts } from "../prisma/dataFetch";
import { getAllContacts } from "../prisma/dataFetch";
import { getAllProjects } from "../prisma/dataFetch";
import Polyhedron from "@/components/Polyhedron";

async function HomePage() {
  const projects = await ((await getAllProjects()).json())
    .then((projects: Project[]) => projects.filter((project: Project) => project.status !== "planned"))
    .then((projects: Project[]) => projects.filter((project: Project) => project.relevance && project.relevance > 25));

  const contacts = await (
    await getAllContacts()
  )
    .json()
    .then((contacts: any) => contacts.filter((contact: Contact) => contact.is_main));

  const articles = await (await getAllPosts()).json();

  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col gap-8 justify-center">

        <div>
          <LinkHeader href={"/projects"} text={"projects"} />
          <DataList data={projects} />
        </div>

        <div>
          <LinkHeader href={"/blog"} text={"articles"} />
          <DataList data={articles} />
        </div>

        <div>
          <LinkHeader href={"/contacts"} text={"contacts"} />
          <ContactList contacts={contacts} />
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <Polyhedron />
      </div>
    </div>
  );
}

export default HomePage;

"use client";
import { Project } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

const ProjectsPage = ({ projects }: { projects: Project[] }) => {
  const [selectedStatuses, setSelectedStatuses] = useState(["planned", "complete", "ongoing", "paused", "archived"]);

  function handleStatusChange(e: { target: { value: any } }) {
    const value = e.target.value;
    setSelectedStatuses((prevSelectedStatuses) => {
      if (prevSelectedStatuses.includes(value)) {
        return prevSelectedStatuses.filter((status) => status !== value);
      } else {
        return [...prevSelectedStatuses, value];
      }
    });
  }

  const filteredProjects = projects.filter((project) => {
    return selectedStatuses.includes(project.status);
  });

  const projectsGrid = filteredProjects.map((project) => {
    const link = project.link ? project.link : project.git_link;
    const border_color = getBorderStyleForStatus(project.status);

    return (
      <div key={project.id}>
        <a
          key={project.id}
          className={`flex group border-2 border-yell aspect-video items-center justify-center ${border_color}`}
          href={link}
        >
          <b className={"$group-hover:underline"}>{project.name}</b>
        </a>
      </div>
    );
  });

  return (
    <div>
      <div className={"flex flex-wrap gap-4 p-4 justify-center items-center "}>
        <label>
          <input
            type="checkbox"
            value="planned"
            checked={selectedStatuses.includes("planned")}
            onChange={handleStatusChange}
            className="mr-2 accent-gray-900"
          />
          Planned
        </label>
        <label>
          <input
            type="checkbox"
            value="ongoing"
            checked={selectedStatuses.includes("ongoing")}
            onChange={handleStatusChange}
            className="mr-2 accent-stone-800"
          />
          Ongoing
        </label>
        <label>
          <input
            type="checkbox"
            value="complete"
            checked={selectedStatuses.includes("complete")}
            onChange={handleStatusChange}
            className="mr-2 accent-stone-800"
          />
          Completed
        </label>
        <label>
          <input
            type="checkbox"
            value="paused"
            checked={selectedStatuses.includes("paused")}
            onChange={handleStatusChange}
            className="mr-2 accent-stone-800"
          />
          Paused
        </label>
        <label>
          <input
            type="checkbox"
            value="archived"
            checked={selectedStatuses.includes("archived")}
            onChange={handleStatusChange}
            className="mr-2 accent-yellow-900"
          />
          Archived
        </label>
      </div>
      <div className="grid grid-cols-3 grid-flow-row m-4 gap-4 p-4 my-10">{projectsGrid}</div>
    </div>
  );
};

function getBorderStyleForStatus(status: string) {
  switch (status) {
    case "ongoing":
      return "border-lit-accent dark:border-dark-accent";
    case "complete":
      return "border-lit-primary dark:border-dark-primary";
    case "planned":
      return "border-gray-300 dark:border-gray-900";
    case "archived":
      return "border-lit-secondary dark:border-dark-secondary";
    case "paused":
      return "border-lit-secondary dark:border-dark-secondary";
    default:
      return "border-lit-secondary dark:border-dark-secondary";
  }
}

export default ProjectsPage;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  useProjectData,
  Project,
} from "@/hooks/MockData/Projects/useProjectData";
import ProjectModal, {
  ProjectFormData,
} from "@/components/Modal/Dashboard/ProjectModal";

export default function DashboardPage() {
  const router = useRouter();
  const { projects } = useProjectData();
  const totalProjects = projects.length;
  const featuredCount = projects.filter((project) => project.featured).length;
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingProject, setEditingProject] = useState<ProjectFormData | null>(
    null
  );

  const handleAddProject = () => {
    setModalMode("add");
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    setModalMode("edit");
    setEditingProject({
      id: project.id,
      title: project.title,
      category: project.category,
      description: project.description || "",
      technologies: project.technologies || [],
      link: project.link || [],
      images: project.images || [],
      featured: project.featured ?? false,
      thumbnail: project.thumbnail || "",
    });
    setIsModalOpen(true);
  };

  const handleSubmitProject = async (data: ProjectFormData) => {
    // Use local API routes to proxy requests with auth cookie
    const url =
      modalMode === "add" ? "/api/projects" : `/api/projects/${data.id}`;

    const res = await fetch(url, {
      method: modalMode === "add" ? "POST" : "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        category: data.category,
        description: data.description,
        technologies: data.technologies,
        link: data.link,
        imagesUrl: data.images,
        featured: data.featured,
        thumbnail: data.thumbnail,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.error || "Failed to save project");
    }

    // Refresh the page to show updated data
    window.location.reload();
  };

  const handleDeleteProject = async (project: Project) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${project.title}"?`
    );

    if (!confirmed) return;

    try {
      // Use local API route to proxy delete with auth cookie
      const res = await fetch(`/api/projects/${project.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to delete project");
      }

      // Refresh the page to show updated data
      window.location.reload();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to delete project";
      alert(message);
    }
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      // Use local API route to clear cookie
      await fetch("/api/auth/logout", {
        method: "POST",
      });
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Still redirect to login even if request fails
      router.push("/login");
    }
  };

  return (
    <div className="bg-images min-h-screen text-light px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Projects Dashboard
            </h1>
            <p className="mt-2 text-secondary text-sm md:text-base max-w-xl">
              View and manage your portfolio projects here. You can use this
              page later to edit, add, or remove projects.
            </p>
          </div>
          <div className="flex items-end gap-4">
            <div className="rounded-xl border border-gray-800 bg-[#020617] px-4 py-3 text-sm">
              <div className="text-secondary">Total projects</div>
              <div className="text-xl font-semibold">{totalProjects}</div>
            </div>
            <div className="rounded-xl border border-gray-800 bg-[#020617] px-4 py-3 text-sm">
              <div className="text-secondary">Featured</div>
              <div className="text-xl font-semibold">{featuredCount}</div>
            </div>
          </div>
        </header>

        <section className="backdrop-blur-md bg-white/2 border border-white/10 rounded-2xl p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-semibold">Projects</h2>
            <div className="flex items-center gap-4">
              <button
                onClick={handleAddProject}
                className="px-4 py-2 rounded-full bg-primary text-dark font-medium text-xs md:text-sm hover:bg-teal-400 transition-colors duration-300"
              >
                + Add Project
              </button>
            </div>
          </div>

          {projects.length === 0 ? (
            <p className="text-secondary text-sm">No projects found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-gray-800 text-secondary text-xs uppercase">
                  <tr>
                    <th className="py-2 pr-4 hidden md:table-cell">Images</th>
                    <th className="py-2 pr-4">Title</th>
                    <th className="py-2 pr-4 hidden md:table-cell">Category</th>
                    <th className="py-2 pr-4 hidden md:table-cell">Featured</th>
                    <th className="py-2 pr-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr
                      key={project.id}
                      className="border-b border-gray-900 last:border-0"
                    >
                      <td className="py-3 pr-4 hidden md:table-cell">
                        {project.thumbnail ? (
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                        ) : (
                          <span className="text-xs text-secondary">
                            No image
                          </span>
                        )}
                      </td>
                      <td className="py-3 pr-4">
                        <div className="font-medium">{project.title}</div>
                        <div className="mt-1 text-xs text-secondary">
                          {project.description}
                        </div>
                      </td>
                      <td className="py-3 pr-4 text-xs hidden md:table-cell">
                        <span className="inline-flex items-center rounded-full bg-gray-900 px-3 py-1 capitalize">
                          {project.category}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-xs hidden md:table-cell">
                        {project.featured ? (
                          <span className="inline-flex rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-400">
                            Featured
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-gray-900 px-2 py-1 text-secondary">
                            Regular
                          </span>
                        )}
                      </td>
                      <td className="py-3 pr-4">
                        <div className="flex flex-wrap gap-2 text-xs">
                          <button
                            type="button"
                            onClick={() => handleEditProject(project)}
                            className="rounded-full bg-primary text-dark px-3 py-1 font-medium hover:bg-teal-400 transition-colors duration-300"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteProject(project)}
                            className="rounded-full border border-gray-700 px-3 py-1 text-secondary hover:border-red-500 hover:text-red-400 transition-colors duration-300"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="fixed bottom-6 right-6 rounded-xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-400 hover:bg-red-500/20 transition-colors duration-300 disabled:opacity-50 backdrop-blur-sm"
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>

      {/* Logout button - fixed bottom right */}
      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitProject}
        initialData={editingProject}
        mode={modalMode}
      />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { isValidUrl, isValidImageUrl, sanitizeString } from "@/lib/validation";

export interface ProjectFormData {
  id?: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  link: string[];
  images: string[];
  featured: boolean;
  thumbnail: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ProjectFormData) => Promise<void>;
  initialData?: ProjectFormData | null;
  mode: "add" | "edit";
}

const emptyFormData: ProjectFormData = {
  title: "",
  category: "web",
  description: "",
  technologies: [],
  link: [],
  images: [],
  featured: false,
  thumbnail: "",
};

export default function ProjectModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  mode,
}: ProjectModalProps) {
  const [formData, setFormData] = useState<ProjectFormData>(emptyFormData);
  const [techInput, setTechInput] = useState("");
  const [linkInput, setLinkInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Reset form when modal opens/closes or initialData changes
  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData(initialData);
      } else {
        setFormData(emptyFormData);
      }
      setTechInput("");
      setLinkInput("");
      setImageInput("");
      setError("");
    }
  }, [isOpen, initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Sanitize inputs before submission
    const sanitizedData = {
      ...formData,
      title: sanitizeString(formData.title, 200),
      description: sanitizeString(formData.description, 2000),
      category: sanitizeString(formData.category, 50),
    };

    if (!sanitizedData.title.trim()) {
      setError("Title is required");
      return;
    }

    // Validate thumbnail if provided
    if (formData.thumbnail) {
      const isRelativePath = formData.thumbnail.startsWith("/");
      if (!isRelativePath && !isValidImageUrl(formData.thumbnail)) {
        setError("Please enter a valid thumbnail URL");
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      onClose();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Failed to save project";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const addTechnology = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, techInput.trim()],
      });
      setTechInput("");
    }
  };

  const removeTechnology = (tech: string) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((t) => t !== tech),
    });
  };

  const addLink = () => {
    const trimmedLink = linkInput.trim();
    if (!trimmedLink) return;

    // Validate URL format
    if (!isValidUrl(trimmedLink)) {
      setError("Please enter a valid URL (e.g., https://example.com)");
      return;
    }

    if (!formData.link.includes(trimmedLink)) {
      setFormData({
        ...formData,
        link: [...formData.link, trimmedLink],
      });
      setLinkInput("");
      setError("");
    }
  };

  const removeLink = (link: string) => {
    setFormData({
      ...formData,
      link: formData.link.filter((l) => l !== link),
    });
  };

  const addImage = () => {
    const trimmedImage = imageInput.trim();
    if (!trimmedImage) return;

    // Allow relative paths starting with / or validate as URL
    const isRelativePath = trimmedImage.startsWith("/");
    if (!isRelativePath && !isValidImageUrl(trimmedImage)) {
      setError(
        "Please enter a valid image URL (e.g., https://example.com/image.jpg) or a relative path (e.g., /assets/image.jpg)"
      );
      return;
    }

    if (!formData.images.includes(trimmedImage)) {
      setFormData({
        ...formData,
        images: [...formData.images, trimmedImage],
      });
      setImageInput("");
      setError("");
    }
  };

  const removeImage = (image: string) => {
    setFormData({
      ...formData,
      images: formData.images.filter((i) => i !== image),
    });
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4 bg-[#020617] border border-gray-800 rounded-2xl shadow-2xl">
        <div className="sticky top-0 bg-[#020617] border-b border-gray-800 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-light">
            {mode === "add" ? "Add New Project" : "Edit Project"}
          </h2>
          <button
            onClick={onClose}
            className="text-secondary hover:text-light transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Title */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-light">
              Title <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full rounded-lg border border-gray-700 bg-dark px-3 py-2 text-sm text-light focus:outline-none focus:border-primary"
              placeholder="Project title"
            />
          </div>

          {/* Category */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-light">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              className="w-full rounded-lg border border-gray-700 bg-dark px-3 py-2 text-sm text-light focus:outline-none focus:border-primary"
            >
              <option value="web">Web Development</option>
              <option value="design">Graphic Design</option>
              <option value="mobile">Mobile Apps</option>
            </select>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-light">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className="w-full rounded-lg border border-gray-700 bg-dark px-3 py-2 text-sm text-light focus:outline-none focus:border-primary resize-none"
              placeholder="Project description"
            />
          </div>

          {/* Image Class */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-light">
              Thumbnail
            </label>
            <input
              type="text"
              value={formData.thumbnail}
              onChange={(e) =>
                setFormData({ ...formData, thumbnail: e.target.value })
              }
              className="w-full rounded-lg border border-gray-700 bg-dark px-3 py-2 text-sm text-light focus:outline-none focus:border-primary"
              placeholder="e.g., www.googleimages.com"
            />
          </div>

          {/* Technologies */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-light">
              Technologies
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTechnology();
                  }
                }}
                className="flex-1 rounded-lg border border-gray-700 bg-dark px-3 py-2 text-sm text-light focus:outline-none focus:border-primary"
                placeholder="Add technology"
              />
              <button
                type="button"
                onClick={addTechnology}
                className="px-4 py-2 rounded-lg bg-gray-800 text-light text-sm hover:bg-gray-700 transition-colors"
              >
                Add
              </button>
            </div>
            {formData.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-800 text-secondary text-xs "
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => removeTechnology(tech)}
                      className="hover:text-red-400"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Links */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-light">
              Links
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={linkInput}
                onChange={(e) => setLinkInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addLink();
                  }
                }}
                className="flex-1 rounded-lg border border-gray-700 bg-dark px-3 py-2 text-sm text-light focus:outline-none focus:border-primary"
                placeholder="Add link URL"
              />
              <button
                type="button"
                onClick={addLink}
                className="px-4 py-2 rounded-lg bg-gray-800 text-light text-sm hover:bg-gray-700 transition-colors"
              >
                Add
              </button>
            </div>
            {formData.link.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.link.map((link) => (
                  <span
                    key={link}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-800 text-secondary text-xs max-w-full"
                  >
                    <span className="truncate max-w-[200px]">{link}</span>
                    <button
                      type="button"
                      onClick={() => removeLink(link)}
                      className="hover:text-red-400"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Images */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-light">
              Images (URLs)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={imageInput}
                onChange={(e) => setImageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addImage();
                  }
                }}
                className="flex-1 rounded-lg border border-gray-700 bg-dark px-3 py-2 text-sm text-light focus:outline-none focus:border-primary"
                placeholder="Add image URL (e.g., /assets/Projects/...)"
              />
              <button
                type="button"
                onClick={addImage}
                className="px-4 py-2 rounded-lg bg-gray-800 text-light text-sm hover:bg-gray-700 transition-colors"
              >
                Add
              </button>
            </div>
            {formData.images.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.images.map((image, index) => (
                  <span
                    key={`${image}-${index}`}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-800 text-secondary text-xs max-w-full"
                  >
                    <span className="truncate max-w-[200px]">{image}</span>
                    <button
                      type="button"
                      onClick={() => removeImage(image)}
                      className="hover:text-red-400"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Featured */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({ ...formData, featured: e.target.checked })
              }
              className="w-4 h-4 rounded border-gray-700 bg-dark text-primary focus:ring-primary"
            />
            <label htmlFor="featured" className="text-sm text-light">
              Featured project
            </label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-gray-800">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-full border border-gray-700 text-secondary text-sm hover:border-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-2.5 rounded-full bg-primary text-dark font-semibold text-sm hover:bg-teal-400 transition-colors disabled:opacity-50"
            >
              {isSubmitting
                ? "Saving..."
                : mode === "add"
                ? "Add Project"
                : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
